import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

// query
const getCategories = gql`
{
  viewer {
    categoryList(limit: 1000) {
      categoryID
      name
      description
      productList {
        productID,
        name
        discontinued
      }
    }
  }
}`;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  categories: Categories[];
  limit = 20;
  loading: boolean;
  category: string;
  showProduct: boolean;
  private qSubscription: Subscription;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.loadQuery();
  }

  ngOnDestroy() {
    this.qSubscription.unsubscribe();
  }

  products( category: Categories ) {
    category.expand = !category.expand;
  }

  loadQuery() {
    this.loading = true;
    this.qSubscription = this.apollo.use('endpoint3')
    .watchQuery<any>({
      query: getCategories,
      variables: {
        currency: this.limit
      }
    })
    .valueChanges
    .subscribe((resp: any) => {
      this.loading = resp.loading;
      this.categories = resp.data.viewer.categoryList;
      console.log(this.categories);
    });
  }

}

interface Categories {
  categoryID: number;
  name: string;
  description: string;
  productList: Products[];
  expand: boolean;
}

interface Products {
  productID: number;
  name: string;
  discontinued: boolean;
}