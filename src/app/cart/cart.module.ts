import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart.component';
 @NgModule ({
     imports: [
        
         RouterModule.forChild([
            { path: 'cart', component: CartComponent }
         ]),
         SharedModule 
     ],
     declarations: [ 
        CartComponent
     ]
 })
 export class CartModule { }
