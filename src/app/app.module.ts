  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { RestaurantListComponent } from './restaurants/restaurant-list.component';
import { ConvertToSpacesPipe } from './products/convert-to-spaces.pipe';
import { ConvertToSpacesPipeR } from './restaurants/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './products/product-detail.guard';
import { RestaurantDetailGuard } from './restaurants/restaurant-detail.guard';
import { ProductModule } from './products/product.module';
import { RestaurantModule } from './restaurants/restaurant.module';
import { AddressModule } from './addresses/address.module';
import { CartModule } from './cart/cart.module';
import { FoodOrderModule } from './foodOrder/foodOrder.module';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signin/signup/signup.module';
import { WalletModule } from './wallet/wallet.module';
//import { CartComponent } from './cart/cart.component';
//import { RouterComponent, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },

      { path: '', redirectTo: 'welcome' , pathMatch: 'full' },

      { path: '**', redirectTo: 'welcome' , pathMatch: 'full' },
     
    ]),
    ProductModule,
    RestaurantModule,
    AddressModule,
    CartModule,
    FoodOrderModule,
    SigninModule,
    SignupModule,
    WalletModule

 
  ],

  
  bootstrap: [AppComponent]
})
export class AppModule { }


