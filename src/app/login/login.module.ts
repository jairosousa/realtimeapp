import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login.component';

import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports: [LoginComponent, LoginFormComponent],
  declarations: [LoginComponent,LoginFormComponent],
  providers:[AngularFireAuth]
})
export class LoginModule { }
