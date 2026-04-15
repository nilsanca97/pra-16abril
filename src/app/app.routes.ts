import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(m => m.Login),
        ...canActivate(redirectLoggedInToHome)
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register').then(m => m.Register),
        ...canActivate(redirectLoggedInToHome)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.About),
        ...canActivate(redirectUnauthorizedToLogin)
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        ...canActivate(redirectUnauthorizedToLogin)
    },
    {
        path: 'carrito',
        loadComponent: () => import('./pages/carrito/carrito').then(m => m.Carrito),
        ...canActivate(redirectUnauthorizedToLogin)
    }
];
