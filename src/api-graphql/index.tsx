import { ApolloClient } from 'apollo-client';
import { IntrospectionFragmentMatcher, InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';

import introspectionQueryResultData from './schema.json';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const cache = new InMemoryCache({ fragmentMatcher });

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : 'Houston, we have a problem'
    }
  };
});

const link = ApolloLink.from([errorLink, authLink, httpLink]);

export const apiGraphQl = new ApolloClient({
  cache: cache,
  link: link,
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  }
});
