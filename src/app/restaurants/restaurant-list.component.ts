import { Component, OnInit } from '@angular/core';

import { IRestaurant } from './restaurant';
import { RestaurantService } from './restaurants.service';

@Component({
// selector:'app-products',
templateUrl: './restaurant-list.component.html' ,
styleUrls: ['./restaurant-list.component.css']
    
})
export class RestaurantListComponent implements OnInit {
pageTitle: string = 'Restaurant List';
imageWidth: number = 200;
imageMargin: number= 2;
showImage: boolean = false;



_listFilter: string;
get listFilter(): string {
    return this._listFilter;
}
set listFilter(value:string) {

    this._listFilter = value;
    this.filteredRestaurants= this.listFilter ? this.performFilter(this.listFilter) : this.restaurants; 
}

filteredRestaurants: IRestaurant[];
restaurants: IRestaurant[] = []; 

constructor(private restaurantService: RestaurantService) {
    
}

onRatingClicked(message: string): void {
    this.pageTitle = 'Restaurant List: ' + message;  
}

performFilter(filterBy: string): IRestaurant[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.restaurants.filter((restaurant: IRestaurant) =>
    restaurant.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

toggleImage(): void {
    this.showImage= !this.showImage;
}

ngOnInit(): void  {

    this.restaurants=this.restaurantService.getRestaurants();
      
       this.filteredRestaurants = this.restaurants;
    } 
       
   


       
}
  



// import { Component, OnInit } from '@angular/core';

// import { IProduct } from './product';
// import { ProductService } from './products.service';

// @Component({
// selector:'app-products',
// templateUrl: './product-list.component.html' ,
// styleUrls: ['./product-list.component.css']
    
// })
// export class ProductListComponent implements OnInit {
// pageTitle: string = 'Product List';
// imageWidth: number = 50;
// imageMargin: number= 2;
// showImage: boolean = false;
// errorMessage:string;


// _listFilter: string;
// get listFilter(): string {
//     return this._listFilter;
// }
// set listFilter(value:string) {

//     this._listFilter = value;
//     this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter) : this.products; 
// }

// filteredProducts: IProduct[];
// products: IProduct[] = []; 

// constructor(private productService: ProductService) {
//     this.listFilter = '';
// }

// onRatingClicked(message: string): void {
//     this.pageTitle = 'Product List: ' + message;  
// }

// performFilter(filterBy: string): IProduct[] {
//     filterBy = filterBy.toLocaleLowerCase();
//     return this.products.filter((product: IProduct) =>
//     product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
// }

// toggleImage(): void {
//     this.showImage= !this.showImage;
// }

// ngOnInit(): void  {

//     this.productService.getProducts().subscribe(
//         products => {

//        this.products = products;
//        this.filteredProducts = this.products;
//     } ,
// error => this.errorMessage =<any>error 
       
//     );


       
// }
  
// }

// put src/api in angular.json
