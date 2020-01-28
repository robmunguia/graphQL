import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { RatesComponent } from './rates/rates.component';
import { ContinentsComponent } from './continents/continents.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product.component';
import { FindOrderComponent } from './order/find-order.component';

const routes: Routes = [
    { path: 'rates', component: RatesComponent },
    { path: 'continents', component: ContinentsComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'product', component: AddProductComponent },
    { path: 'search', component: FindOrderComponent },
    { path: '', redirectTo: '/rates', pathMatch: 'full' }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, { useHash: true })
    ],
  exports: [
      RouterModule
    ]
})
export class PagesRoutingModule { }
