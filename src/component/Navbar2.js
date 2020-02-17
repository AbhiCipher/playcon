import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Form, FormControl, Container, NavDropdown, Button, Row } from 'react-bootstrap';
import { GiBookCover } from 'react-icons/gi';
import { NavLink } from 'react-router-dom'
import './css/index.css';

export class Navbar2 extends Component {
    render() {
        return (
            <div>
                <Navbar className="navbar" expand="lg">
                    <Container fluid>
                        <GiBookCover size="50px" className="font1" style={{ marginRight: '10px' }} />
                        <Navbar.Brand>
                            <NavLink to="/" className="font1" style={{ fontWeight: 'bold' }}>BOOKTOPUS</NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Form inline style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                <FormControl type="text" placeholder="Search" style={{ borderRadius: '53px', width: '300px' }} />
                                <Button variant="outline-success" style={{ borderRadius: '53px' }}>Search</Button>
                            </Form>
                            <Nav className="mr-auto">
                                <NavLink to="/" className="font1" style={{ marginTop: '2.5%', marginRight: '10%' }}>Home</NavLink>
                                <NavLink to="/Aboutus" className="font1" style={{ marginTop: '2.5%', marginRight: '10%' }}>AboutUs</NavLink>
                                <NavDropdown title="Dropdown" className="font1">
                                    <NavDropdown.Item ><NavLink to="/Uploadbook">Upload Book</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item ><NavLink to="/Uploadmaterial">Upload Material</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item ><NavLink to="/Uploadtools">Upload Tools</NavLink></NavDropdown.Item>
                                    <NavDropdown.Item ><NavLink to="/EditProfile">Edit Profile</NavLink></NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><NavLink to="/Login">Log In</NavLink></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        );
    }
}
// className = "ml-auto"

// className = "mr-auto"