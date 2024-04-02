import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: `
  img {
    witdh: 35px;
    height: 35px;
  }`
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];
}
