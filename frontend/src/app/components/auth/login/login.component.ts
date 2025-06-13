import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private cdRef: ChangeDetectorRef
  ) {}

  submitHandler(loginForm: NgForm) {
    // this.cdRef.detach();
    console.log(loginForm);
    const { email, password } = loginForm.value;
    debugger;
    this.authService.userLogin(email, password);
    // this.cdRef.reattach();
  }
}
