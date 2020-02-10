import React, { Component } from 'react';
import { RegisterForm } from './RegisterForm';
import { ConfCode } from './ConfCode';
import { Table } from 'react-bootstrap'

export class Register extends Component {
    state = {
        step: 1,

        // step 1
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        contact: '',
        Gender: '',

        // step 2
        code: ''
    }
    nextStep = () => {
        const { step } = this.state;
        console.log(this.state);
        this.setState({
            step: step + 1
        });
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
    handleSubmit = (e) => {

        e.preventDefault();
    }

    showStep = () => {
        const { step, firstName, lastName, code, email, password, password2 } = this.state;
        var values = { step, firstName, lastName, code, email, password, password2 };
        if (step === 1)
            return (
                <Table bordered className="mt-5"
                    style={{ backgroundColor: '#e0e0e0', maxWidth: '400px', margin: 'auto', height: '100%' }}>
                    <td>
                        <RegisterForm
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </td>
                </Table>
            );
        if (step === 2)
            return (
                <Table bordered className="mt-5"
                    style={{ backgroundColor: '#e0e0e0', maxWidth: '400px', margin: 'auto', height: '100%' }}>
                    <td>
                        <ConfCode
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            values={values} />
                    </td>
                </Table>
            );
    }
    render() {

        return (
            <>
                {this.showStep()}
            </>
        );
    }
}