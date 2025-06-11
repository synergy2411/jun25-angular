import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CounterAComponent } from './components/demo/counter-a/counter-a.component';
import { CounterBComponent } from './components/demo/counter-b/counter-b.component';
import { CustomEventComponent } from './components/demo/custom-event/custom-event.component';
import { DirectiveExampleComponent } from './components/demo/directive-example/directive-example.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';
import { ObservableExampleComponent } from './components/demo/observable-example/observable-example.component';
import { PipeExampleComponent } from './components/demo/pipe-example/pipe-example.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UsersComponent } from './components/users/users.component';
import { CaptureDirective } from './directives/capture.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseFormComponent } from './components/expenses/expense-form/expense-form.component';
import { LoggerInterceptor } from './services/interceptors/logger.interceptor';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserImgComponent,
    UserInfoComponent,
    LifeCycleComponent,
    DirectiveExampleComponent,
    HighlightDirective,
    CaptureDirective,
    CustomEventComponent,
    PipeExampleComponent,
    CountryCodePipe,
    ReversePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    CounterAComponent,
    CounterBComponent,
    ObservableExampleComponent,
    ExpensesComponent,
    ExpenseFormComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, // [Logger, Auth, Cache,....]
      useClass: LoggerInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
