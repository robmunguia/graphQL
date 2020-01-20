import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { RatesComponent } from './rates/rates.component';
import { ContinentsComponent } from './continents/continents.component';

const routes: Routes = [
    { path: 'rates', component: RatesComponent },
    { path: 'continents', component: ContinentsComponent },
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
