import React, { Component } from "react";
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../Components/Collection-preview/collection-preview'
import './shoppage.style.scss'
import CustomButton from '../../Components/custom-button/custom-button.component'
class Shoppage extends Component {
  constructor() {
    super();
    this.state={
        collections:SHOP_DATA
    }
  }
  render() {
      
      const {collections}=this.state;
      console.log(this.props)
      return (
      <div className="shop-page">
         {
             collections.map(({id,...otherCollectionProps})=>(
                 <CollectionPreview key={id} {...otherCollectionProps}>
                <CustomButton type="submit">ADD TO CART</CustomButton>
                 </CollectionPreview>
             ))   
         }
         
      </div>
      )
}
}
export default Shoppage;