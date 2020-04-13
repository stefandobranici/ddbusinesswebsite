import React from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import '../../styles/components/navbar.css';

class Component extends React.Component {
    render() {
        return (
            <Navbar sticky="top" collapseOnSelect className="navbar" expand="lg" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="navContainer">
                    <NavDropdown.Item className="navbarItem" href="#home">LATEST WORK</NavDropdown.Item>
                    <NavDropdown.Item className="navbarItem" href="#home">SERVICES</NavDropdown.Item>
                    <Navbar.Brand href="#home" className="navbarLogoContainer">
                        <img src={logo} className="navbarLogo" />
                    </Navbar.Brand>
                    <NavDropdown.Item className="navbarItem" href="#home">ABOUT US</NavDropdown.Item>
                    <NavDropdown.Item className="navbarItem" href="#home">CONTACT US</NavDropdown.Item>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export const NavigationBar = () => <Component />;
