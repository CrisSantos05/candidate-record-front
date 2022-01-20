import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Dado } from '../model/dado';
import { first, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Dado[]>(this.API)
    .pipe(
      first(),
     //delay(2000),
      tap(dados => console.log(dados))
    );

  }
}
