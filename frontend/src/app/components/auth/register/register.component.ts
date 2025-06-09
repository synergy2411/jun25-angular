import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.email,
        // RegisterComponent.lowerCaseValidator,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        RegisterComponent.exclamationMarkValidator,
      ]),
      cnfPassword: new FormControl('', [
        Validators.required,
        RegisterComponent.confirmPasswordValidator,
      ]),
    });
  }

  get username() {
    return this.registerForm.controls['username'] as FormControl;
  }

  get password() {
    return this.registerForm.controls['password'] as FormControl;
  }

  get cnfPassword() {
    return this.registerForm.controls['cnfPassword'] as FormControl;
  }
  onSubmit() {
    console.log(this.registerForm);
  }

  static exclamationMarkValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    if (control.value.indexOf('!') >= 0) {
      return null;
    } else {
      return { exclamtionError: true };
    }
  }

  static lowerCaseValidator(control: AbstractControl): ValidationErrors | null {
    return /^[a-z]+$/.test(control.value) ? null : { lowercaseError: true };
    // return control.value === control.value.toLowerCase()
    //   ? null
    //   : { lowercaseError: true };
  }

  static confirmPasswordValidator(control: any): ValidationErrors | null {
    if (control.parent && control.parent.controls) {
      if (control.parent?.controls['password'].value !== control.value) {
        return { passwordMismatchedError: true };
      } else {
        return null;
      }
    }
    return null;
  }
}
