import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  NbTreeGridModule
} from '@nebular/theme';


@NgModule({
  declarations: [
    ContinentsComponent,
    RatesComponent
  ],
  exports: [
    ContinentsComponent,
    RatesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    NbInputModule,
    NbButtonModule,
    NbListModule,
    NbCardModule,
    NbTreeGridModule
  ],
})
export class PagesModule { }
