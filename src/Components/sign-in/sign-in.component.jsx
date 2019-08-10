import React,{Component } from 'react'
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
    constructor(props){
        super(props)
    this.state={
        email:'',
        password:''
    }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange=e=>{
        const{value,name}=e.event.target
        this.setState({[name]:value})
    }
  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>SIgn In with your email and password</span>
     <form onSubmit={this.handleSubmit}>
         <FormInput label="Email" name="email" type="email" handleChange={this.handleChange} value={this.state.email} required/>
         {/* <label>Email</label> */}
         <FormInput label="Password" name="password" type="password" handleChange={this.handleChange} value={this.state.email} required/>
         {/* <label>Password</label> */}
         <CustomButton type="submit">SIGN IN </CustomButton>
     </form>
      </div>
    )
  }
}
export default SignIn;