import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from '../src/pages/homepage/homepage.component.jsx';
import ShopPage from '../src/pages/shop/shop.component.jsx'
import Header from './components/header/header.component';



function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
