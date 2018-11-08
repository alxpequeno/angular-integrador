import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { APP_ROUTING } from './app.routes';
import { HomeComponent } from './components/home/home.component';


// services
import { EmpleadoService } from './services/empleado.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrarEmpleadoComponent,
    HomeComponent
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
