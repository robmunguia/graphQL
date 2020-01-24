import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormGroup, FormControl } from '@angular/forms';

const getData = gql`
{
  viewer {
    supplier(sort: SUPPLIERID_ASC) {
      supplierID
      companyName
      contactTitle
      id
    }
    categoryList(sort: NAME_ASC) {
      categoryID
      name
      description
    }
  }
}`;

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, OnDestroy {

  loading: boolean;
  submit: boolean;
  name: string;
  qSubscription: Subscription;

  product: Product = new Product();
  supplier: Supplier;
  categories: Category[];

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private apollo: Apollo) { }

  save() {
    // console.log(JSON.stringify(this.product));
    this.submit = true;
    const submitRepository = gql`
    mutation create($name: String, $category: Int, $perUnit: String, $unitPrice: Int, $stock: Int) {
      createProduct(input: { record: { productID: 0, name: $name,
        supplierID : 1, categoryID: $category, quantityPerUnit: $perUnit,
        unitPrice: $unitPrice, unitsInStock: $stock, unitsOnOrder: 0, reorderLevel: 0,
        discontinued: false} }) {
        recordId
      }
    }`;
    this.apollo.use('endpoint3').mutate<any>({
      mutation: submitRepository,
      variables: {
        name: this.product.name,
        category: this.product.categoryID,
        perUnit: this.product.quantityPerUnit,
        unitPrice: this.product.unitPrice,
        stock: this.product.unitsInStock
      }
    }).subscribe((resp: any) => {
      this.submit = false;
      console.log(resp);
    });
  }

  ngOnInit() {
    this.loadQuery();
  }

  ngOnDestroy() {
    this.qSubscription.unsubscribe();
  }

  loadQuery() {
    this.loading = true;
    this.qSubscription = this.apollo.use('endpoint3')
    .watchQuery<any>({
      query: getData
    })
    .valueChanges.subscribe((resp: any) => {
      console.log(resp);
      this.categories = resp.data.viewer.categoryList;
      this.loading = resp.loading;
    });
  }

}

class Product {
  constructor(
    public productID: number = 0,
    public name: String = '',
    public supplierID: number = 1,
    public categoryID: number = 0,
    public quantityPerUnit: String = '',
    public unitPrice: number = 0,
    public unitsInStock: number = 0,
    public unitsOnOrder: number = 0,
    public reorderLevel: number = 0,
    public discontinued: Boolean = false
  ) { }
}

interface Supplier {
  supplierID: number;
  companyName: string;
  contactTitle: string;
}

interface Category {
  categoryID: number;
  name: string;
  description: string;
}