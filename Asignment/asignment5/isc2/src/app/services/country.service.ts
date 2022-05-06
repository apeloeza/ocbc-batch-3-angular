import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../Models/country';
import { COUNTRIES } from '../Models/mock-country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  get = (): Observable<Country[]> => {
    const countries = of(COUNTRIES);

    console.log('Fetched data from server');

    return countries;
  }
}
