import { NgModule } from '@angular/core';
 
import { RestaurantListComponent } from './restaurant-list.component';
import { ConvertToSpacesPipeR } from './convert-to-spaces.pipe';

import { RestaurantDetailComponent } from './restaurant-detail.component';

import { RouterModule } from '@angular/router';
import { RestaurantDetailGuard } from './restaurant-detail.guard';
import { SharedModule } from '../shared/shared.module';
 
 @NgModule ({
     imports: [
        
         RouterModule.forChild([
            { path: 'restaurants', component: RestaurantListComponent },

            { 
                path: 'restaurants/:id', 
            canActivate: [RestaurantDetailGuard],
            component: RestaurantDetailComponent 
        },
         ]),
         SharedModule 
     ],
     declarations: [
        RestaurantListComponent,
        ConvertToSpacesPipeR                                   ,
  
        RestaurantDetailComponent,
     ]
 })
 export class RestaurantModule { }