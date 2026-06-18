import { Injectable } from '@angular/core';
import { BehaviorSubject, map, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Loan {
  id?: number;
  userId?: string;
  userName?: string;
  loanNumber: string;
  loanAmount: number;
  rate?: number;
  emi?: number;
  tenure?: number;
  isSelected?: boolean;
  active?: boolean;
  createdDateTime?: string;
  updatedDateTime?: string;
  createdBy?: number;
  updatedBy?: number;
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
          // Map Id (capital) from API to id (lowercase) for consistency
          return (res ?? []).map((loan) => ({
            ...loan,
            id: loan.Id ?? loan.id,
          }));
        }),
        tap((loans) => {
          this.loansSubject.next(loans);
        })
      );
  }

  createLoan(loan: Loan) {
    return this.http
      .post<any>(`${this.apiUrl}/api/Loan`, loan, { headers: this.headers })
      .pipe(
        map((res) => {
          const data = res?.data ?? res;
          return { ...data, id: data.Id ?? data.id };
        }),
        tap((res) => {
          this.loansSubject.next([...(this.loansSubject.value ?? []), res]);
        })
      );
  }

  updateLoan(loan: Loan) {
    return this.http
      .put<any>(`${this.apiUrl}/api/Loan`, loan, { headers: this.headers })
      .pipe(
        map((res) => {
          const data = res?.data ?? res;
          return { ...data, id: data.Id ?? data.id };
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
    .delete<any>(`${this.apiUrl}/api/Loan/${id}`, {
      headers: this.headers
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
}
