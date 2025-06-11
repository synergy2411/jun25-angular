import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { IExpense } from '../../model/expense.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent implements OnInit {
  expenses!: Array<IExpense>;
  toggle = false;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.expenseService
      .getAllExpenses()
      .subscribe((allExpenses) => (this.expenses = allExpenses));
  }

  onCloseForm() {
    this.toggle = false;
  }

  onAddNewExpense(newExpense: IExpense) {
    this.expenseService
      .createExpense(newExpense)
      .subscribe((createdExpense) => {
        this.expenses.push(createdExpense);
        this.onCloseForm();
      });
  }

  onDelete(expenseId: string) {
    this.expenseService.deleteExpense(expenseId).subscribe(() => {
      const position = this.expenses.findIndex(
        (expense) => expense.id === expenseId
      );
      if (position >= 0) {
        this.expenses.splice(position, 1);
      }
    });
  }
}
