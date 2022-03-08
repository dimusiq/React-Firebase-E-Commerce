import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from '../src/pages/homepage/homepage.component.jsx';
import ShopPage from '../src/pages/shop/shop.component.jsx'
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'


class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentUser: null
    }
  }
  
  //closing subscription when component unmounth to prevent memory leaks 
  unsubscribeFromAuth = null

  //getting data from Firebase when state change  (someone signIn or signOut) and we're using method provide by firebase library
  componentDidMount(){
    //user state
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(Snapshot => {
          this.setState({
            currentUser: {
              id: Snapshot.id,
              ...Snapshot.data()
            }
          });
          console.log(this.state)
        }); 
      }
      this.setState({ currentUser: userAuth})
    })
  }

//method to close subscription
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render() {
  return (
    <div>
    <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}
}
export default App;
