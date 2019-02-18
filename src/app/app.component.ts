import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <a class='navbar-brand'><img src="assets/images/food8.jpeg" height="350px" width="1415px" alt="Annapurna">
  
    </a> 

  <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'>{{pageTitle}} </a>
  <ul class='nav nav-pills'>
  
  <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
  <li><a class='nav-link'[routerLink]="['/restaurants']">Restaurants </a></li>
  <li><a class='nav-link'[routerLink]="['/food']">food Items</a></li>
  <li><a class='nav-link'[routerLink]="['/addresses']">Restaurant Address </a></li>
  <li><a class='nav-link'[routerLink]="['/signin']">SignIn </a></li>
  <li><a class='nav-link'[routerLink]="['/cart']"><i class="fa fa-shopping-cart">Cart</i></a></li>
  <li><a class='nav-link'[routerLink]="['/foodorder']"><i class="fa fa-reorder">Order a food</i></a></li>
   <li><a class='nav-link'[routerLink]="['/wallet']"><i class="fa fa-credit-card">Wallet</i></a></li>
  </ul>
  </nav>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>
  `
})
  export class AppComponent {
    pageTitle: string  = 'Annapurna-project';
  }


 