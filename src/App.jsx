import logo from "./logo.svg";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink,
  HttpLink,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import GetArtist from "./Components/GetArtist";
import Sidebar from "./Components/Layouts/Sidebar";
import Content from "./Components/Layouts/Content";
import GetLaunches from "./Components/GetLaunches";

const App = (props) => {
  // GraphQL Connection
  // const uri = "https://spotify-graphql.up.railway.app/query";
  // const uri = "https://spotify-api-graphql-console.herokuapp.com/query";
  const uri = "https://api.spacex.land/graphql/query";

  // GraphQL Client
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({
      uri: uri,
      // mode: "no-cors",
    }),
  });

  return (
    <ApolloProvider client={client}>
      <Sidebar />
      <Content />
    </ApolloProvider>
  );
};

export default App;
