import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Catalog } from './components/Catalog';
import { ProductDescription } from './components/ProductDescription';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/product/:productId" component={ProductDescription} />
      </Switch>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h2>The Real Glow</h2>
      
    </div>
  );
};

export default App;
