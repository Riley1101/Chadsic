import { ApolloClient, InMemoryCache } from "@apollo/client";

const ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "";

export const apolloclient = new ApolloClient({
  uri: ENDPOINT,
  cache: new InMemoryCache(),
});
