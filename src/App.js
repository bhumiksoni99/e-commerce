import React from 'react';
import { connect } from 'react-redux';
import Homepage from './pages/homepage/home.component';
import ShopPage from './pages/shop/shop.component';

import Header from './components/header/header.component';
import SignInandSignUp from './pages/sign-in and sign-up/sign-in and sign-up.component';
import {Route,Switch} from 'react-router-dom';
import { auth , createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

import './App.css';

class App extends React.Component {

  unSubscribeAuth = null

  componentDidMount() {

    const {setCurrentUser} = this.props

    this.unSubscribeAuth = auth.onAuthStateChanged(async (userAuth) => {
      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapshot) => {   //snapshot contains the data for the user, onSnapshot prop on userRef is reqd to get the data
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        })
        
      }
      else {
        //when the user signs out
        setCurrentUser(userAuth)
      }
      
     //console.log(user.displayName , user.email)
    })
  }

  componentWillUnmount() {
    this.unSubscribeAuth()
  }


  render() {
  return (
    <div>
      <Header />
      <Switch>      
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component = {ShopPage}/>
        <Route path = '/signin' component = {SignInandSignUp} />
      </Switch>

    </div>
  );
}
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))    //dispatch sends it to all the reducers to work upon
})

export default connect(null , mapDispatchToProps)(App)
