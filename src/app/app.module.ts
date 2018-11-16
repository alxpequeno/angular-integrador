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
    ActualizarTutorComponent
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
    EmpleadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
