import React from 'react';
import Header from '../Shared/Header/Header';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Header></Header>
            <br />
            <Container className='banner'>
                <div>
                    <h1>Welcome To GPU Store!</h1>
                    <h5>The best place to buy your next builds gpu.</h5>
                    <br />
                </div>
                <div className="container">
                    <img src="https://cdn.videocardz.com/1/2019/05/Intel-Graphics-Card-Concept-Prometheus1-1.jpg" width="50%" alt="" />
                </div>
            </Container>
        </div>
    );
};

export default About;