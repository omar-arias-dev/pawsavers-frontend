import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginPageComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
  ]
})
export class AuthModule { }
