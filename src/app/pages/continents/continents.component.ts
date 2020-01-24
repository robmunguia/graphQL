import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbGetters } from '@nebular/theme';

const getCountries = gql`
{
  continents {
    code
    name
    countries {
      code
      name
      native
      phone
    }
  }
}`;

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {

  continents: Continents[];
  customColumn = 'name';
  defaultColumns = [ 'code', 'native', 'phone' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  source: NbTreeGridDataSource<Continents>;
  getters: NbGetters<Continents, Continents>;
  loading: boolean;

  constructor(private apollo: Apollo,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<Continents>) {
      this.getters = {
        dataGetter: (node: Continents) => node,
        childrenGetter: (node: Continents) => node.countries || undefined,
        expandedGetter: (node: Continents) => !!node.expanded,
      };
  }

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.loading = true;
    // Se utiliza un segundo (servidor) para la conexion de los continentes
    this.apollo.use('endpoint2')
    .watchQuery<any>({
      query: getCountries
    })
    .valueChanges
    .subscribe((resp: any) => {
      this.continents = resp.data.continents;
      this.source = this.dataSourceBuilder.create(this.continents, this.getters);
      setTimeout(() => this.loading = false, 1500);
    });
  }

}

interface Continents {
  code: string;
  name: string;
  countries: Continents[];
  expanded: boolean;
}

interface Country {
  code: string;
  name: string;
  native: string;
  phone: string;
  expanded: boolean;
}