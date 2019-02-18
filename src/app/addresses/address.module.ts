import { NgModule } from '@angular/core';
 
import { AddressListComponent } from './address-list.component';
// import { ConvertToSpacesPipeR } from './convert-to-spaces.pipe';

import {AddressDetailComponent } from './address-detail.component';

import { RouterModule } from '@angular/router';
import { AddressDetailGuard } from './address-detail.guard';
import { SharedModule } from '../shared/shared.module';
 
 @NgModule ({
     imports: [
        
         RouterModule.forChild([
            { path: 'addresses', component: AddressListComponent },

            { 
                path: 'addresses/:id', 
            canActivate: [AddressDetailGuard],
            component: AddressDetailComponent 
        },
         ]),
         SharedModule 
     ],
     declarations: [
        AddressListComponent,
        // ConvertToSpacesPipeR                                   ,
  
        AddressDetailComponent,
     ]
 })
 export class AddressModule { }