import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import card1front from './image/card1front.jpg';
import './css/index.css';
import { Redirect } from 'react-router-dom';
export class Testhome extends Component {

    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/Login' />
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <div className="card">
                        <img src={card1front} alt="card1" height="30px" style={{ width: '100%', height: '30%' }} />
                        <div className="container textcolor">
                            <h4><b>Object Oriented Programming With C++</b></h4>
                            <p>Subject Code:215002</p>
                            <p>Semister:6th</p>
                            <p>Autor:Fenil Jariwala</p>
                        </div>
                    </div>
                    {this.renderRedirect()}
                    <button onClick={this.setRedirect}>Login</button>
                </Container>
            </div>
        )
    }
}