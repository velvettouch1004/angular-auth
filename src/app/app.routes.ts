import { Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

export const routes: Routes = [
    {path: "signin", component: SigninComponent},
    {path: "signup", component: SignupComponent}
];
