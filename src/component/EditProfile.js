import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container, Form, Button, Table, Row, Col } from 'react-bootstrap';
import './css/index.css';
import Profile from './image/Profile.jpg';
export class EditProfile extends Component {
    render() {
        return (
            <Container>
                <Table className='edit' style={{ maxWidth: '50%' }}>
                    <Row>
                        <Col>
                            <h2 className="text">Edit Profile</h2>
                            <Image src={Profile} height="300px" className="img" roundedCircle />
                            <Form>
                                <Form.Group>
                                    <Form.Label className="editlable">First Name</Form.Label>
                                    <Form.Control className="editinput" type="text" name="firstName" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="editlable">Last Name</Form.Label>
                                    <Form.Control className="editinput" type="text" name="lastName" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="editlable">Email</Form.Label>
                                    <Form.Control className="editinput" type="email" name="email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="editlable">Contact</Form.Label>
                                    <Form.Control className="editinput" type="text" name="contact" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="editlable">Profile Photo</Form.Label>
                                    <Form.Control className="editinput" type="file" name="contact" />
                                </Form.Group>
                                <div className="editbutton">
                                    <Button type="button">Edit</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Table>
            </Container>
        );
    }
}