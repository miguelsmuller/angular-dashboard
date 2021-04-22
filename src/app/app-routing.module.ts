import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablePageComponent } from './modules/generic/table-page/table-page.component';
import { ComponentsPageComponent } from './modules/generic/components-page/components-page.component';
import { LoginPageComponent } from './modules/auth/login-page/login-page.component';
import { RegisterPageComponent } from './modules/auth/register-page/register-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TablePageComponent },
  { path: 'components', component: ComponentsPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
