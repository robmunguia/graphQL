import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const getRatesQuery = gql`
  query getRatesQuery($currency: String = "USD") {
      rates(currency: $currency) {
        currency
        rate
        name
      }
    }
`;

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit, OnDestroy {

  rates: any[];
  loading = true;
  error: any;
  currency;
  private qSubscription: Subscription;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.loadQuery();
  }

  ngOnDestroy() {
    this.qSubscription.unsubscribe();
  }

  loadQuery() {
    this.loading = true;
    this.qSubscription = this.apollo.watchQuery<any>({
      query: getRatesQuery,
      variables: {
        currency: this.currency
      }
    })
    .valueChanges
    .subscribe((resp: any) => {
      this.loading = resp.loading;
      this.rates = resp.data.rates;
    });
  }

  // Otro ejemplo para llamar los datos de graphQL
  loadRates() {
    this.loading = true;
    this.apollo.watchQuery({
      query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
    })
    .valueChanges.subscribe((resp: any) => {
      this.rates = resp.data && resp.data.rates;
      this.loading = resp.loading;
      this.error = resp.errors;
    });
  }

}
