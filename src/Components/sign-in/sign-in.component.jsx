import React,{Component } from 'react'
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
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
        <h2>I already have an account</h2>
        <span>SIgn In with your email and password</span>
     <form onSubmit={this.handleSubmit}>
         <FormInput label="email" name="email" type="email" onChange={this.handleChange} value={this.state.email} required/>
         {/* <label>Email</label> */}
         <FormInput label="password" name="password" type="password" onChange={this.handleChange} value={this.state.email} required/>
         {/* <label>Password</label> */}
         <input type="submit" value="Submit Form"/>
     </form>
      </div>
    )
  }
}
export default SignIn;