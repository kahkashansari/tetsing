import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from 'src/material.module';
import { Header1Component } from './header1/header1.component';
import { FormControlComponent } from './form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularmaterialCurdComponent } from './angularmaterial-curd/angularmaterial-curd.component';
import { DialogComponent } from './dialog/dialog.component';
import { OpenApiComponent } from './open-api/open-api.component';
import { ApiMovieComponent } from './api-movie/api-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MaincomponentComponent,
    Header1Component,
    FormControlComponent,
    AngularmaterialCurdComponent,
    DialogComponent,
    OpenApiComponent,
    ApiMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
