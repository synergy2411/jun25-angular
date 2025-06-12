import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { PipeExampleComponent } from './components/demo/pipe-example/pipe-example.component';
import { ProductsComponent } from './components/products/products.component';
import { OverviewComponent } from './components/products/overview/overview.component';
import { SpecificationComponent } from './components/products/specification/specification.component';
import { AuthGuard } from './services/guards/auth.guard';

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
    canActivate: [AuthGuard],
  },
  {
    path: 'expenses', // http://localhost:4200/expenses
    component: ExpensesComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: ':productId/:productName/overview',
        component: OverviewComponent,
      },
      { path: ':productId/specification', component: SpecificationComponent },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

// http://localhost:4200/products/200/iPhone/overview
// http://localhost:4200/products/99/specification
// http://localhost:4200/products/99/specification?name=Iphone
