import { ApolloClient, InMemoryCache } from "@apollo/client"

const createApolloClient = () => {
  return new ApolloClient({
    uri: "",
    cache: new InMemoryCache(),
  })
}
export default createApolloClient
