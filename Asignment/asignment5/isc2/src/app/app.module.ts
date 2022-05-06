import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AllcountryComponent } from './allcountry/allcountry.component';

import { AppComponent } from './app.component';
import { CountrydetailComponent } from './countrydetail/countrydetail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllcountryComponent,
    CountrydetailComponent,


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
