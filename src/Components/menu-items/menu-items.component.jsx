import React from "react";
import './menu-items.style.scss'
import {withRouter} from 'react-router-dom'
const MenuItem = ({title,imageUrl,size,match,linkUrl,history}) => (

  <div className={`${size} menu-item`} onClick={()=>{
  history.push(`${match.url}${linkUrl}`)}}>
      <div style={{
      backgroundImage:`url(${imageUrl})`
  }} className="background-Image">

      </div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
export default withRouter(MenuItem) ;