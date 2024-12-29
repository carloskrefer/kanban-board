import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/login-page/login-page.component';
import { NavigationPageComponent } from './features/navigation/components/navigation-page/navigation-page.component';

export const routes: Routes = [
    { path: 'login', component: LoginPageComponent },
    { path: '', component: NavigationPageComponent },
    { path: '**', redirectTo: '' }
];
