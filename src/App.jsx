import styles from "./App.module.scss";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Dashboard from "./Components/Dashboard/Dashboard";
import Search from "./Components/Search/Search";
import RocketDetail from "./Components/Detail/RocketDetail";
import Favorite from "./Components/Favorite/Favorite";
import UserProvider from "./Store/UserProvider";
import { useContext } from "react";
import UserContext from "./Store/user-context";

const App = (props) => {
  // GraphQL Connection
  // const uri = "https://spotify-graphql.up.railway.app/query";
  const uri = "https://api.spacex.land/graphql/query";
  // GraphQL Client
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createHttpLink({
      uri: uri,
      // mode: "no-cors",
    }),
  });

  const userCtx = useContext(UserContext);

  return (
    <UserProvider>
      <div className={styles.app}>
        <ApolloProvider client={client}>
          <Router>
            <div>
              <Navbar bg="dark" variant="dark">
                <Container>
                  {/* <Navbar.Brand href="/index">SpaceX</Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/search">Search</Nav.Link>
                  </Nav> */}
                  <Navbar.Brand href="#">SpaceX</Navbar.Brand>
                  <Nav className="me-auto">
                    <Link className={styles.link} to="/dashboard">
                      Dashboard
                    </Link>
                    <Link className={styles.link} to="/favorite">
                      Favorite
                    </Link>
                    <Link className={styles.link} to="/search">
                      Search
                    </Link>
                  </Nav>
                </Container>
              </Navbar>
              <Switch>
                <Route path="/favorite">{<Favorite userCtx={userCtx} />}</Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/search">
                  <Search />
                </Route>
                {/* <Route
                  path="/rockets/:id"
                  children={<RocketDetail userCtx={userCtx} />}
                /> */}
                <Route path="/rockets/:id">
                  <RocketDetail userCtx={userCtx} />
                </Route>
              </Switch>
            </div>
          </Router>
        </ApolloProvider>
      </div>
    </UserProvider>
  );
};

export default App;
