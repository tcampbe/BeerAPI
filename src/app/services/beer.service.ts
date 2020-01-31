import { Injectable } from "@angular/core";
import { ApiService } from "../services/api.service";

@Injectable({
  providedIn: "root"
})

export class BeerService {
  constructor(private apiService: ApiService) {}

  async getAll() {
    let data = await this.apiService.get("beers");
    return data;
  }
}
