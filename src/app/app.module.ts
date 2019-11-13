import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './application/principal/principal.component';
import {FirstComponent} from './application/first/first.component';
import {SecondComponent} from './application/second/second.component';
import {DateService} from './application/date.service';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
