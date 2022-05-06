import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { Country } from '../Models/country';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() countries: Country[] = [];
  @Output() onChangeCountry = new EventEmitter();

  MostPopulated: Country[] = [];
  LargestArea: Country[] = [];


  constructor() { }

  ngOnInit(): void {
    this.MostPopulated = [...this.countries].sort((a, z) => {
      return z.population - a.population
    }).slice(0, 3);
    this.LargestArea = [...this.countries].sort((a, z) => {
      return z.area - a.area
    }).slice(0, 3);
  }

  countrySelected = (name: string) => {
    this.onChangeCountry.emit(name);
  }
}
