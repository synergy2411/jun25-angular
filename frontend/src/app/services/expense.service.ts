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

  // Create
  createExpense(newExpense: IExpense) {
    return this.httpClient.post<IExpense>(this.baseUrl, newExpense, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Delete
  deleteExpense(expenseId: string) {
    return this.httpClient.delete(`${this.baseUrl}/${expenseId}`);
  }

  // Update - id, values
  updateExpense(expense: IExpense) {
    return this.httpClient.patch(`${this.baseUrl}/${expense.id}`, expense, {
      headers: {
        'Content-Type': 'application.json',
      },
    });
  }
}
