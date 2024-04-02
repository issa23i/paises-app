import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of } from 'rxjs';
import { Country } from '../interfaces/countries';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private baseUrl = 'https://restcountries.com/v3.1';


  constructor(private httpClient: HttpClient) { }

  private getCountriesRequest(url : string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(() =>  of ([])),
      delay(2000), // simular retraso en la api
      );
  }

  searchCountryByAlphaCode(code: string):Observable<Country | null>{
    const url =`${this.baseUrl}/alpha/${code}`;

    return this.httpClient.get<Country[]>(url)
    .pipe(
      map(countries => countries.length>0 ? countries[0]:null),
      catchError(() =>  of (null))
    );
  }

  searchCapital (term : string) : Observable<Country[]> {

    const url =`${this.baseUrl}/capital/${term}`

    return this.getCountriesRequest(url);

    /* return this.httpClient.get<Country[]>(url).pipe(
      catchError(() =>  of ([])
      )
      // tap(countries => console.log('Tap1',countries)),
      // map(countries => []),
      // tap(countries => console.log('Tap2',countries))
    ); */
  }

  // Por país
  searchCountry (term : string) : Observable<Country[]> {
    const url =`${this.baseUrl}/name/${term}`;

    return this.getCountriesRequest(url);
  }

  // Por región
  searchRegion (region : string) : Observable<Country[]> {
    const url =`${this.baseUrl}/region/${region}`;
    return this.getCountriesRequest(url);
  }

}
