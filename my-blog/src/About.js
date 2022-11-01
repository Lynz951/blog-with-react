import React from 'react';
// import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import LindsayHeadshot from './haddix-lindsay.png';

function About () {
    return (
        <>
            <div className="container bg-light vh-100">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                        <h1>About Me</h1>
                        <img src={LindsayHeadshot} alt="headshot of Lindsay" width="300" height="375" />
                    </div>

                    <div className="col-md-6 col-sm-12 col-lg-6 col-xs-12">
                        <p><h4>My name is Lindsay Haddix, and I am a web development student at Awesome, Inc. in Lexington, Kentucky. I started their bootcamp program in August, 2022, and plan on finishing in December.
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
                        </p>
                    </div>
                </div>
            </div>
        </>
     );
    }

export default About