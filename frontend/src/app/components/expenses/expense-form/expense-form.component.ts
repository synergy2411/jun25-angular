import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IExpense } from '../../../model/expense.model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent implements OnInit {
  @Input() expense!: IExpense;

  @Output()
  onCloseEvent = new EventEmitter();

  @Output()
  onExpenseFormEvent = new EventEmitter<IExpense>();

  newExpenseForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newExpenseForm = this.fb.group({
      title: new FormControl(),
      amount: new FormControl(),
      createdAt: new FormControl(),
    });
  }
  ngOnInit(): void {
    if (this.expense) {
      const createdDate = new Date(this.expense.createdAt);
      const year = createdDate.getFullYear();
      const day = createdDate.toLocaleString('en-US', { day: '2-digit' });
      const month = createdDate.toLocaleString('en-US', { month: '2-digit' });
      const updatedDate = `${year}-${month}-${day}`;

      this.newExpenseForm.patchValue({
        title: this.expense.title,
        amount: this.expense.amount,
        createdAt: updatedDate,
      });
    }
  }

  onSubmit() {
    this.onExpenseFormEvent.emit({
      ...this.newExpenseForm.value,
      id: this.expense.id,
    });
  }

  onClose() {
    this.onCloseEvent.emit();
  }
}
