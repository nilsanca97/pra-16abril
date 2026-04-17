import { Component, inject, input } from '@angular/core';
import { RouterLink, Router} from '@angular/router';
import { AuthService } from '../../../services/auth';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header {
  translateService = inject(TranslateService);
  
  titulo = input<string>('');
  
  authService = inject(AuthService);
  router = inject(Router);

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
