import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Shoppage from './pages/shoppage/shoppage.component'
import Homepage from './pages/homepage/homepage.component'
import Header from '../src/Components/header/header.component'
import signInandsignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
const Hats=()=>(
  <h1>Hats Component</h1>
)
const Jackets=()=>(
  <h1>Jackets Component</h1>
)
const Sneakers=()=>(
  <h1>Sneakers Component</h1>
)
const Women=()=>(
  <h1>Women Component</h1>
)
const Men=()=>(
  <h1>Men Component</h1>
)
function App() {
  return (
    <div>
      <Header></Header>
<Switch>
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path='/shop' component={Shoppage}></Route>
      <Route exact path="/header" component={Header}></Route>
      <Route exact path='/sneakers' component={Sneakers}></Route>
      <Route exact path='/jackets' component={Jackets}></Route>
      <Route exact path='/womens' component={Women}></Route>
      <Route exact path='/men' component={Men}></Route>
      <Route exact path="/signin" component={signInandsignUp}></Route>
      </Switch>
    </div>
    )
}

export default App;
