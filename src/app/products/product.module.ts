 import { NgModule } from '@angular/core';
 
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

import { ProductDetailComponent } from './product-detail.component';

import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';
 
 @NgModule ({
     imports: [
        
         RouterModule.forChild([
            { path: 'food', component: ProductListComponent },

            { 
                path: 'products/:id', 
            canActivate: [ProductDetailGuard],
            component: ProductDetailComponent 
        },
         ]),
         SharedModule 
     ],
     declarations: [
        ProductListComponent,
        ConvertToSpacesPipe,
  
        ProductDetailComponent,
     ]
 })
 export class ProductModule { }