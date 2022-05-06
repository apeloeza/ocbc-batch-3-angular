import { Component } from '@angular/core';
import { Country } from './Models/country';
import { COUNTRIES } from './Models/mock-country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CountryData';

  countries = COUNTRIES;

  page = 'home';

  country: Country = {
    id: 0,
    name: "",
    capital: "",
    population: 0,
    area: 0,
    gdp: 0,
    currency: ""
  };

  handleClickHome = () => {
    this.page = 'home'
  }

  handleClickAllCountries = () => {
    this.page = 'allcountries'
  }

  handleClickCountry = (val: string) => {
    this.page = 'detail'
    this.country = this.countries.filter((country) => country.name === val)[0];
  }
}
