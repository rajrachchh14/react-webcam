import React from 'react';
import Videos from './Videos';
import Home from './Home';
import Test from './Test';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <>
      <Router>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand to="/">Webcode</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/Home">Home</Link>

              <Link to="/Videos">Video</Link>
              <Link to="/Test">Test</Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/Videos">
            <Videos />
          </Route>

          <Route path="/Home" exact>
            <Home />
          </Route>
          <Route path="/Test">
            <Test />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
