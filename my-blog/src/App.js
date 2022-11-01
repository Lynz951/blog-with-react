import React from 'react';
// import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Footer from './Footer';


function App() {
    const[ page ] = useState('home')

    return (
        <>
         {page === 'home' && <Navigation /> && <Home /> && <Footer />}
         {page === 'about' && <Navigation /> && <About /> && <Footer />}
        </>
    )
}
export default App