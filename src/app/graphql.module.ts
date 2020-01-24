import { NgModule } from '@angular/core';
import { ApolloModule , APOLLO_OPTIONS, Apollo} from 'apollo-angular';
import { HttpLinkModule , HttpLink} from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientModule } from '@angular/common/http';

// const uri = ''; // <-- add the URL of the GraphQL server here
const uri = 'https://o5x5jzoo7z.sse.codesandbox.io/graphql'; //our test Graphql Server which returns rates
// const uri = 'https://countries.trevorblades.com/';
export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  imports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  // providers: [
  //   {
  //     provide: APOLLO_OPTIONS,
  //     useFactory: createApollo,
  //     deps: [HttpLink],
  //   },
  // ],
})
export class GraphQLModule {

  private readonly URI1: string = 'https://o5x5jzoo7z.sse.codesandbox.io/graphql';
  private readonly URI2: string = 'https://countries.trevorblades.com/';
  private readonly URI3: string = 'https://graphql-compose.herokuapp.com/northwind';

  constructor(apollo: Apollo,
              httpLink: HttpLink) {
                const options1: any = { uri: this.URI1 };
                apollo.createDefault({
                  link: httpLink.create(options1),
                  cache: new InMemoryCache()
                });
                const options2: any = { uri: this.URI2 };
                apollo.createNamed('endpoint2', {
                  link: httpLink.create(options2),
                  cache: new InMemoryCache()
                });
                const options3: any = { uri: this.URI3 };
                apollo.createNamed('endpoint3', {
                  link: httpLink.create(options3),
                  cache: new InMemoryCache()
                });
  }

}
