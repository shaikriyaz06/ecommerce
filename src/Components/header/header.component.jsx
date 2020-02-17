import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
// import axios from 'axios'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component'
import {Redirect} from 'react-router-dom'
const Header=({currentuser})=> (
      <div className="header">
      <Link to ="/" className="logo-container">
          <Logo className='logo'/></Link>
      <div className="options">
        <Link to="/shop" className='option'>SHOP</Link>
        <Link to="/signin" className='option'>CONTACT</Link>
       {localStorage.getItem('user')?(<Link to='/' ><span>SIGN OUT</span></Link>):(<Link to='/signin'><span>SIGN IN</span></Link>)}
      </div>
      <CartIcon/>
    </div>
    )
  

const mapStateToProps=state =>({  
 currentuser:state.user.name
})
export default connect(mapStateToProps)(Header);
