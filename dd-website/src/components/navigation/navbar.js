import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const navbarStyle = {
    "background-color" : "rgba(102, 252, 241, 0.0)"
}

const fontStyle = {
    "font-family" : "Hind Siliguri",
    "color": "rgba(102, 252, 241)"
}

class Component extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect style={navbarStyle} expand="lg" variant="dark">
                <Navbar.Brand href="#home"><p style={fontStyle}>{"Dobra & Demis"}</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features"> <p style={fontStyle}>Features</p></Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export const NavigationBar = () => <Component />;
