import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DWebLayoutRoutingModule } from './d-web-layout-routing.module';
import { DWebLayoutComponent } from './d-web-layout.component';
import { DWebLoginComponent } from './d-web-login/d-web-login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DWebLayoutRoutingModule
  ],
  declarations: [DWebLayoutComponent, DWebLoginComponent]
})
export class DWebLayoutModule { }
