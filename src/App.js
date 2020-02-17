import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom'
import Shoppage from './pages/shoppage/shoppage.component'
import Homepage from './pages/homepage/homepage.component'
import Header from '../src/Components/header/header.component'
import {connect} from 'react-redux'
import SignInandsignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
class App extends Component {
  
  render(){
    console.log(this.props.user)
    return (
      <div>
        <Header/>
  {/* <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path='/shop' component={Shoppage}></Route>
        <Route exact path="/signin" render={()=>this.props.currentuser?(
        <Redirect to='/'/>) : (<SignInandsignUp />)}/>
        </Switch> */}
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/shop" component={Shoppage}/>
          <Route exact path="/signin" render={()=>this.props.currentuser?(<Redirect to="/"/>):(<SignInandsignUp/>)}/>
        </Switch>
      </div>
      )
  }
  
}

const mapStateToProps= state =>({
  currentuser:state.user
})
// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch( (user))
// });
export default connect(mapStateToProps,null)(App);
