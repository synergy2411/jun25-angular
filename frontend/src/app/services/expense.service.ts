import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExpense } from '../model/expense.model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private baseUrl = 'http://localhost:3000/expenses';

  constructor(private httpClient: HttpClient) {}

  // Read
  getAllExpenses() {
    return this.httpClient.get<Array<IExpense>>(this.baseUrl);
  }

  createExpense() {}

  deleteExpense() {}

  updateExpense() {}
}
