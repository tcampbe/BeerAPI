import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  url = "https://api.punkapi.com/v2/beers"

  async get(path) {
    return await this.httpClient.get
      (this.url + path).toPromise();
  }


}
