import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../Models/country';
import { COUNTRIES } from '../Models/mock-country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  getCountries(): Observable<Country[]> {
    const countries = of(COUNTRIES);
    return countries;
  }

  getCountry(id: number): Observable<Country> {
    // Untuk saat ini, asumsikan bahwa pahlawan dengan `id` yang ditentukan selalu ada.
    // Penanganan kesalahan akan ditambahkan pada langkah tutorial selanjutnya.
    const country = COUNTRIES.find( c => c.id === id)!;
    return of(country);
  }

  constructor() { }
}
