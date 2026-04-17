import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';
import { Header } from '../../shared/components/header/header';

@Component({
  selector: 'app-about',
  imports: [Header],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

  authService = inject(AuthService);
  router = inject(Router);

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

}
