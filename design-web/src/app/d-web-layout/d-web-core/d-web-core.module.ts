import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DwebCoreRoutingModule } from './d-web-core-routing.module';
import { DwebCoreHeaderComponent } from './d-web-core-header/d-web-core-header.component';
import { DwebCoreFooterComponent } from './d-web-core-footer/d-web-core-footer.component';
import { DwebCoreNotfoundComponent } from './d-web-core-notfound/d-web-core-notfound.component';

@NgModule({
  imports: [
    CommonModule,
    DwebCoreRoutingModule
  ],
  declarations: [DwebCoreHeaderComponent, DwebCoreFooterComponent, DwebCoreNotfoundComponent]
})
export class DwebCoreModule { }
