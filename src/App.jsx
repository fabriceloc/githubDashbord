import React, { Component } from 'react';
import './App.css';
import Header from "./Header";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouterMatch,
  useParams
} from "react-router-dom";
import User from "./User";
import Depot from "./Depot";
import { Container, Row, Col } from 'reactstrap';
import Home from "./Home";


class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <Router>
          <div className="App">
              <Container>
                  <Row>
                      <Header/>
                  </Row>
              </Container>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/user/:idUser" component={User}/>
                <Route path="/depot/:repo/:username" component={Depot}/>
            </Switch>
          </div>
        </Router>
    )
  }
}

export default App;
