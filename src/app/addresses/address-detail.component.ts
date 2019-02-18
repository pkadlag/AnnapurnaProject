import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import {  IAddress } from './address';
@Component({
   
    templateUrl:'./address-detail.component.html',
    styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {
    pageTitle: string = 'Address Detail';
    address: IAddress;
      
    constructor (private route: ActivatedRoute,
    private router: Router) { }
    ngOnInit() {
let id = +this.route.snapshot.paramMap.get('id');
this.pageTitle += ` : ${id}`;
this.address = {
    'addressId': 203,
    'hotelName': 'Kinara',
    'area': 'CST',
    'city': 'Mumbai',
    'state': 'Maharashtra',
    'country': 'India',
    'pincode': 450124    
}
    }

    onBack(): void {
        this.router.navigate(['/addresses']);
    }
}

