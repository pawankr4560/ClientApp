import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-emi',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './emi.html',
  styleUrls: ['./emi.css'],
})
export class Emi implements OnInit {
 loanAmount: number = 2500000;
  tenure: number = 7;
  interestRate: number = 7.75;

  emi: number = 0;
  totalInterest: number = 0;
  totalPayable: number = 0;

  ngOnInit(): void {
    this.calculateEMI();
  }

  calculateEMI(): void {
    const principal = this.loanAmount;
    const monthlyRate = this.interestRate / 12 / 100;
    const totalMonths = this.tenure * 12;

    if (monthlyRate === 0) {
      this.emi = Math.round(principal / totalMonths);
    } else {
      const emiValue =
        (principal *
          monthlyRate *
          Math.pow(1 + monthlyRate, totalMonths))
        /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

      this.emi = Math.round(emiValue);
    }

    this.totalPayable = this.emi * totalMonths;
    this.totalInterest = this.totalPayable - principal;
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-IN').format(value);
  }

  resetCalculator(): void {
    this.loanAmount = 2500000;
    this.tenure = 7;
    this.interestRate = 7.75;

    this.calculateEMI();
  }
}
