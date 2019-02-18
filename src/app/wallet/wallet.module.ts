import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { WalletComponent } from './wallet.component';
 @NgModule ({
     imports: [
        
         RouterModule.forChild([
            { path: 'wallet', component: WalletComponent }
         ]),
         SharedModule 
     ],
     declarations: [ 
        WalletComponent
     ]
 })
 export class WalletModule{ }
