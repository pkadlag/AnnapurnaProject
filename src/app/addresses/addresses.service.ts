import { Injectable } from '@angular/core';


import { IAddress } from './address';


@Injectable({
  providedIn: 'root'
})
export class AddressService 
{
    
getAddresses(): IAddress[] {

  return [
    {
    "addressId": 201,
    "hotelName": "Royal Foods",
    "area": "Vitawa",
    "city": "Thane",
    "state": "Maharashtra",
    "country": "India",
    "pincode": 450124
    },
    {
       
    "addressId": 202,
    "hotelName": "Taj",
    "area": "CST",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "pincode": 450124
    },
    {

    "addressId": 203,
    "hotelName": "Kinara ",
    "area": "CST",
    "city": "Mumbai",
    "state": "Maharashtra",
    "country": "India",
    "pincode": 450124
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





  

