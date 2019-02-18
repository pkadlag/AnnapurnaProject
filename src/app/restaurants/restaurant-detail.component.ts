import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import {  IRestaurant } from './restaurant';
@Component({
   
    templateUrl:'./restaurant-detail.component.html',
    styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
    pageTitle: string = 'Restaurant Detail';
    id: number;
  
    constructor (private route: ActivatedRoute,
    private router: Router) { }
    ngOnInit() {
this.id = +this.route.snapshot.paramMap.get('id');
this.pageTitle += ` : ${this.id}`;

    }
    restaurant: IRestaurant= {
        'restaurantId': 101,
        'name': 'Royal Foods',
        'address': 'Mumbai',
        'foodItems': 'Pizza',
        'starRating': 4.0,
        'reviews': 'Quality Good',
        'type': 'Veg-NonVeg',
        'photos': 'https://raw.githubusercontent.com/annapurna-website/Annapurna-Images/master/Foods-Images/landscape.jpg'



}


    onBack(): void {
        this.router.navigate(['/restaurants']);
    }
}

