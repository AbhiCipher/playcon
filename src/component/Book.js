import React, { Component } from 'react';
import img from './image/card1front.jpg';
import { Container, Row, Col, Image, Button, Card, ListGroup, Table } from 'react-bootstrap';
export class Book extends Component {
    render() {
        return (
            <Container >
                <Row style={{ marginTop: '15px', width: '100%' }}>
                    <Col xs={6} md={4}>
                        <Image src={img} fluid />
                        <div style={{ marginTop: '25px', marginLeft: '8px' }}>
                            <Button variant="dark" style={{ width: '150px'}}>Interested?</Button>
                            <Button variant="dark" style={{ width: '150px' }}> Request</Button>
                        </div>
                    </Col>
                    <Col>
                        <h1>Book Title</h1>
                        <Table borderless size='sm'>
                            <tr>
                                <td>
                                    Book ID:
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Language:
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Author:
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ISBN:
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Edition:
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Subject:
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Pages:
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Publish Year:
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Description:
                                </td>
                            </tr>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Book;