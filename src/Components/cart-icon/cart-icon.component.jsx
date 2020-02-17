import React from "react";
import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";
import './cart-icon.style.scss'
const CartIcon = () => (
  <div className="CartContainer">
    <ShoppingIconSVG className="ShoppingIcon" />
  </div>
);

export default CartIcon;
