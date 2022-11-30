import React from 'react';
// import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ttt from './ssttt.png'
import dothraki from './dothraki.png'
import weatherapp from './weatherapp.png'

function Projects () {
  
    return ( 

        <Container text-center>
            <br />
            <h1>Current and Just Released Projects</h1>
            <br />
            <Row>
                <Col offset='3' xs='12'>
                    <Card>
                        <Card.Img src={ttt} alt='ttt' className="card-img-top"/>
                        <Card.Body>
                            {/* <Card.Link href="https://lynz951.github.io/tic-tac-toe/" class="btn">Play Game</Card.Link> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col offset='3' xs='12'>
                    <Card>
                        <Card.Img src={dothraki} alt='dothraki' className="card-img-top"/>
                        <Card.Body>
                            {/* <Card.Link href="https://lynz951.github.io/weather-app/" class="btn">Check the Weather</Card.Link> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col offset='3' xs='12'>
                    <Card>
                        <Card.Img src={weatherapp} alt='weatherapp' className="card-img-top"/>
                        <Card.Body>
                            {/* <Card.Link href="https://lynz951.github.io/mind-reader/" class="btn">Play Game</Card.Link> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;