import { firebaseAuth } from '@/lib/firebase';
import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { useMemo } from 'react';
import { useFirebaseAuthState } from './useFirebaseAuth';

export const useApolloWithAuth = () => {
  const [user, loading] = useFirebaseAuthState(firebaseAuth);

  const client = useMemo(() => {
    const httpLink = createHttpLink({
      uri: process.env.PUBLIC_GRAPHQL_ENDPOINT,
    });

    const authLink = setContext(async (_, { headers }) => {
      try {
        const token = await user?.getIdToken(true);
        return {
          headers: {
            ...headers,
            authorization: token ? token : '',
          },
        };
      } catch (error) {
        return { headers: { ...headers } };
      }
    });

    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
          console.error(`GraphQL error: Message: ${message}, Location: ${locations}, Path: ${path}`);
        });
      }
      if (networkError) {
        console.error(`Network error: ${networkError}`);
      }
    });

    return new ApolloClient({
      link: from([errorLink, authLink, httpLink]),
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              posts: {
                keyArgs: false,
                merge(existing = [], incoming) {
                  return [...existing, ...incoming];
                },
              },
            },
          },
        },
      }),
      connectToDevTools: process.env.NODE_ENV === 'development',
    });
  }, [user]);

  return { client, loading };
};
