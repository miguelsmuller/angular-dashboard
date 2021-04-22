import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';
import { MatIconModule } from '@angular/material/icon';

import { ComponentsPageComponent } from './components-page/components-page.component';
import { TablePageComponent } from './table-page/table-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedComponentsModule,
    MatIconModule
  ],
  declarations: [
    ComponentsPageComponent,
    TablePageComponent
  ],
  exports: [
    ComponentsPageComponent,
    TablePageComponent
  ]
})
export class GenericModule { }
