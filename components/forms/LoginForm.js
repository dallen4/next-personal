import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import { Mutation } from 'react-apollo';
import Button from '../Button';
import TextInput from '../TextInput';
import { writePalette } from '../../styles/colors';
import { LOGIN } from '../../lib/mutations/user';
import { styles } from './styles';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            isValidEmail: true,
            password: '',
            error: '',
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    static propTypes = {
        onAuthComplete: PropTypes.func.isRequired,
    };

    handleEmail = (email) => this.setState({ email });

    validateEmail = email => {
        let isValidEmail = validator.isEmail(email);
        this.setState({ isValidEmail });
        return isValidEmail;
    };

    handlePassword = password => this.setState({ password });

    render() {

        let { email, isValidEmail, password } = this.state;

        return (
            <Mutation
                mutation={LOGIN}
                variables={{
                    email,
                    password,
                }}
                onCompleted={data => this.props.onAuthComplete(data.login)}
                onError={error => console.error(error)}
                
            >
                {(mutation, { loading, error }) => (
                    <div
                        style={{
                            marginTop: '90px',
                            padding: '35px',
                            paddingLeft: '50px',
                            paddingRight: '50px',
                            borderRadius: '5px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            height: '240px',
                            width: '340px',
                            backgroundColor: writePalette.green,
                        }}
                    >

                        <h3 style={{ color: writePalette.white }} >Login</h3>

                        <p style={{ color: 'red', fontSize: '0.9rem' }} >
                            {error && error.message.replace('GraphQL error: ', '')}
                        </p>

                        <TextInput
                            ref={ref => this.emailInput = ref}
                            label={'email'}
                            onChange={this.handleEmail}
                            validateInput={this.validateEmail}
                            errorMsg={'invalid email provided'}
                        />

                        <TextInput
                            ref={ref => this.passwordInput = ref}
                            label={'password'}
                            onChange={this.handlePassword}
                            errorMsg={'password cannot be empty'}
                        />

                        <Button
                            label={loading ? 'Loading...' : 'Login'}
                            onClick={mutation}
                            disabled={loading || !isValidEmail}
                        />
                    </div>
                )}
            </Mutation>
        );
    }
}

export default LoginForm;