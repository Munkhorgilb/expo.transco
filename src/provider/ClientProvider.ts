import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { onError } from "@apollo/client/link/error";

const baseUrl = "erxes.priuscenter.mn/gateway";

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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsiY3JlYXRlZEF0IjoiMjAyNC0wMy0yMVQxNzowMDoyMy42ODBaIiwibmFtZSI6IlByaXVzIENlbnRlciBNb2JpbGUgQXBwIiwidXNlckdyb3VwSWQiOiJDRkROanE1cmg2TDVEUkIyUCIsImV4cGlyZURhdGUiOiIyMDQwLTEyLTMxVDA5OjQ1OjAxLjUyNVoiLCJhbGxvd0FsbFBlcm1pc3Npb24iOnRydWUsIm5vRXhwaXJlIjp0cnVlLCJfaWQiOiJSM2hlYXRRU3J4eFB3NHhsV2djd0giLCJfX3YiOjB9LCJpYXQiOjE3MTExODcxMTh9.f9_F4zveez1xS-nHmxpj4Nlsn2yCz2YMeQfibpEL5Z8",
  },
});

export const client = new ApolloClient({
  link: ApolloLink.from([logoutLink, httpLink]),
  cache: new InMemoryCache(),
  queryDeduplication: false,
  defaultOptions: { watchQuery: { fetchPolicy: "network-only" } },
});
