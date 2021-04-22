import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { AuthModule } from './modules/auth/auth.module';
import { GenericModule } from './modules/generic/generic.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentsModule,
    AuthModule,
    GenericModule
  ],
  declarations: [
    AppComponent,
  ],
  exports: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})
export class AppModule { }
