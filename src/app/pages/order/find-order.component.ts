import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../../services/service.index';

@Component({
  selector: 'app-find-order',
  templateUrl: './find-order.component.html',
  styleUrls: ['./find-order.component.css']
})
export class FindOrderComponent implements OnInit {

  categories: Categories[];
  subProducts: Products[];
  selected: Products[] = [];
  loading: boolean;
  isOpen = false;

  constructor(public cateService: CategoriesService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.loading = true;
    this.cateService.loadCategories()
    .subscribe((resp: any) => {
      this.loading = false;
      this.categories = resp.data.viewer.categoryList;
    });
  }

  selectCategory(cate: Categories) {
    this.subProducts = cate.productList;
  }
  selectProduct(prod: Products) {
    this.selected.push( prod );
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