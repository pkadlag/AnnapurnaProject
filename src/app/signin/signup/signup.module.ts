import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component'
import { SharedModule } from '../../shared/shared.module';
@NgModule({
    imports: [
      RouterModule.forChild([
        { path: 'signup', component: SignupComponent }
     ]),
     SharedModule 
    ],
    declarations: [
        SignupComponent
    ]
  })
export class SignupModule{

}
