import React from 'react';
import "./Header.css";
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/UseAuth';
import headerImg from '../../../Attachments/Header.png'

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container className="header">
                {/* Logo & Name */}
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src={headerImg}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '} GPU Store</Navbar.Brand>
                {/* Logo & Name */}

                {/* Responsive Toggle Navbar */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to="/explore">Explore</Nav.Link>

                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>

                        {user?.email &&
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                        }
                    </Nav>
                    <Nav className="ms-2 justify-content-end">
                        {user?.email ?
                            <Navbar.Text>Welcome! {user?.displayName}</Navbar.Text> :
                            <Navbar.Text>Have an account?</Navbar.Text>
                        }
                        {user?.photoURL && <Navbar.Brand>
                            <img
                                alt=""
                                src={user?.photoURL}
                                width="30"
                                height="30"
                                style={{ marginLeft: '10px', borderRadius: '50%' }}
                                className="d-inline-block align-top"
                            />{' '}</Navbar.Brand>}
                        {user?.email ?
                            <Button onClick={logout} variant="light ms-2">Log out </Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
                {/* Responsive Toggle Navbar */}
            </Container>
        </Navbar >
    );
};

export default Header