import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private capitalApiUrl: string = 'https://restcountries.com/v3.1/capital';
  constructor( private http: HttpClient ) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url );
    //return this.http.get( url ).pipe(catchError(err => of(['k'])));
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${ this.capitalApiUrl }/${ termino }`;

    return this.http.get<Country[]>( url );
    //return this.http.get( url ).pipe(catchError(err => of(['k'])));
  }

  getPaisPorCodigo(id: string): Observable<Country>{
    const url = `${ this.apiUrl }/alpha/${ id }`;

    return this.http.get<Country>( url );
  }
}
