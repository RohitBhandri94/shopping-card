import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { CardComponent } from './dashborad/card/card.component';
import { TableComponent } from './dashborad/table/table.component';
import { FormsComponent } from './buy-now/forms/forms.component';
import { ProductItemComponent } from './buy-now/product-item/product-item.component';
import { FormsModule } from '@angular/forms';
import { productService } from './shared/models/services/product.service';
import { cardService } from './shared/models/services/card.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboradComponent,
    BuyNowComponent,
    CardComponent,
    TableComponent,
    FormsComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    cardService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
