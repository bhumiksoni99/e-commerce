import React from 'react';
import { connect } from 'react-redux';
import Homepage from './pages/homepage/home.component';
import ShopPage from './pages/shop/shop.component';

import Header from './components/header/header.component';

import { GlobalStyles } from './global.styles';
import SignInandSignUp from './pages/sign-in and sign-up/sign-in and sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import {Route,Switch,Redirect }  from 'react-router-dom';
import { auth , createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

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
        //addCollectionAndDocuments('collections',collectionsArray.map(({title,items}) => ({title , items})))          //'collections' is the name of the key as selected in the shop reducer
      }                                                                                                              //because we only need to store title and items in our firestore
      
    
    })
  }

  componentWillUnmount() {
    this.unSubscribeAuth()
  }


  render() {
  return (
    <div>
      <GlobalStyles/>
      <Header />
      <Switch>      
        <Route exact path='/' component= {Homepage} />
        <Route path='/shop' component = {ShopPage}/>
        <Route exact path='/checkout' component = {CheckoutPage}/>
        <Route exact path = '/signin' render = { () => this.props.currentUser ? (<Redirect to='/' />) : <SignInandSignUp/>} />    {/*redirects to home if signed in*/}
      </Switch>

    </div>
  );
}
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  //collectionsArray : selectCollectionForPreview(state)
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))    //dispatch sends it to all the reducers to work upon
})

export default connect(mapStateToProps , mapDispatchToProps)(App)


//all comment statements were used to upload shop data into the firestore


