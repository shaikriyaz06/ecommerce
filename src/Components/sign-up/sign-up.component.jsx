import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.style.scss'
 class SignUp extends Component {
     constructor(){
         super();
         this.state={
             email:'',
             password:'',
             confirmpassword:'',
             displayName:'',
         }
     }
     handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({email:'',password:'',confirmpassword:'',displayName:''})
    }
     handleChange=(e)=>{
         console.log(e.event.target)
         const{value,name}=e.event.target
         this.setState({[name]:value})
     }
  render() {
    return (
        <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>SIgn up with your email and password</span>
     <form onSubmit={this.handleSubmit}>
     <FormInput label="Display Name" name="displayName" type="text" handleChange={this.handleChange} value={this.state.email} required/>
         <FormInput label="Email" name="email" type="email" handleChange={this.handleChange} value={this.state.email} required/>
         {/* <label>Email</label> */}
         <FormInput label="password" name="password" type="password" handleChange={this.handleChange} value={this.state.password} required/>
         <FormInput label="confirmpassword" name="password" type="password" handleChange={this.handleChange} value={this.state.confirmpassword} required/>
         {/* <label>Password</label> */}
         <CustomButton type="submit">SIGN UP </CustomButton>
     </form>
      </div>
    )
  }
}
export default SignUp;
