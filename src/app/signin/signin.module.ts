import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninComponent} from './signin.component';
import { SignupModule} from './signup/signup.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [
      RouterModule.forChild([
        { path: 'signin', component: SigninComponent }
     ]),
     SignupModule,
SharedModule
    ],
    declarations: [
        SigninComponent
    ]
  })
export class SigninModule {

}