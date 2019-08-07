import React from 'react'
import './form-input.style.scss'
const FormInput=({handleChange,label,...otherFormprops})=>(
<div className="group">
    <input className="form-input" onChange={handleChange}{...otherFormprops}/>
    {label ? (
    <label 
    className={`${
        otherFormprops.value.length?'shrink':''
    }form-input-label`}
    >
        {label}
        </label>):null}
    
</div>
)
export default FormInput;