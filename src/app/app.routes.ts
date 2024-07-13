import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [

  { path: '**', redirectTo: 'products', pathMatch: 'full' }, //default route
  { path: 'products', component: ProductsComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
