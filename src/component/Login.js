import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import logo from './image/loginimage.jpg';
import { GiOpenBook } from 'react-icons/gi';
import { MdPerson, MdLock } from 'react-icons/md';
import './css/index.css';

export class Login extends Component {

    render() {
        return (
            <div>
                <Table className="login-form mt-5 mb-5"
                    style={{
                        backgroundColor: '#e0e0e0',
                        maxWidth: '600px', margin: 'auto', borderRadius: '53px'
                    }}>
                    <tr>
                        <td style={{ padding: '0px', width: '250px', border: 'none' }}>
                            <img src={logo} width="260px" height='458px' style={{ borderTopLeftRadius: '48px', borderBottomLeftRadius: '48px' }} alt="img" />
                        </td>
                        <td style={{ paddingLeft: '5px', opacity: '0.8', border: 'none' }}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <div className="text-center mt-3 mb-3"><GiOpenBook size="50px" color="black" /></div>
                                    <h2 className='text-center' style={{ fontFamily: 'Roboto', marginBottom: '20px' }}>BOOKTOPUS</h2>
                                    <MdPerson size="20px" style={{ marginLeft: '40px', marginRight: '0px' }} />
                                    <Form.Label style={{ marginTop: '5px', fontFamily: 'Verdana', marginLeft: '4px', marginBottom: '1px' }}><h5>Email</h5></Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" style={{ borderRadius: '53px', width: '251px', marginLeft: '40px' }} />
                                    <Form.Text className="text-muted" style={{ fontFamily: 'Verdana', marginLeft: '52px', fontSize: '10px' }}>
                                        We'll never share your email with anyone else.
                                </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <MdLock size="20px" style={{ marginLeft: '40px' }} />
                                    <Form.Label style={{ fontFamily: 'Verdana', marginBottom: '1px' }}><h5>Password</h5></Form.Label>
                                    <Form.Control type="password" placeholder="Password" style={{ borderRadius: '53px', width: '251px', marginLeft: '40px' }} />
                                </Form.Group>
                                <div className="text-center">
                                    <Button style={{ fontFamily: 'Verdana', backgroundColor: '#154CFF' }} type="submit">
                                        Submit
                            </Button>
                                </div>
                                <div style={{ textAlign: 'center', marginTop: '15px', fontFamily: 'Verdana' }}>
                                    <Link to="/Register" style={{ color: 'Black' }}>Sign up</Link>
                                    <span className="p-2" style={{ fontSize: '20px', color: 'Black' }}>|</span>
                                    <Link to="/Forgotpassword" style={{ color: 'Black' }}>Forgot Password</Link>
                                </div>
                            </Form>
                        </td>
                    </tr>
                </Table>
            </div >
        )
    }
}

export default Login;