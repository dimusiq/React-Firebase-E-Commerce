import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component.jsx';
import ShopPage from '../src/pages/shop/shop.component.jsx'



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
