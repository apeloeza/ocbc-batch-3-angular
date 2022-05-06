import { Component, OnInit } from '@angular/core';
import { Country } from '../Models/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-allCountries',
  templateUrl: './allCountries.component.html',
  styleUrls: ['./allCountries.component.css']
})
export class AllCountriesComponent implements OnInit {

  allCountries: Country[] = [];
  allCountries2: Country[] = [];

  constructor(private countryService: CountryService) { }

  getAllCountries(){
    this.countryService.getCountries().subscribe(countries => this.allCountries = countries);
    this.countryService.getCountries().subscribe(countries => this.allCountries2 = countries);
  }
  ngOnInit(): void {
    this.getAllCountries();
  }

}
