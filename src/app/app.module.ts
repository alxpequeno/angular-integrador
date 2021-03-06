import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { APP_ROUTING } from './app.routes';
import { HomeComponent } from './components/home/home.component';


// services
import { EmpleadoService } from './services/empleado.service';
import { RegistrarAlumnoComponent } from './components/alumno/registrar-alumno/registrar-alumno.component';
import { RegistrarTutorComponent } from './components/tutor/registrar-tutor/registrar-tutor.component';
import { ActualizarEmpleadoComponent } from './components/empleado/actualizar-empleado/actualizar-empleado.component';
import { LoginComponent } from './components/login/login.component';
import { ActualizarAlumnoComponent } from './components/alumno/actualizar-alumno/actualizar-alumno.component';
import { ActualizarTutorComponent } from './components/tutor/actualizar-tutor/actualizar-tutor.component';
import { RegistrarEmpleadoComponent } from './components/empleado/registrar-empleado/registrar-empleado.component';
import { EmpleadoGuard } from './guards/empleado.guard';
import { AlumnoGuard } from './guards/alumno.guard';
import { TutorGuard } from './guards/tutor.guard';
import { EvaluarComponent } from './components/empleado/evaluar/evaluar.component';
import { TutorTarjetaComponent } from './components/empleado/tutor-tarjeta/tutor-tarjeta.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { EvaluarTutorComponent } from './components/empleado/evaluar-tutor/evaluar-tutor.component';
import { PublicarTutoriaComponent } from './components/tutor/publicar-tutoria/publicar-tutoria.component';
import { MisTutoriasComponent } from './components/tutor/mis-tutorias/mis-tutorias.component';
import { ListadoTutoriasComponent } from './components/alumno/listado-tutorias/listado-tutorias.component';
import { PagarTutoriaComponent } from './components/alumno/pagar-tutoria/pagar-tutoria.component';
import { HistorialComponent } from './components/alumno/historial/historial.component';
import { ReporteComponent } from './components/empleado/reporte/reporte.component';
import { ActualizarTutoriaComponent } from './components/tutor/actualizar-tutoria/actualizar-tutoria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrarEmpleadoComponent,
    HomeComponent,
    RegistrarAlumnoComponent,
    RegistrarTutorComponent,
    ActualizarEmpleadoComponent,
    LoginComponent,
    ActualizarAlumnoComponent,
    ActualizarTutorComponent,
    EvaluarComponent,
    TutorTarjetaComponent,
    NoimagePipe,
    EvaluarTutorComponent,
    PublicarTutoriaComponent,
    MisTutoriasComponent,
    ListadoTutoriasComponent,
    PagarTutoriaComponent,
    HistorialComponent,
    ReporteComponent,
    ActualizarTutoriaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    EmpleadoService,
    EmpleadoGuard,
    TutorGuard,
    AlumnoGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
