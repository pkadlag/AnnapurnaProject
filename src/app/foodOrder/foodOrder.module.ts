import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FoodOrderComponent } from './foodOrder.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
      RouterModule.forChild([
        { path:'foodorder', component: FoodOrderComponent }
     ]),
     SharedModule 
    ],
    declarations: [
        FoodOrderComponent
    ]
  })
export class FoodOrderModule
{

}

