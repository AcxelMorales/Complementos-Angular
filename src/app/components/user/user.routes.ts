import { Routes } from '@angular/router';
import { NewUserComponent } from './new-user.component';
import { EditUserComponent } from './edit-user.component';
import { DetalleUserComponent } from './detalle-user.component';

export const USER_ROUTE: Routes = [
    { path: 'nuevo', component: NewUserComponent },
    { path: 'editar', component: EditUserComponent },
    { path: 'detalle', component: DetalleUserComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
];