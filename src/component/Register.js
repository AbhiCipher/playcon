import React, { Component } from 'react';
import { RegisterForm } from './RegisterForm';
import { ConfCode } from './ConfCode';
import { Table } from 'react-bootstrap'

const emailRegex = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const formvalid = formerror => {
    let valid = true;

    Object.values(formerror).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
}
export class Register extends Component {
    state = {
        step: 1,

        // step 1
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        password2: null,
        contact: null,
        Gender: null,

        formerror: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: '',
            contact: '',
            Gender: ''
        },

        // step 2
        code: ''
    };
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
        e.preventDefault();
        const { name, value } = e.target;
        let formerror = this.state.formerror;

        switch (name) {
            case 'firstName':
                formerror.firstName = value.length > 0 && !isNaN('firstName') ? "Please enter the First Name" : "";
                break;
            case 'lastName':
                formerror.lastName = value.length > 0 && !isNaN('lastName') ? "Please Enter the Last Name" : "";
                break;
            case 'email':
                formerror.email = value.length > 0 && emailRegex.test(value) ? "Please Enter the Email Address" : "Your email is inValid";
                break;
            case 'password':
                formerror.lastName = value.length > 0 && value.length < 9 ? "Please Enter the Password Name" : "";
                break;
        }
        this.setState({ formerror, [name]: value }, () => console.log(this.State));
    }
    handleSubmit = (e) => {

        e.preventDefault();
        if (formvalid(this.state.formerror)) {

        }
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