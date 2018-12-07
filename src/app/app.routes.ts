import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './components/home/home.component';
import { RegistrarAlumnoComponent } from './components/alumno/registrar-alumno/registrar-alumno.component';
import { RegistrarTutorComponent } from './components/tutor/registrar-tutor/registrar-tutor.component';
import { LoginComponent } from './components/login/login.component';
import { ActualizarEmpleadoComponent } from './components/empleado/actualizar-empleado/actualizar-empleado.component';
import { ActualizarAlumnoComponent } from './components/alumno/actualizar-alumno/actualizar-alumno.component';
import { ActualizarTutorComponent } from './components/tutor/actualizar-tutor/actualizar-tutor.component';
import { RegistrarEmpleadoComponent } from './components/empleado/registrar-empleado/registrar-empleado.component';
import { EmpleadoGuard } from './guards/empleado.guard';
import { AlumnoGuard } from './guards/alumno.guard';
import { TutorGuard } from './guards/tutor.guard';
import { EvaluarComponent } from './components/empleado/evaluar/evaluar.component';
import { EvaluarTutorComponent } from './components/empleado/evaluar-tutor/evaluar-tutor.component';
import { PublicarTutoriaComponent } from './components/tutor/publicar-tutoria/publicar-tutoria.component';
import { MisTutoriasComponent } from './components/tutor/mis-tutorias/mis-tutorias.component';
import { ListadoTutoriasComponent } from './components/alumno/listado-tutorias/listado-tutorias.component';
import { PagarTutoriaComponent } from './components/alumno/pagar-tutoria/pagar-tutoria.component';
import { HistorialComponent } from './components/alumno/historial/historial.component';
import { ReporteComponent } from './components/empleado/reporte/reporte.component';
import { ActualizarTutoriaComponent } from './components/tutor/actualizar-tutoria/actualizar-tutoria.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ingresar', component: LoginComponent },
    { path: 'empleado/registrar', component: RegistrarEmpleadoComponent },
    { path: 'empleado/actualizar', component: ActualizarEmpleadoComponent, canActivate: [EmpleadoGuard] },
    { path: 'empleado/evaluar', component: EvaluarComponent, canActivate: [EmpleadoGuard] },
    { path: 'empleado/evaluar/tutor/:id', component: EvaluarTutorComponent, canActivate: [EmpleadoGuard] },
    { path: 'empleado/reporte', component: ReporteComponent, canActivate: [EmpleadoGuard] },
    { path: 'alumno/registrar', component: RegistrarAlumnoComponent },
    { path: 'alumno/actualizar', component: ActualizarAlumnoComponent, canActivate: [AlumnoGuard] },
    { path: 'alumno/listado-tutorias', component: ListadoTutoriasComponent, canActivate: [AlumnoGuard] },
    { path: 'alumno/historial', component: HistorialComponent, canActivate: [AlumnoGuard] },
    { path: 'alumno/pagar-tutoria/:id_tutoria/:precio_tutoria', component: PagarTutoriaComponent, canActivate: [AlumnoGuard] },
    { path: 'tutor/registrar', component: RegistrarTutorComponent },
    { path: 'tutor/actualizar', component: ActualizarTutorComponent, canActivate: [TutorGuard] },
    { path: 'tutor/publicar-tutoria', component: PublicarTutoriaComponent, canActivate: [TutorGuard] },
    { path: 'tutor/mis-tutorias', component: MisTutoriasComponent, canActivate: [TutorGuard] },
    { path: 'tutor/actualizar-tutoria/:idTutoria', component: ActualizarTutoriaComponent, canActivate: [TutorGuard] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);