import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { LoanService, Loan, LoanCustomer } from '../services/loan-service';

@Component({
  selector: 'app-loan-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
  ],
  templateUrl: 'loan-component.html',
  styleUrls: ['loan-component.css'],
})
export class LoanComponent implements OnInit {
  loans: Loan[] = [];
  loanSearch = '';
  pageIndex = 0;
  pageSize = 10;

  displayedColumns = ['loanNumber', 'customerName', 'tenureMonths', 'emi', 'dueDate', 'actions'];
  customers: LoanCustomer[] = [];

  // simple form model for create/edit
  editing: boolean = false;
  current!: Loan;

  private originalLoanNumber?: string;

  constructor(private loanService: LoanService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loanService.loans$.subscribe((l) => (this.loans = l ?? []));
    this.load();
  }

  load() {
    this.loanService.loadLoans().subscribe({ error: (e) => console.error('Load loans failed', e) });
  }

  get filteredLoans(): Loan[] {
    const query = this.loanSearch?.trim().toLowerCase();
    if (!query) {
      return this.loans;
    }

    return this.loans.filter((loan) => {
      const loanNumber = loan.loanNumber?.toString().toLowerCase() ?? '';
      const userName = loan.userName?.toString().toLowerCase() ?? '';
      const amount = loan.loanAmount?.toString().toLowerCase() ?? '';
      return loanNumber.includes(query) || userName.includes(query) || amount.includes(query);
    });
  }

  get pageCount(): number {
    return Math.ceil(this.filteredLoans.length / this.pageSize);
  }

  private get normalizedPageIndex(): number {
    return this.pageCount === 0 ? 0 : Math.min(this.pageIndex, this.pageCount - 1);
  }

  get pagedLoans(): Loan[] {
    const start = this.normalizedPageIndex * this.pageSize;
    return this.filteredLoans.slice(start, start + this.pageSize);
  }

  get currentPageNumber(): number {
    return this.normalizedPageIndex + 1;
  }

  get startRecord(): number {
    return this.filteredLoans.length === 0 ? 0 : this.normalizedPageIndex * this.pageSize + 1;
  }

  get endRecord(): number {
    return Math.min((this.normalizedPageIndex + 1) * this.pageSize, this.filteredLoans.length);
  }

  onSearchChange(value: string) {
    this.loanSearch = value?.trim() ?? '';
    this.pageIndex = 0;
  }

  onCustomerChange(userId: string) {
    this.current.userId = userId;
    const selected = this.customers.find((customer) => customer.id === userId);
    this.current.userName = selected?.customerName ?? '';
  }

  get selectedLoanCount(): number {
    return this.loans.filter((loan) => loan.isSelected).length;
  }

  get selectedLoan(): Loan | undefined {
    return this.loans.find((loan) => loan.isSelected);
  }

  onLoanSelected(loan: Loan) {
    const wasSelected = !!loan.isSelected;
    this.loans.forEach((item) => {
      item.isSelected = false;
    });
    if (!wasSelected) {
      loan.isSelected = true;
    }
  }

  private buildPrintPage(loan: Loan): string {
    const schedule = this.generateInstallmentSchedule(loan);
    const totalEMI = schedule.reduce((sum, item) => sum + item.emi, 0);
    const loanAmount = loan.loanAmount ?? 0;
    const rate = loan.rate ?? 0;
    const tenure = loan.tenure ?? 0;

    return `
      <div class="print-page">
        <div class="print-card">
          <div class="print-header">
            <div>
              <h1>Loan Installment Schedule</h1>
              <div class="print-subtitle">Generated for loan <strong>${loan.loanNumber}</strong></div>
            </div>
            <div class="print-meta">
              <div><strong>Customer</strong><span>${loan.userName ?? '-'}</span></div>
              <div><strong>Loan Amount</strong><span>₹${loanAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></div>
              <div><strong>Rate</strong><span>${rate.toFixed(2)}%</span></div>
              <div><strong>Tenure</strong><span>${tenure} months</span></div>
            </div>
          </div>

          <table class="print-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>EMI</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              ${schedule
                .map(
                  (item) => `
                    <tr>
                      <td>${item.monthLabel}</td>
                      <td>₹${item.emi.toFixed(2)}</td>
                      <td>${item.dueDate}</td>
                    </tr>`
                )
                .join('')}
            </tbody>
            <tfoot>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>₹${totalEMI.toFixed(2)}</strong></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>`;
  }

  private getPrintStyles(): string {
    return `
      <style>
        body { margin: 0; padding: 0; font-family: Arial, sans-serif; color: #1f2937; background: #f6f8fb; }
        .print-page { padding: 24px; }
        .print-card { background: #ffffff; border-radius: 12px; box-shadow: 0 16px 48px rgba(16, 24, 40, 0.08); padding: 28px; }
        .print-header { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 16px; border-bottom: 1px solid #e5e7eb; padding-bottom: 18px; margin-bottom: 24px; }
        .print-header h1 { margin: 0; font-size: 28px; letter-spacing: -0.02em; }
        .print-subtitle { color: #4b5563; margin-top: 6px; }
        .print-meta { display: flex; flex-wrap: wrap; gap: 16px; justify-content: flex-end; }
        .print-meta div { min-width: 160px; }
        .print-meta strong { display: block; color: #111827; margin-bottom: 4px; font-size: 13px; }
        .print-meta span { color: #374151; font-size: 15px; }
        .print-table { width: 100%; border-collapse: collapse; margin-top: 8px; }
        .print-table th,
        .print-table td { border: 1px solid #e5e7eb; padding: 14px 12px; text-align: left; }
        .print-table th { background: #eff6ff; color: #1e3a8a; font-weight: 700; }
        .print-table tbody tr:nth-child(even) { background: #f8fafc; }
        .print-table tfoot td { border-top: 2px solid #d1d5db; }
        .print-table tfoot td strong { font-size: 15px; }
        @media print {
          body { background: #fff; }
          .print-page { padding: 0; }
          .print-card { box-shadow: none; border-radius: 0; }
        }
      </style>
    `;
  }

  printSelected() {
    const selected = this.selectedLoan ? [this.selectedLoan] : [];
    if (!selected.length) {
      return;
    }

    const content = selected.map((loan) => this.buildPrintPage(loan)).join('');
    const styles = this.getPrintStyles();

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>Loan Installment Schedule</title>
          ${styles}
        </head>
        <body>${content}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }

  exportSelectedAsPdf() {
    const selected = this.selectedLoan ? [this.selectedLoan] : [];
    if (!selected.length) {
      return;
    }

    const html = selected.map((loan) => this.buildPrintPage(loan)).join('');
    const styles = this.getPrintStyles();
    const newWindow = window.open('', '_blank');
    if (!newWindow) {
      return;
    }

    newWindow.document.write(`
      <html>
        <head>
          <title>Loan Export PDF</title>
          ${styles}
        </head>
        <body>${html}</body>
      </html>
    `);
    newWindow.document.close();
    newWindow.focus();
    // User can save as PDF from browser print dialog
    newWindow.print();
  }

  exportSelectedAsExcel() {
    const selected = this.selectedLoan ? [this.selectedLoan] : [];
    if (!selected.length) {
      return;
    }

    // Export the full installment schedule: one CSV row per month
    const header = [
      'Loan Number',
      'Customer',
      'Loan Amount',
      'Rate',
      'Tenure (Months)',
      'Month',
      'EMI',
      'Due Date',
    ];

    const rows: string[][] = selected.flatMap((loan) => {
      const schedule = this.generateInstallmentSchedule(loan);
      const loanAmount = loan.loanAmount?.toString() ?? '';
      const rate = loan.rate?.toString() ?? '';
      const tenure = loan.tenure?.toString() ?? '';
      const customer = loan.userName ?? '';
      const loanNumber = loan.loanNumber ?? '';

      return schedule.map((item) => [
        loanNumber,
        customer,
        loanAmount,
        rate,
        tenure,
        item.monthLabel,
        item.emi.toFixed(2),
        item.dueDate,
      ]);
    });

    const csvContent = [header, ...rows]
      .map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(','))
      .join('\r\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'loan-export.csv';
    anchor.click();
    URL.revokeObjectURL(url);
  }

  clearSearch() {
    this.loanSearch = '';
    this.pageIndex = 0;
  }

  private loadLoanData() {
    this.loanService.getLoanData().subscribe({
      next: (data) => {
        this.customers = data.customerList ?? [];
        if (!this.current.id) {
          this.current.loanNumber = data.loanNumber ?? '';
        }

        if (!this.current.userId && this.current.userName) {
          const matchingCustomer = this.customers.find(
            (customer) => customer.customerName === this.current.userName || customer.id === this.current.userId
          );
          if (matchingCustomer) {
            this.current.userId = matchingCustomer.id;
            this.current.userName = matchingCustomer.customerName;
          }
        }
      },
      error: (e) => console.error('Failed to load loan data', e),
    });
  }

  firstPage() {
    this.pageIndex = 0;
  }

  previousPage() {
    if (this.currentPageNumber > 1) {
      this.pageIndex = this.normalizedPageIndex - 1;
    }
  }

  nextPage() {
    if (this.currentPageNumber < this.pageCount) {
      this.pageIndex = this.normalizedPageIndex + 1;
    }
  }

  lastPage() {
    if (this.pageCount > 0) {
      this.pageIndex = this.pageCount - 1;
    }
  }

  startCreate() {
    this.editing = true;
    this.current = {
      id: 0,
      userId: '',
      userName: '',
      loanNumber: '',
      loanAmount: 0,
      rate: 0,
      tenure: 0,
      emi: 0,
      createdDateTime: new Date().toISOString(),
      active: true,
    };

    this.loadLoanData();
  }

  startEdit(loan: Loan) {
    this.editing = true;
    this.current = { ...loan };
    this.originalLoanNumber = loan.loanNumber;
    this.loadLoanData();
  }

  cancel() {
    this.editing = false;
    this.current = {
      id: 0,
      userId: '',
      userName: '',
      loanNumber: '',
      loanAmount: 0,
      rate: 0,
      tenure: 0,
      emi: 0,
      createdDateTime: new Date().toISOString(),
      active: true,
    };
    this.originalLoanNumber = undefined;
  }

  save() {
    if (!this.current.createdDateTime) {
      this.current.createdDateTime = new Date().toISOString();
    }

    if (!this.current.emi || this.current.emi === 0) {
      this.current.emi = this.calculateEMI(this.current.loanAmount, this.current.rate ?? 0, this.current.tenure ?? 0);
    }

    if (this.current.id) {
      // Ensure loanNumber is not modified when updating
      if (this.originalLoanNumber) {
        this.current.loanNumber = this.originalLoanNumber;
      }
      this.loanService.updateLoan(this.current).subscribe({
        next: () => {
          this.cancel();
          this.load();
        },
        error: (e) => console.error(e),
      });
    } else {
      this.loanService.createLoan(this.current).subscribe({
        next: () => {
          this.cancel();
          this.load();
        },
        error: (e) => console.error(e),
      });
    }
  }

  remove(loan: Loan) {
    if (!loan.id) return;

    const dialogRef = this.dialog.open(LoanDeleteConfirmDialog, {
      width: '350px',
      data: { loanNumber: loan.loanNumber },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loanService.deleteLoan(loan.id!).subscribe({
          next: () => {
            this.load();
          },
          error: (e) => console.error(e),
        });
      }
    });
  }

  updateCurrentEmi() {
    if (!this.current) {
      return;
    }

    this.current.emi = this.calculateEMI(this.current.loanAmount, this.current.rate ?? 0, this.current.tenure ?? 0);
  }

  loanEMI(loan: Loan): number {
    return loan.emi ?? this.calculateEMI(loan.loanAmount, loan.rate ?? 0, loan.tenure ?? 0);
  }

  getLoanMonthLabel(loan: Loan): string {
    const createdDate = loan.createdDateTime ? new Date(loan.createdDateTime) : new Date();
    if (Number.isNaN(createdDate.getTime())) {
      return '';
    }
    return this.monthLabel(createdDate);
  }

  generateInstallmentSchedule(loan: Loan) {
    const emi = this.loanEMI(loan);
    const createdDate = loan.createdDateTime ? new Date(loan.createdDateTime) : new Date();
    const monthCount = loan.tenure ?? 0;

    const schedule = [] as Array<{ monthLabel: string; emi: number; dueDate: string }>;

    for (let i = 0; i < monthCount; i++) {
      const dueDateObj = this.addMonths(createdDate, i + 1);
      const monthLabel = this.monthLabel(dueDateObj);
      const dueDate = dueDateObj.toLocaleDateString();
      schedule.push({ monthLabel, emi, dueDate });
    }

    return schedule;
  }

  getLoanDueDate(loan: Loan): string {
    const createdDate = loan.createdDateTime ? new Date(loan.createdDateTime) : new Date();
    if (Number.isNaN(createdDate.getTime())) {
      return '';
    }

    return this.addMonths(createdDate, 1).toLocaleDateString();
  }

  private addMonths(date: Date, months: number): Date {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
  }

  private monthLabel(date: Date): string {
    return date.toLocaleString('en-US', { month: 'short' });
  }

  private formatDateInput(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  calculateEMI(amount: number, rate: number, tenureMonths: number): number {
    if (amount <= 0 || rate < 0 || tenureMonths <= 0) {
      return 0;
    }

    const totalMonths = tenureMonths;
    const monthlyRate = rate / 1200;

    if (monthlyRate === 0) {
      return Number((amount / totalMonths).toFixed(2));
    }

    const factor = Math.pow(1 + monthlyRate, totalMonths);
    const emi = (amount * monthlyRate * factor) / (factor - 1);

    return Number(emi.toFixed(2));
  }
}

@Component({
  selector: 'app-loan-delete-confirm-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule],
  template: `
    <div class="delete-dialog">
      <div class="dialog-icon">
        <mat-icon>warning</mat-icon>
      </div>
      <h2 mat-dialog-title>Delete Loan</h2>
      <mat-dialog-content>
        Are you sure you want to delete loan <strong>{{ data.loanNumber }}</strong>? This action cannot be undone.
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-button (click)="onCancel()">Cancel</button>
        <button mat-raised-button color="warn" (click)="onConfirm()">Delete</button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [
    `
      .delete-dialog {
        text-align: center;
      }
      .dialog-icon {
        font-size: 48px;
        color: #f44336;
        margin-bottom: 12px;
      }
      .dialog-icon mat-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        color: #f44336;
      }
      mat-dialog-content {
        margin: 20px 0;
      }
      strong {
        color: #1f3a6f;
      }
    `,
  ],
})
export class LoanDeleteConfirmDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { loanNumber: string },
    private dialogRef: MatDialogRef<LoanDeleteConfirmDialog>
  ) {}

  onConfirm() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}

