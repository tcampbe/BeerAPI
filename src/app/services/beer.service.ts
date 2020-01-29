import { Injectable } from '@angular/core';
import {ApiService} from '../services/api.service'

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private httpService: ApiService) { }


async getAll(){
  let data = await this.httpService.get("beers"):
  return data;
}

}
