import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import HomePage from '../src/pages/homepage/homepage.component.jsx';
import ShopPage from '../src/pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const App = () => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);


  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route 
        exact 
        path='/signin' 
        render={() => 
        currentUser ? (
          <Redirect to='/' />
            ) : (
              <SignInAndSignUp />
            )
          }
        />
      </Switch>
    </div>
  );
};

export default App;
