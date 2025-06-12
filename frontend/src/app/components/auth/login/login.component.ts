import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  submitHandler(loginForm: NgForm) {
    console.log(loginForm);
    const { email, password } = loginForm.value;
    this.authService.userLogin(email, password);
  }
}
