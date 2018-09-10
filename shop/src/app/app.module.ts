import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { CartService } from './services/cart.service';
import { ProductsService } from './services/products.service';
import { BuyBtnComponent } from './components/buy-btn/buy-btn.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { CustomPipe } from './pipes/custom.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CartPageComponent,
    NavBarComponent,
    BuyBtnComponent,
    CartItemComponent,
    ProductSectionComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CartService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
