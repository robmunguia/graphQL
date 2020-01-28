import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Routes
import { PagesRoutingModule } from './pages-routing.module';

// Components
import { ContinentsComponent } from './continents/continents.component';
import { RatesComponent } from './rates/rates.component';

// Modules
import { ServicesModule } from '../services/services.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './order/order.module';

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
import { AddProductComponent } from './products/add-product.component';


@NgModule({
  declarations: [
    ContinentsComponent,
    RatesComponent,
    CategoriesComponent,
    AddProductComponent
  ],
  exports: [
    ContinentsComponent,
    RatesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsModule,
    OrdersModule,
    ServicesModule,
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
