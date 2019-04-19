import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { USER_ROUTE } from './components/user/user.routes';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'user/:id', component: UserComponent, children: USER_ROUTE },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);