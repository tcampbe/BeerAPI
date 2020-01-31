import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BeerComponent } from "./beer/beer.component";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, 
    BeerComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    NoopAnimationsModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
