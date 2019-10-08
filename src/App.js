import React from 'react';
import Homepage from './pages/homepage/home.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInandSignUp from './pages/sign-in and sign-up/sign-in and sign-up.component';
import {Route,Switch} from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser:null
    }
  }

  unSubscribeAuth = null

  componentDidMount() {
    this.unSubscribeAuth = auth.onAuthStateChanged((user) => {
      this.setState ({currentUser:user})
      
     //console.log(user.displayName , user.email)
    })
  }

  componentWillUnmount() {
    this.unSubscribeAuth()
  }


  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>      
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component = {ShopPage}/>
        <Route path = '/signin' component = {SignInandSignUp} />
      </Switch>

    </div>
  );
}
}

export default App;
