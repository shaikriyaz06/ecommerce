import React from 'react';
import './collection-item.style.scss'
import CustomButton from '../custom-button/custom-button.component';
const CollectionItem=({id,name,price,imageUrl})=>(
    <div className="collection-item">
<div style={{
      backgroundImage:`url(${imageUrl})`
  }} className="image"/>
<div className='collection-footer'>
    <span className='name'>{name}</span>
    <span className='price'>{price}</span>
    
</div>
<div className='AddButton'>
<CustomButton >ADD TO CART</CustomButton>
</div>

    </div>
    
)
export default CollectionItem;