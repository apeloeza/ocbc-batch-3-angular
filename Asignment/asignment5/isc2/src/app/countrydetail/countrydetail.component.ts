import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../Models/country';


@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.css']
})
export class CountrydetailComponent implements OnInit {


  @Input() country: Country = {
    id: 0,
    name: "",
    capital: "",
    population: 0,
    area: 0,
    gdp: 0,
    currency: "",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
