import React, { Component } from 'react';
import './App.css';
import Articles from './ArticlesList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from './ProductsList';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Articles}/>
          <Route path='/products' exact={true} component={Products}/>
        </Switch>
      </Router>
    )
  }
}

export default App;