import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import {  IProduct } from './product';
@Component({
    templateUrl:'./product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    id: number;
      
    constructor (private route: ActivatedRoute,
    private router: Router) { }
    ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
this.pageTitle += ` : ${this.id}`;

// this.product = {
//   'productId': id,
//   'productName': 'Pizza',
//   'productCode': 'GDN-0023',
//   'releaseDate': 'March 18, 2018',
//   'price': 200.00, 
//   'description': 'Punam kadlag',
//   'starRating': 5.0,
//   'imageUrl': 'assets/images/pizza.jpg' 
     
// }
    }
    product: IProduct =
    {
    
       'productId': this.id,
        'productName': 'Pizza',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2018',
        'price': 200.00, 
        'description': 'Special dish',
        'starRating': 5.0,
        'imageUrl': 'assets/images/pizza.jpg', 
    // ],
    // [
    //   'productId': this.id,
    //     'productName': 'paneer',
    //      'productCode':'GDN-0023',
    //      'releaseDate': 'March 18, 2018',
    //      'description': 'Mix dish of panner-kaju',
    //      'price': 300.00,
    //      'starRating': 5.0,
    //      'imageUrl': 'assets/images/paneer.png'
    //  ]
}


    onBack(): void {
        this.router.navigate(['/products']);
    }
}

