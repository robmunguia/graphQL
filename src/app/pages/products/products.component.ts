import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

const getProducts = gql`
query getProductsSkip($page: Int, $perPage: Int) {
  viewer {
    productPagination(page: $page, perPage: $perPage, sort: NAME_ASC) {
      count
      items {
        productID
        name
        unitPrice
        unitsInStock
        quantityPerUnit
        unitsOnOrder
        discontinued
        category {
          name
        }
      }
    }
  }
}`;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Products[];
  loading: boolean;
  page = 1;
  perPage = 15;
  totalPages: number;
  count: number;
  qSubscription: Subscription;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.loadQuery();
  }

  ngOnDestroy() {
    this.qSubscription.unsubscribe();
  }

  next() {
    this.totalPages = Math.round(this.count / this.perPage);
    this.page += 1;
    if (this.page > this.totalPages) {
      this.page = this.totalPages;
      return;
    }
    this.loadQuery();
  }
  previous() {
    this.page -= 1;
    if (this.page < 1) {
      this.page = 1;
      return;
    }
    this.loadQuery();
  }

  loadQuery() {
    this.loading = true;
    this.qSubscription = this.apollo.use('endpoint3')
    .watchQuery<any>({
      query: getProducts,
      variables: {
        page: this.page,
        perPage: this.perPage
      }
    })
    .valueChanges.subscribe((resp: any) => {
      this.count = resp.data.viewer.productPagination.count;
      this.products = [];
      this.products = resp.data.viewer.productPagination.items;
      this.loading = resp.loading;
    });
  }

}

interface Products {
  productID: number;
  name: string;
  unitPrice: number;
  unitsInStock: number;
  quantityPerUnit: string;
  unitsOnOrder: number;
  discontinued: boolean;
  category: {
    name: string;
  };
}