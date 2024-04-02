import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/countries';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private baseUrl = 'https://restcountries.com/v3.1';


  constructor(private httpClient: HttpClient) { }

  searchCapital (term : string) : Observable<Country[]> {

    const url =`${this.baseUrl}/capital/${term}`

    return this.httpClient.get<Country[]>(url).pipe(
      catchError(() =>  of ([])
      )
      // tap(countries => console.log('Tap1',countries)),
      // map(countries => []),
      // tap(countries => console.log('Tap2',countries))
    );
  }

  // Por país
  searchCountry (term : string) : Observable<Country[]> {
    const url =`${this.baseUrl}/name/${term}`;

    return this.httpClient.get<Country[]>(url).pipe(
      catchError(() =>  of ([])
      )
    );
  }

  // Por región
  searchRegion (region : string) : Observable<Country[]> {
    const url =`${this.baseUrl}/region/${region}`;
    return this.httpClient.get<Country[]>(url).pipe(
      catchError(() =>  of ([])
      )
    );
  }

}
