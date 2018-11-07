import { RouterModule, Routes } from '@angular/router'

import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';


const APP_ROUTES: Routes = [

    { path: 'registrar-empleado', component: RegistrarEmpleadoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);