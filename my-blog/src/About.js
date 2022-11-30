import React from 'react';
// import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Col from 'react-bootstrap/Col';
import LindsayHeadshot from './haddix-lindsay.png';

function About () {
    return (
        <>
            <div className="bg-light vh-100 justify-content-center">
                   <Col md='6' lg='6' sm='12' xs='12'>
                        <h1>About Me</h1>
                        <img src={LindsayHeadshot} alt="headshot of Lindsay" width="300" height="375" />
                    </Col>
                    

                    <Col md='6' sm='12' lg='6' xs='12'>
                       <h4>My name is Lindsay Haddix, and I am a web development student at Awesome, Inc. in Lexington, Kentucky. I started their bootcamp program in August, 2022, and plan on finishing in December.
                        I am really enjoying learning something new and challenging. I am currently mastering these subjects:
                        <ul>
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>GitHub/GitPod/VS Code</li>
                            <li>Agile Development</li>
                            <li>Graphic Design</li>
                        </ul>
                        In my spare time I like to be outside and travel with my husband and two kids. Ask me about any of my many hobbies such as cooking, houseplants, painting, building furniture, gardening, and hiking!</h4>
                    </Col>
            </div>
        </>
     );
    }

export default About