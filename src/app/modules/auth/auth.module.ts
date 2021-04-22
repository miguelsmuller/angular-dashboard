import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';
import { MatIconModule } from '@angular/material/icon';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    MatIconModule
  ],
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
  exports: [
    LoginPageComponent,
    RegisterPageComponent
  ],
})
export class AuthModule { }
