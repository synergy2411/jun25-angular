import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm!: FormGroup;

  countries = [
    {
      id: '101',
      name: 'United State',
    },
    { id: '102', name: 'India' },
    { id: '103', name: 'Canada' },
  ];

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group(
      {
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
        hobbies: new FormArray([]),
        tnc: new FormControl('', [Validators.requiredTrue]),
        role: new FormControl(),
        selectedCountry: new FormControl(),
      }
      // {
      //   validators: [RegisterComponent.formPasswordValidator],
      // }
    );
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

  get hobbies() {
    return this.registerForm.controls['hobbies'] as FormArray;
  }

  get selectedCountry() {
    return this.registerForm.controls['selectedCountry'] as FormControl;
  }

  get tnc() {
    return this.registerForm.controls['tnc'] as FormControl;
  }

  onSubmit() {
    console.log(this.registerForm);
    this.authService.userRegister(
      this.registerForm.value.username,
      this.registerForm.value.password
    );
  }

  onAddnewHobby() {
    this.hobbies.push(
      this.fb.group({
        name: new FormControl(),
        freq: new FormControl(),
      })
    );
  }

  onDeleteHobby(i: number) {
    this.hobbies.removeAt(i);
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

  static formPasswordValidator(form: FormGroup): ValidationErrors | null {
    if (
      form.controls['password'].value !== form.controls['cnfPassword'].value
    ) {
      return { passwordMismatchedError: true };
    } else {
      return null;
    }
  }
}
