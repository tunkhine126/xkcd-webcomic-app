import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home'
import Search from './Components/Search'
import NaviBar from './Components/Navigation'


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NaviBar />
          <Switch>
            <Route exact path="/" render={() => (<Home />)}></Route>
            <Route exact path="/search" render={() => (<Search />)}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;