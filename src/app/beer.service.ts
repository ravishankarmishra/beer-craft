import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/beer.json';

getConfig() {
  return this.http.get(this.configUrl);
}

}
