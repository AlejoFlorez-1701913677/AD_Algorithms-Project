import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { NetworkRawComponent } from './network-raw/network-raw.component';
import { HeaderComponent } from './public/header/header.component';


@NgModule({
  declarations: [
    NetworkRawComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
