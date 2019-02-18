import { Component, OnInit } from '@angular/core';

import { IAddress } from './address';
import { AddressService } from './addresses.service';

@Component({
// selector:'app-products',
templateUrl: './address-list.component.html' ,
styleUrls: ['./address-list.component.css']
    
})
export class AddressListComponent implements OnInit {
pageTitle: string = 'Address List';
imageWidth: number = 200;
imageMargin: number= 2;
showImage: boolean = false;



_listFilter: string;
get listFilter(): string {
    return this._listFilter;
}
set listFilter(value:string) {

    this._listFilter = value;
    this.filteredAddresses= this.listFilter ? this.performFilter(this.listFilter) : this.addresses; 
}

filteredAddresses: IAddress[];
addresses: IAddress[] = []; 

constructor(private addressService: AddressService) {
    
}

onRatingClicked(message: string): void {
    this.pageTitle = 'Address List: ' + message;  
}

performFilter(filterBy: string): IAddress[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.addresses.filter((address: IAddress) =>
    address.area.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

toggleImage(): void {
    this.showImage= !this.showImage;
}

ngOnInit(): void  {

    this.addresses=this.addressService.getAddresses();
      
       this.filteredAddresses = this.addresses         ;
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
