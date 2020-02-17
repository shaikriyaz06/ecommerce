import React,{Component } from 'react'
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
// import axios from 'axios'
import { Fetch_user} from '../../redux/user/user.actions'
import {connect} from 'react-redux'
// import { bindActionCreators } from 'redux';

class SignIn extends Component {
    constructor(props){
        super(props)
    this.state={
      currentUserName:'',
        email:'',
        password:''
    }
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
      
      this.props.FETCH_USER(this.state)
    }
    handleChange=e=>{
        const{value,name}=e.target
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
         <FormInput label="Password" name="password" type="password" handleChange={this.handleChange} value={this.state.password} required/>
         {/* <label>Password</label> */}
         <CustomButton type="submit">SIGN IN </CustomButton>
     </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    FETCH_USER:userdata=>(dispatch(Fetch_user(userdata)))
  }
};
export default connect(null,mapDispatchToProps)(SignIn);