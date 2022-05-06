import { Component, OnInit } from '@angular/core';
// import
import { ActivatedRoute } from '@angular/router';
import { Country } from '../Models/country';
import { CountryService } from '../services/country.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-countryDetail',
  templateUrl: './countryDetail.component.html',
  styleUrls: ['./countryDetail.component.css']
})
export class CountryDetailComponent implements OnInit {

  country: Country | undefined;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.countryService.getCountry(id).subscribe(country => this.country = country);
  }

  goBack(){
    this.location.back();
  }
}
