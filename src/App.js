import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from '../src/pages/homepage/homepage.component.jsx';
import ShopPage from '../src/pages/shop/shop.component.jsx'
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'


class App extends React.Component {
  
  //closing subscription when component unmounth to prevent memory leaks 
  unsubscribeFromAuth = null

  //getting data from Firebase when state change  (someone signIn or signOut) and we're using method provide by firebase library
  componentDidMount(){
    const {setCurrentUser} = this.props
    //user state
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(Snapshot => {
          setCurrentUser({
              id: Snapshot.id,
              ...Snapshot.data()
          });
        }); 
      }
      setCurrentUser(userAuth)
    });
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
        <Route exact path='/signin' render={() => this.props.currentUser ? (
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps 
  )(App);
