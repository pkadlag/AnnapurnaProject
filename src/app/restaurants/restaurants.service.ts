import { Injectable } from '@angular/core';

import { IRestaurant } from './restaurant';


@Injectable({
    providedIn: 'root'
})
export class RestaurantService {

    getRestaurants(): IRestaurant[] {
        return [
            {
                "restaurantId": 101,
                "name": "Royal Foods",
                "address": "Mumbai",
                "foodItems": "Pizza",
                "starRating": 4.0,
                "reviews": "Quality good",
                "type": "Veg-NonVeg",
                "photos": "https://raw.githubusercontent.com/annapurna-website/Annapurna-Images/master/Foods-Images/landscape.jpg"

            },
            {
                "restaurantId": 102,
                "name": "Taj",
                "address": "Pune",
                "foodItems": "Pav-bhaji",              
                "starRating": 3.0,
                "reviews": "Best Hotel ever seen",
                "type": "Veg-NonVeg",
                "photos": "https://raw.githubusercontent.com/annapurna-website/Annapurna-Images/master/Foods-Images/landscape.jpg"
            },
            {
                "restaurantId": 103,
                "name": "Kinara",
                "address": "airoli",
                "foodItems": "chicken-biryani",
                "starRating": 3.5,
                "reviews": "yummy,tasty",
                "type": "Veg-NonVeg",
                "photos": "https://github.com/annapurna-website/Annapurna-Images/blob/master/Foods-Images/hurt.jpg?raw=true"
            }   
        ];
    }

    private newMethod(): string {
        return "Quality good";
    }
}

//  import { Injectable } from '@angular/core';
//  import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//  import { Observable } from 'rxjs';
//  import { catchError, tap } from 'rxjs/operators';
//  import { IProduct } from './product';


//  @Injectable({
//    providedIn: 'root'
//  })
//  export class ProductService 
//  {
//       private productUrl = 'http://10.246.92.254:8686/restaurants';
//   constructor(private http: HttpClient) {}

//  getProducts(): Observable<IProduct[]>
//   {
//   return this.http.get<IProduct[]>(this.productUrl).pipe(
//  tap(data => console.log('All: ' + JSON.stringify(data))),
//  catchError(this.handleError)
//  );
//  }

//  private handleError(err: HttpErrorResponse) {
//         let errorMessage = '';
//  if(err.error instanceof ErrorEvent) {
//   errorMessage = `An error occured: ${err.error.message}`;
//   } else {
//    errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
//   }
//  // console.error(errorMessage);
//   return throwError(errorMessage);
//   }


//   }







