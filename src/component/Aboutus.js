import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container, Row } from 'react-bootstrap';
import Profile from './image/Profile.jpg';

export class Aboutus extends Component {
    render() {
        return (
            <div>
                <Container>
                    <p className="aboutus">About Us</p>
                    <p className="aboutuslogo">BOOKTOPUS</p>
                    <p className="aboutustext">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className="aboutuslogo">Devloper</p>
                    <Row>
                        
                        <Image src={Profile} height="100px" className="img1" roundedCircle />
                        <Image src={Profile} height="100px" className="img1" roundedCircle />
                        <Image src={Profile} height="100px" className="img1" roundedCircle />
                        <Image src={Profile} height="100px" className="img1" roundedCircle />
                        <Image src={Profile} height="100px" className="img1" roundedCircle />
                        <Image src={Profile} height="100px" className="img1" roundedCircle />
                    </Row>
                </Container>
            </div>
        );
    }
}