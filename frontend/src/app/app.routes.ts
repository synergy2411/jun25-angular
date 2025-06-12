import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { PipeExampleComponent } from './components/demo/pipe-example/pipe-example.component';

export const APP_ROUTES: Routes = [
  {
    path: '', // http://localhost:4200
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'pipes', // http://localhost:4200/pipes
    component: PipeExampleComponent,
  },
  {
    path: 'login', // http://localhost:4200/login
    component: LoginComponent,
  },
  {
    path: 'register', // http://localhost:4200/register
    component: RegisterComponent,
  },
  {
    path: 'users', // http://localhost:4200/users
    component: UsersComponent,
  },
  {
    path: 'expenses', // http://localhost:4200/expenses
    component: ExpensesComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
