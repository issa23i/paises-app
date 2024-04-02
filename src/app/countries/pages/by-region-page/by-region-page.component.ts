import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';


import { Country} from '../../interfaces/countries.interface';
import { Region } from '../../interfaces/region.type';




@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = []

  public isLoading: boolean = false;


  public regions: Region[]= ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region

  constructor(private countriesService: CountriesService){}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region
  }



  searchByRegion(region : Region):void {
    this.isLoading = true;

    this.selectedRegion = region

    this.countriesService.searchRegion(region)
    .subscribe(countries => {
      this.isLoading = false;
      this.countries = countries
    })
  }
}
