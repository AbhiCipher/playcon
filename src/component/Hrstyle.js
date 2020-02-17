import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FaGripLinesVertical } from 'react-icons/fa';
import { GiOpenBook, GiBookshelf } from 'react-icons/gi';
import { TiCalculator } from 'react-icons/ti';
import './css/index.css';

export class Hrstyle extends Component {
    render() {
        return (
            <div>
                <Container style={{ borderLeft: '6px solid #2D3436', backgroundColor: 'lightgrey' }}>
                    <p className="textsize" style={{ marginTop: '1.5%' }}>
                        <a href='Book' style={{ color: '#1b1e20', fontWeight: 'bold' }}><GiOpenBook style={{ marginRight: '1%' }} />
                            BOOKS</a>
                        <FaGripLinesVertical style={{ marginLeft: '1%', marginRight: '1%' }} />
                        <a href='material' style={{ color: '#1b1e20', fontWeight: 'bold' }}><GiBookshelf style={{ marginRight: '1%' }} />
                            MATERIAL</a>
                        <FaGripLinesVertical style={{ marginLeft: '1%', marginRight: '1%' }} />
                        <a href='tools' style={{ color: '#1b1e20', fontWeight: 'bold' }}><TiCalculator style={{ marginRight: '1%' }} />
                            TOOLS</a>
                    </p>

                </Container>
            </div>
        )
    }
}