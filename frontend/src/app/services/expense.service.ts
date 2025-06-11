import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private baseUrl = 'http://localhost:3000/expenses';

  constructor(private httpClient: HttpClient) {}

  // Read
  getAllExpenses() {
    this.httpClient.get(this.baseUrl).subscribe(console.log);
  }

  createExpense() {}

  deleteExpense() {}

  updateExpense() {}
}
