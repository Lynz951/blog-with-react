import React from 'react';
// import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import './index.css'
import logo from './finalwhite.png'

function Navigation() {
  return (
    <div className= 'header'>
      <Navbar expand="lg" variant="light" bg="light">
        <div>
          <img id='logo' alt='logo' src={logo} />
  
          {/* <Navbar.Brand className="aboutbtn" onClick={() => window.location.replace("/#about")}>
              <span>About Me</span>
          </Navbar.Brand> */}

          {/* <Navbar.Brand href="#">Home</Navbar.Brand> */}
          {/* <Navbar.Brand href="#">About</Navbar.Brand> */}
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;