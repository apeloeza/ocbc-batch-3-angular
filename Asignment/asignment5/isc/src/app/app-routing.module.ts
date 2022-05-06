import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './allCountries/allCountries.component';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailComponent } from './countryDetail/countryDetail.component';



const routes: Routes = [
  { path: '',redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'allCountries', component: AllCountriesComponent },
  { path: 'countryDetail/:id', component: CountryDetailComponent},
];

@NgModule({
  declarations: [],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
