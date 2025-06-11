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
  toggleEdit = false;
  expenseEdit!: IExpense;

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

  onEdit(expense: IExpense) {
    this.expenseEdit = expense;
    this.toggleEdit = true;
  }

  onEditExpense(editedExpense: IExpense) {
    this.expenseService.updateExpense(editedExpense).subscribe(() => {
      const position = this.expenses.findIndex(
        (expense) => expense.id === editedExpense.id
      );
      this.expenses[position] = editedExpense;
      this.toggleEdit = false;
    });
  }
}
