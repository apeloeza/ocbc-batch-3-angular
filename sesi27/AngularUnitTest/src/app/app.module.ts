import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Contoh1Component } from './contoh1/contoh1/contoh1.component';

@NgModule({
  declarations: [
    AppComponent,
    Contoh1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
