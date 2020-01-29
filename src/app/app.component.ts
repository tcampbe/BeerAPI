import { Component, OnInit } from '@angular/core';
import {BeerService} from '../app/services/beer.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BeerAPI';
  beers;
  constructor(private beerService: BeerService){}
/*   async createBeer(){
    "name": "",
    "something": ""
  };
 *//*   let data = await this.beerService.save(beer);
 */

  async ngOnInit(){
    let data = await this.beerService.getAll();

    this.beers = data;

  }
}
