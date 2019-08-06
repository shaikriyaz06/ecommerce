import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component'
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
    <React.Fragment>
      <Switch>
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path='/hats' component={Hats}></Route>
      <Route exact path='/sneakers' component={Sneakers}></Route>
      <Route exact path='/jackets' component={Jackets}></Route>
      <Route exact path='/womens' component={Women}></Route>
      <Route exact path='/men' component={Men}></Route>
      </Switch>
    
    {/* <Homepage></Homepage> */}
    </React.Fragment>
    )
}

export default App;
