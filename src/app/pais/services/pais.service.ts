import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  // get httpParams(){
  //   return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  // }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
    // return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const urlCapital = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(urlCapital);
    // return this.http.get<Country[]>(urlCapital, {params: this.httpParams});
  }

  getPaisPorCodigo(id: string): Observable<Country[]>{
    const urlCodigo = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(urlCodigo);
  }

  buscarRegion(region: string): Observable<Country[]>{
    const urlRegion = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(urlRegion);
    // return this.http.get<Country[]>(urlRegion, {params: this.httpParams})
    //   .pipe(
    //     tap(console.log
    //     )
    //   )
  }
}
