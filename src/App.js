import React, { Component } from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';
import NavbarComp from './components/NavbarComp';



class App extends Component{
  render() {
    return (
      <div className="App">
        <NavbarComp/>
        
        <BrowserRouter>
        <Routes>
          <Route  path='/' element= {<Home/>}/>
          <Route  path='/login' element= {<Login/>}/>
          <Route  path='/signup' element= {<Signup/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
