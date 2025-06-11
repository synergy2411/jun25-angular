import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IExpense } from '../../../model/expense.model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent {
  @Output()
  onCloseEvent = new EventEmitter();

  @Output()
  onNewExpenseEvent = new EventEmitter<IExpense>();

  newExpenseForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newExpenseForm = this.fb.group({
      title: new FormControl(),
      amount: new FormControl(),
      createdAt: new FormControl(),
    });
  }

  onSubmit() {
    this.onNewExpenseEvent.emit(this.newExpenseForm.value);
  }

  onClose() {
    this.onCloseEvent.emit();
  }
}
