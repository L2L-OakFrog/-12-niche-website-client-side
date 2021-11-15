import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link as NavLink } from 'react-router-dom';
import footerImg from '../../../Attachments/Footer.png'

const navStyle = {
    textDecoration: 'none',
    color: 'black'
}

const Footer = () => {
    return (
        <div sticky="bottom">
            <Container>
                <Row>
                    <Col>
                        <h3>DISCOVER</h3>
                        <hr />
                        <ul className="list-unstyled">
                            <li><h5><NavLink style={navStyle} to="/explore">Explore</NavLink></h5></li>
                            <li><h5><NavLink style={navStyle} to="/about">About Us</NavLink></h5></li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Contact</h3>
                        <hr />
                        <ul className="list-unstyled">
                            <li><h5>Phone: +47 007 456 02</h5></li>
                            <li><h5>Email: web@gpu-store.com</h5></li>
                        </ul>
                    </Col>
                    {/* <Col><img src="https://image.freepik.com/free-vector/trip-concept-illustration_114360-1247.jpg" width="250" height="200" alt="" /></Col> */}
                </Row>
                <Row>
                    <div className='footerBrand'>
                        <div>
                            <img
                                alt=""
                                src={footerImg}
                                width="80"
                                height="80"
                                className="d-inline-block align-top"
                            />
                        </div>
                        <div><h1>GPU Store</h1></div>
                    </div>
                    <p className='copyright'>Copyright &copy;{new Date().getFullYear()} GPU Store / All Rights Reserved</p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;