import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from '../src/pages/homepage/homepage.component.jsx';
import ShopPage from '../src/pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component {
  
  //closing subscription when component unmounth to prevent memory leaks 
  unsubscribeFromAuth = null

  //getting data from Firebase when state change  (someone signIn or signOut) and we're using method provide by firebase library
  componentDidMount(){
    const { checkUserSession } = this.props;
    checkUserSession();
  }

//method to close subscription
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render() {
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
        this.props.currentUser ? (
          <Redirect to='/' />
            ) : (
              <SignInAndSignUp />
            )
          }
        />
      </Switch>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps 
  )(App);
