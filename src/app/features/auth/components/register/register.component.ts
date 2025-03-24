import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {samePasswordValidator} from '../../validators/same-password.validator';
import {AuthService} from '../../services/auth.service';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {Password} from 'primeng/password';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    FloatLabel,
    InputText,
    Password,
    Button
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _authService: AuthService = inject(AuthService);

  @Output()
  private readonly close: EventEmitter<void> = new EventEmitter();

  registerForm: FormGroup;

  constructor() {
    this.registerForm = this._fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
    });
    this.registerForm.setValidators(samePasswordValidator());
  }

  submit() {

    this.registerForm.markAllAsTouched();

    if (this.registerForm.invalid) {
      return;
    }

    this._authService.register(this.registerForm.value).subscribe({
      next: () => {
        this.closeForm();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  closeForm() {
    this.close.emit();
  }
}
