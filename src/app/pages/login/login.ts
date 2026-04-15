import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
	credentials!: FormGroup;

	private authService = inject(AuthService);
	private userService = inject(UserService);
	private router = inject(Router);
	private fb = inject(FormBuilder);

	constructor() {}

	ngOnInit() {
		this.credentials = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});
	}

	async login() {
		const user = await this.authService.login(this.credentials.value);
		if (user) {
			this.userService.setTokenId(user);
			this.router.navigateByUrl('/home', { replaceUrl: true });
		} else {
			console.error('Login failed');
		}
	}

}