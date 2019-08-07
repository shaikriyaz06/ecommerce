import React from 'react'
import './custom-button.style.scss'
const CustomButton=({children,...otherCustomProps})=>(
    <button className='custom-button' {...otherCustomProps}>
        {children}

    </button>
)
export default CustomButton;
