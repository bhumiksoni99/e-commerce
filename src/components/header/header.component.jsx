import React from 'react';

import {Link} from 'react-router-dom';

import { connect } from 'react-redux';

// import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

const Header = ({currentUser , hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/">
                CONTACT
            </Link>
            {   
                currentUser ?  //if signed in i.e currentuser is not null render the div else render the link
                <div className="option" onClick = {() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
)

const mapStateToProps = (state) => ({    //here state is the rootReducer
    currentUser:selectCurrentUser(state),
    hidden:selectCartHidden(state)
})

export default connect(mapStateToProps)(Header)  