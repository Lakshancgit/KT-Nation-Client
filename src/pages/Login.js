import React, { Component } from 'react';
import axios from 'axios';
import { redirect }  from 'react-router-dom';
import Home from './Home';

export class login extends Component {

  constructor(){
    
    super();
    this.state = {
      email: '',
      password:'',
      loading: false,
      errors:{}
    }
  }

  handleSubmit = (event)=>{
    //const navigate = useNavigate();
    event.preventDefault();
    this.setState({
      loading:true,
      auth:false
    });
    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('https://us-central1-kt-nation.cloudfunctions.net/api/login' , userData)
    .then((res) => {
      console.log(res.data);
      this.setState({
        loading:false,
        auth:true
      });
     return redirect("/");
    }).catch(err => {
      console.log(err);
      this.setState({
        
        loading:false,
        auth:false
      });
    })
  }

  handleChange = (event)=>{
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
    
    const {errors, loading , auth } =this.state;
    if(!auth){
      return (
        <div>
          <section className="vh-100">
    <div className="container py-5 h-100">
      <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-8 col-lg-7 col-xl-6">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid" alt=" "/>
        </div>
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form noValidate onSubmit={this.handleSubmit}>
            
            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form1Example13">Email address</label>
              <input type="email" id="email" name='email' className="form-control form-control-lg" 
              value={this.state.email} onChange={this.handleChange}/>
              
            </div>
  
            
            <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form1Example23">Password</label>
            <input type="password" id="password" name='password' className="form-control form-control-lg" 
            value={this.state.password} onChange={this.handleChange}/>
              
            </div>
  
            <div className="d-flex justify-content-around align-items-center mb-4">
              
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form1Example3" defaultChecked />
                <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
              </div>
              <a href="#!">Forgot password?</a>
            </div>
            <label className="form-check-label" htmlFor="form1Example3"> {errors.general} </label>
            
            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
  
          </form>
        </div>
      </div>
    </div>
  </section>
        </div>
      )
    }else{
      return <div><Home/></div>
    }
  }
}

export default login

