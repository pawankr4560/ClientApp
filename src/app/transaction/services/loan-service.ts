import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { InterestCalculationType } from '../../setting/interest-setting.service';

export interface Loan {
  id?: number;
  userId?: string;
  userName?: string;
  loanNumber: string;
  loanAmount: number;
  rate?: number;
  interestCalculationType?: InterestCalculationType;
  emi?: number;
  tenure?: number;
  startDate?: string;
  endDate?: string;
  status?: string;
  isSelected?: boolean;
  active?: boolean;
  isDeleted?: boolean;
  createdDateTime?: string;
  updatedDateTime?: string;
  createdBy?: number;
  updatedBy?: number;
  emiSchedules?: LoanEMISchedule[];
  payments?: LoanPayment[];
}

export interface LoanEMISchedule {
  id?: number;
  loanId?: number;
  installmentNo: number;
  dueDate: string;
  emiAmount: number;
  principalAmount: number;
  interestAmount: number;
  outstandingBalance: number;
  isPaid: boolean;
  paidDate?: string | null;
  active?: boolean;
  isDeleted?: boolean;
}

export interface LoanPayment {
  id?: number;
  loanId: number;
  scheduleId: number;
  amountPaid: number;
  paymentDate: string;
  transactionId: string;
  paymentMode?: string | null;
  paymentStatus: string;
  remarks?: string | null;
  active?: boolean;
  isDeleted?: boolean;
}

export interface LoanCustomer {
  id: string;
  customerName: string;
}

export interface LoanDataResponse {
  loanNumber: string;
  customerList: LoanCustomer[];
}

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  get apiUrl(): string {
    return environment.apiUrl;
  }

  get apiKey(): string {
    return environment.apiKey;
  }

  private headers!: HttpHeaders;

  private loansSubject = new BehaviorSubject<Loan[]>([]);
  loans$ = this.loansSubject.asObservable();

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      api_key: this.apiKey,
    } as any);
  }

  loadLoans() {
    return this.http
      .get<any[]>(`${this.apiUrl}/api/Loan`, { headers: this.headers })
      .pipe(
        map((res) => {
          const items = res ?? [];
          // API may return null/undefined entries; filter them out safely.
          return items
            .filter((x) => x != null)
            .map((loan: any) => this.normalizeLoan(loan));
        }),
        tap((loans) => {
          this.loansSubject.next(loans);
        })
      );
  }

  createLoan(loan: Loan) {
    return this.http
      .post<any>(`${this.apiUrl}/api/Loan`, this.toLoanPayload(loan), { headers: this.headers })
      .pipe(
        map((res) => {
          const data = res?.data ?? res;
          return this.normalizeLoan(data);
        }),
        tap((res) => {
          this.loansSubject.next([...(this.loansSubject.value ?? []), res]);
        })
      );
  }

  updateLoan(loan: Loan) {
    return this.http
      .put<any>(`${this.apiUrl}/api/Loan`, this.toLoanPayload(loan), { headers: this.headers })
      .pipe(
        map((res) => {
          const data = res?.data ?? res;
          return this.normalizeLoan(data);
        }),
        tap((res) => {
          const current = this.loansSubject.value ?? [];
          const updated = current.map((i) => (i.id === res.id ? res : i));
          this.loansSubject.next(updated);
        })
      );
  }

  deleteLoan(id: number) {
    return this.http
      .delete<any>(`${this.apiUrl}/api/Loan`, {
        headers: this.headers,
        params: { id: id.toString() }
      })
      .pipe(
        tap(() => {
          this.loansSubject.next(
            (this.loansSubject.value ?? []).filter(i => i.id !== id)
          );
        })
      );
  }

  getLoanData() {
    return this.http.get<LoanDataResponse>(`${this.apiUrl}/api/Loan/loan-data`, { headers: this.headers });
  }

  private toLoanPayload(loan: Loan) {
    return {
      id: loan.id ?? 0,
      userId: loan.userId ?? '',
      loanNumber: loan.loanNumber ?? '',
      loanAmount: Number(loan.loanAmount ?? 0),
      emi: Number(loan.emi ?? 0),
      rate: Number(loan.rate ?? 0),
      interestCalculationType: (loan.interestCalculationType ?? 'Flat') === 'Reducing',
      tenure: Number(loan.tenure ?? 0),
      startDate: this.toApiDateTime(loan.startDate) ?? new Date().toISOString(),
      endDate:
        this.toApiDateTime(loan.endDate) ??
        this.toApiDateTime(loan.startDate) ??
        new Date().toISOString(),
      status: loan.status ?? 'Pending',
      active: loan.active ?? true,
    };
  }

  private toApiDateTime(value: string | undefined): string | null {
    if (!value) {
      return null;
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return null;
    }

    return date.toISOString();
  }

  private normalizeLoan(loan: any): Loan {
    const id = loan?.Id ?? loan?.id;
    const emi = loan?.EMI ?? loan?.emi ?? loan?.emiAmount;

    return {
      ...loan,
      id,
      userId: loan?.UserId ?? loan?.userId ?? '',
      userName: loan?.UserName ?? loan?.userName ?? '',
      loanNumber: loan?.LoanNumber ?? loan?.loanNumber ?? '',
      loanAmount: loan?.LoanAmount ?? loan?.loanAmount ?? 0,
      rate: loan?.Rate ?? loan?.rate ?? 0,
      interestCalculationType: this.normalizeInterestCalculationType(
        loan?.InterestCalculationType ??
          loan?.interestCalculationType ??
          loan?.InterestType ??
          loan?.interestType
      ),
      tenure: loan?.Tenure ?? loan?.tenure ?? 0,
      emi,
      startDate: loan?.StartDate ?? loan?.startDate,
      endDate: loan?.EndDate ?? loan?.endDate,
      status: loan?.Status ?? loan?.status ?? 'Pending',
      active: loan?.Active ?? loan?.active ?? true,
      isDeleted: loan?.IsDeleted ?? loan?.isDeleted ?? false,
      createdDateTime: loan?.F_Created_Date_Time ?? loan?.createdDateTime,
      updatedDateTime: loan?.F_Updated_Date_Time ?? loan?.updatedDateTime,
      createdBy: loan?.F_User_Index_Created ?? loan?.createdBy,
      updatedBy: loan?.F_User_Index_Update ?? loan?.updatedBy,
      emiSchedules: this.normalizeSchedules(
        loan?.LoanEMISchedules ?? loan?.loanEMISchedules ?? loan?.emiSchedules ?? loan?.schedules
      ),
      payments: this.normalizePayments(loan?.LoanPayments ?? loan?.loanPayments ?? loan?.payments),
    } as Loan;
  }

  private normalizeSchedules(items: any[] | null | undefined): LoanEMISchedule[] {
    return (items ?? [])
      .filter((item) => item != null)
      .map((item) => ({
        id: item.Id ?? item.id,
        loanId: item.LoanId ?? item.loanId,
        installmentNo: item.InstallmentNo ?? item.installmentNo ?? 0,
        dueDate: item.DueDate ?? item.dueDate,
        emiAmount: item.EMIAmount ?? item.emiAmount ?? 0,
        principalAmount: item.PrincipalAmount ?? item.principalAmount ?? 0,
        interestAmount: item.InterestAmount ?? item.interestAmount ?? 0,
        outstandingBalance: item.OutstandingBalance ?? item.outstandingBalance ?? 0,
        isPaid: item.IsPaid ?? item.isPaid ?? false,
        paidDate: item.PaidDate ?? item.paidDate ?? null,
        active: item.Active ?? item.active ?? true,
        isDeleted: item.IsDeleted ?? item.isDeleted ?? false,
      }));
  }

  private normalizePayments(items: any[] | null | undefined): LoanPayment[] {
    return (items ?? [])
      .filter((item) => item != null)
      .map((item) => ({
        id: item.Id ?? item.id,
        loanId: item.LoanId ?? item.loanId,
        scheduleId: item.ScheduleId ?? item.scheduleId,
        amountPaid: item.AmountPaid ?? item.amountPaid ?? 0,
        paymentDate: item.PaymentDate ?? item.paymentDate,
        transactionId: item.TransactionId ?? item.transactionId ?? '',
        paymentMode: item.PaymentMode ?? item.paymentMode ?? null,
        paymentStatus: item.PaymentStatus ?? item.paymentStatus ?? 'Success',
        remarks: item.Remarks ?? item.remarks ?? null,
        active: item.Active ?? item.active ?? true,
        isDeleted: item.IsDeleted ?? item.isDeleted ?? false,
      }));
  }

  private normalizeInterestCalculationType(value: unknown): InterestCalculationType {
    if (typeof value === 'boolean') {
      return value ? 'Reducing' : 'Flat';
    }

    return String(value).toLowerCase() === 'reducing' ? 'Reducing' : 'Flat';
  }
}
