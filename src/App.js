import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { Container } from "react-bootstrap"
import Signup from "./components/Signup"
import Login from "./components/Login"
import { AuthProvider } from './AuthContext';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import  Mainpage  from './components/Mainpage';
class App extends Component {

render() {

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
      
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Mainpage/> }/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </AuthProvider>
      </Router>
      </div>
     
    </Container>
    
    
 
  );
}
}//end of class

export default App;


//this.state.users => usersan props olarak geliyo






/*
  return (
    <div className="Container">
     
      <Navbar title = "Library"/>
      <hr/>
      <AddBook/>
      
     
      <Books /> 
   
    </div>
  );
}
}

*/
