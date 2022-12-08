import React from 'react';
// import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
// import { useState } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';


function App() {

    return (
        <>
        <Navigation />
        <Home />
        <Projects />
        <About />
        {/* <Footer /> */}
        </>
    )
}
export default App