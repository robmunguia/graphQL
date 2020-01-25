import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule, NbSpinnerModule, NbIconModule, NbButtonModule } from '@nebular/theme';
import { ProductsComponent } from './products.component';


@NgModule({
    declarations: [
        ProductsComponent
      ],
    imports: [
        CommonModule,
        NbCardModule,
        NbSpinnerModule,
        NbIconModule,
        NbButtonModule
    ]
})
export class ProductsModule { }
