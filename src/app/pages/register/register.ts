import { Component, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/interfaces';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {
  private fb = inject(FormBuilder);

  private userService = inject(UserService);

  submitted = signal(false);
  loading = signal(false);

  registerForm = this.fb.group({
    username: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
  });

  register() {
    this.submitted.set(true);
    if (this.registerForm.invalid) {
      this.submitted.set(false);
      return;
    }
    this.loading.set(true);
    const { username, name, email } = this.registerForm.value;
    const user: User = { username, name, email };
    this.userService.setUser(user);
    this.registerForm.reset();
    this.submitted.set(false);
    this.loading.set(false);
  }
}
