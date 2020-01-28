import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

// query
const getCategories = gql`
{
  viewer {
    categoryList(sort: NAME_ASC) {
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

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private apollo: Apollo) { }

  loadCategories() {
    return this.apollo.use('endpoint3')
    .watchQuery<any>({
      query: getCategories
    })
    .valueChanges;
  }
}
