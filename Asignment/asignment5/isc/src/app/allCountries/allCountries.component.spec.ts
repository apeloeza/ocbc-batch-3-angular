import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCountriesComponent } from './allCountries.component';

describe('AllCountriesComponent', () => {
  let component: AllCountriesComponent;
  let fixture: ComponentFixture<AllCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});