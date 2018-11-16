import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './components/home/home.component';
import { RegistrarAlumnoComponent } from './components/alumno/registrar-alumno/registrar-alumno.component';
import { RegistrarTutorComponent } from './components/tutor/registrar-tutor/registrar-tutor.component';
import { LoginComponent } from './components/login/login.component';
import { ActualizarEmpleadoComponent } from './components/empleado/actualizar-empleado/actualizar-empleado.component';
import { ActualizarAlumnoComponent } from './components/alumno/actualizar-alumno/actualizar-alumno.component';
import { ActualizarTutorComponent } from './components/tutor/actualizar-tutor/actualizar-tutor.component';
import { RegistrarEmpleadoComponent } from './components/empleado/registrar-empleado/registrar-empleado.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ingresar', component: LoginComponent },
    { path: 'empleado/registrar', component: RegistrarEmpleadoComponent },
    { path: 'empleado/actualizar', component: ActualizarEmpleadoComponent },
    { path: 'alumno/registrar', component: RegistrarAlumnoComponent },
    { path: 'alumno/actualizar', component: ActualizarAlumnoComponent },
    { path: 'tutor/registrar', component: RegistrarTutorComponent },
    { path: 'tutor/actualizar', component: ActualizarTutorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);