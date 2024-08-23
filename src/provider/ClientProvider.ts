import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";

const baseUrl = "edc.api.erxes.io/api";

export const apiUrl = `https://${baseUrl}`;

const logoutLink = onError(({ networkError, graphQLErrors }) => {
  console.log("--netError", networkError);
  console.log("--gqlError", graphQLErrors);
});

const httpLink = createHttpLink({
  uri: `${apiUrl}/graphql`,
  // credentials: 'include',
  headers: {
    "erxes-app-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6IkFkbWluIiwiY3JlYXRlZEF0IjoiMjAyNC0wOC0yM1QwMzo1MjozMS43ODRaIiwidXNlckdyb3VwSWQiOiI0RUh5ZFREQWlzMkxkUW5abiIsImV4cGlyZURhdGUiOiIyMDMwLTEyLTMxVDA4OjU4OjU5LjkzMFoiLCJub0V4cGlyZSI6dHJ1ZSwiYWxsb3dBbGxQZXJtaXNzaW9uIjp0cnVlLCJfaWQiOiJnbnd5NlJROTlQWFJGNGtpQnhCNlIiLCJfX3YiOjB9LCJpYXQiOjE3MjQ0MDM1NTN9.CKOZ3_A48Q1J3RKsBR85kTam4w0N54oBbLCG9OEG0Co",
  },
});

export const client = new ApolloClient({
  link: ApolloLink.from([logoutLink, httpLink]),
  cache: new InMemoryCache(),
  queryDeduplication: false,
  defaultOptions: { watchQuery: { fetchPolicy: "network-only" } },
});
