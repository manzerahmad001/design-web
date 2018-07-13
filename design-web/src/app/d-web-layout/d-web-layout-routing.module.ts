import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DWebLoginComponent } from './d-web-login/d-web-login.component';
import { DWebLayoutComponent } from './d-web-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DWebLayoutComponent,
    children: [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: DWebLoginComponent }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DWebLayoutRoutingModule { }
