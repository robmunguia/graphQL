import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Routes
import { PagesRoutingModule } from './pages-routing.module';

// Components
import { ContinentsComponent } from './continents/continents.component';
import { RatesComponent } from './rates/rates.component';

// Nebular Components
import {
  NbInputModule,
  NbButtonModule,
  NbListModule,
  NbCardModule,
  NbTreeGridModule,
  NbSpinnerModule,
  NbIconModule,
  NbTooltipModule,
  NbSelectModule
} from '@nebular/theme';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product.component';


@NgModule({
  declarations: [
    ContinentsComponent,
    RatesComponent,
    CategoriesComponent,
    ProductsComponent,
    AddProductComponent
  ],
  exports: [
    ContinentsComponent,
    RatesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    NbInputModule,
    NbInputModule,
    NbButtonModule,
    NbListModule,
    NbCardModule,
    NbTreeGridModule,
    NbSpinnerModule,
    NbIconModule,
    NbTooltipModule,
    NbSelectModule
  ],
})
export class PagesModule { }
