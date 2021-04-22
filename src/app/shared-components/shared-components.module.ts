import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { MatIconModule } from '@angular/material/icon';

import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToastComponent } from './toast/toast.component';
import { UserButtonComponent } from './user-button/user-button.component';
import { UserButtonDropdownComponent } from './user-button-dropdown/user-button-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
    OverlayModule,
    MatIconModule,
  ],
  declarations: [
    MenuComponent,
    ToolbarComponent,
    ToastComponent,
    UserButtonComponent,
    UserButtonDropdownComponent
  ],
  exports: [
    MenuComponent,
    ToolbarComponent,
    ToastComponent,
    UserButtonComponent,
    UserButtonDropdownComponent
  ],
  entryComponents: [
    MenuComponent,
    ToolbarComponent,
    ToastComponent,
    UserButtonComponent,
    UserButtonDropdownComponent
  ]
})
export class SharedComponentsModule { }
