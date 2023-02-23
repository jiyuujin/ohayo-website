import fetch from 'isomorphic-unfetch'
import { ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache, PossibleTypesMap } from '@apollo/client/core'
import QueryResult from './fragmentTypes.json'

const GITHUB_API_V4 = 'https://api.github.com/graphql'

// https://github.com/apollographql/apollo-client/issues/6855#issuecomment-678822460
const introspectionToPossibleTypes = (data): PossibleTypesMap => {
  const possibleTypes = {}

  data.__schema.types.forEach((supertype) => {
    if (supertype.possibleTypes) {
      possibleTypes[supertype.name] = supertype.possibleTypes.map((subtype) => subtype.name)
    }
  })

  return possibleTypes
}

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `bearer ${
        import.meta.env.VITE_APP_GITHUB_API_ACCESS_TOKEN
      }`,
      Accept: 'application/vnd.github.v4.idl'
    }
  })
  return forward(operation)
})

const httpLink = new HttpLink({
  uri: GITHUB_API_V4,
  fetch
})

export const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache({
    possibleTypes: introspectionToPossibleTypes(QueryResult),
  })
})
