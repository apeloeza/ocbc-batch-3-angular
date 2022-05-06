import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../Models/country';


@Component({
  selector: 'app-allcountry',
  templateUrl: './allcountry.component.html',
  styleUrls: ['./allcountry.component.css']
})
export class AllcountryComponent implements OnInit {
  @Input() countries: Country[] = [];
  @Output() onChangeCountry = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCountrySelected = (name: string) => {
    this.onChangeCountry.emit(name);
  }

}
