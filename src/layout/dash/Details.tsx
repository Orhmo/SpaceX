import * as React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import CompanyData from '../../components/Data'

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/graphql',
  cache: new InMemoryCache(),
})

const Detail: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <CompanyData />
    </ApolloProvider>
  )
}

export default Detail
