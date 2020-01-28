import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbBadgeModule, NbButtonModule, NbInputModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { FindOrderComponent } from './find-order.component';

@NgModule({
    declarations: [
        FindOrderComponent
      ],
    imports: [
        CommonModule,
        NbCardModule,
        NbButtonModule,
        NbInputModule,
        NbBadgeModule,
        NbIconModule
    ]
})
export class OrdersModule { }
