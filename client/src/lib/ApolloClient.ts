import { HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloClient } from "@apollo/client";

const link = new HttpLink({
  uri: 'https://graphql-api-brown.vercel.app/api/graphql', // Your GraphQL server URL
});

export const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
})