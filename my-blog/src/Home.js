import React from 'react';
// import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import LindsayMexico from './LindsayMexico.png';

function Home () {
  
    return ( 
        <div className="home">
            <div className="picture" style="container-fluid picture">
                <Row>
                    <Column>
                         <img src={LindsayMexico} alt="LindsayMexicoPic" className="img-fluid" />
                        <div className="top-left">Meet <br />Lindsay Haddix, <br />web developer.</div>
                    </Column>
                </Row>
            </div> 
        </div>
     );
 }

export default Home;