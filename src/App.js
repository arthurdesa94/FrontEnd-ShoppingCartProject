import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shopping-cart" component={ShoppingCart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
