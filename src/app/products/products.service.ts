import { Injectable } from '@angular/core';


import { IProduct } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService 
{
    
getProducts(): IProduct[] {
  return [
    {
        "productId": 1,
        "productName": "paneer",
         "productCode":"GDN-0023",
         "releaseDate": "March 18, 2018",
         "description": "Mix dish of panner-kaju",
         "price": 300.00,
         "starRating": 5.0,
         "imageUrl": "assets/images/paneer.png"
    },
    {
        "productId": 2,
        "productName": "Pizza",
         "productCode":"GDN-0023",
         "releaseDate": "March 18, 2018",
         "description": "Punam kadlag",
         "price": 200.00,
         "starRating": 5.0,
         "imageUrl": "assets/images/pizza.jpg"
    },
    {

        "productId":3,
        "productName":"Gulabjamun",
         "productCode":"GDN-0023",
         "releaseDate":"March 30, 2018",
         "description":"Poonam paraskar",
         "price": 100.00,
         "starRating": 5.0,
         "imageUrl": "assets/images/gulabjamun.jpg"
    },
    {
        "productId": 4,
        "productName": "Rasmalai",
         "productCode":"mnk-0523",
         "releaseDate": "March 11, 2018",
         "description": "Vinayak kadlag",
         "price": 450.00,
         "starRating": 5.0,
         "imageUrl": "assets/images/rasmalai.jpg"
    },
    {

        "productId":5,
        "productName":"Hyderabadi-Biryani",
         "productCode":"GDN-0023",
         "releaseDate":"March 30, 2018",
         "description":"Bandi bhanus biryani",
         "price": 80.00,
         "starRating": 5.0,
         "imageUrl": "assets/images/biryani.jpg"
    },
    {
        "productId": 6,
        "productName": "Pav-Bhaji",
         "productCode":"mnk-0523",
         "releaseDate": "March 11, 2018",
         "description": "Vinayak kadlag",
         "price": 450.00,
         "starRating": 5.0,
         "imageUrl": "assets/images/pav-bhaji.jpg"
    },
    {

        "productId":7,
        "productName":"Pakoda",
         "productCode":"pbk-0023",
         "releaseDate":"March 01, 2018",
         "description":"ha ha ha bhanus special dish",
         "price": 80.00,
         "starRating": 5.0,
         "imageUrl": "assets/images/pakoda.jpg"
    },
    {

        "productId":8,
        "productName":"Vada-Pav",
         "productCode":"skk-0023",
         "releaseDate":"March 07, 2018",
         "description":"mumbai dish",
         "price": 30.00,
         "starRating": 5.0,
         "imageUrl": "assets/images/vada-pav.jpg"
    }
];
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





  

