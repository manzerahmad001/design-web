import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//define an array of routes with a single route to that component.
const routes: Routes = [
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'pi/error',
  }
];

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
