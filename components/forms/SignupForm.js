import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { SIGNUP } from '../../lib/api/mutation';
import validator from 'validator';
import { writePalette } from '../../styles/colors';

class SignupForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            isValidEmail: true,
            password: '',
            confirm: '',
            passwordsMatch: true,
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.checkPasswordMatch = this.checkPasswordMatch.bind(this);

    }

    static propTypes = {
        onAuthComplete: PropTypes.func.isRequired,
        switchToLogin: PropTypes.func.isRequired,
    };

    handleEmail(event) {
        this.setState({ email: event.target.value });
    }

    validateEmail() {
        let { email } = this.state;
        let isEmail = validator.isEmail(email);
        let isValid = email.endsWith('@the-allen-group.com');
        this.setState({ isValidEmail: isEmail && isValid });
    }

    handlePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleConfirm(event) {
        this.setState({ confirm: event.target.value });
    }

    checkPasswordMatch() {
        let { password, confirm } = this.state;
        this.setState({ passwordsMatch: password === confirm });
    }

    render() {

        let { email, isValidEmail, password, confirm, passwordsMatch } = this.state;
        let canSignUp = isValidEmail && passwordsMatch;

        return (
            <Mutation
                mutation={SIGNUP}
                variables={{
                    email,
                    password,
                    role: 'user'
                }}
                onCompleted={data => this.props.onAuthComplete(data.signup)}
                onError={error => {}}
                
            >
                {(mutation, { data, loading, error }) => (
                    <div className='formWrapper'>

                        <h3>Signup</h3>

                        {error && (
                            <p>
                                {error.message.replace('GraphQL error: ', '')}
                            </p>
                        )}
        
                        <form
                            onSubmit={event => {
                                event.preventDefault();
                                mutation();
                            }}
                        >
        
                            <label style={{
                                width:'100px',
                                clear:'left',
                                textAlign:'right',
                                paddingRight:'10px',
                                float: 'left',
                            }} >
                                Email
                            </label>
                                <input type='text'
                                    required
                                    placeholder='Email'
                                    name='email'
                                    autoComplete='off'
                                    value={email}
                                    onChange={this.handleEmail}
                                    onBlur={this.validateEmail} />
                            {!isValidEmail && (
                                <p>Invalid email provided</p>
                            )}
                            <br />
                            <label style={{
                                width:'100px',
                                clear:'left',
                                textAlign:'right',
                                paddingRight:'10px',
                                float: 'left',
                            }} >
                                Password
                            </label>
                                <input type='password'
                                    required
                                    placeholder='Password'
                                    name='pwd'
                                    autoComplete='off'
                                    value={password}
                                    onChange={this.handlePassword} />
                            <br />
                            <label style={{
                                width:'100px',
                                clear:'left',
                                textAlign:'right',
                                paddingRight:'10px',
                                float: 'left',
                            }} >
                                Confirm
                            </label>
                                <input type='password'
                                    required
                                    placeholder='Confirm Password'
                                    name='pwd'
                                    autoComplete='off'
                                    value={confirm}
                                    onChange={this.handleConfirm}
                                    onBlur={this.checkPasswordMatch} />
                            {!passwordsMatch && (
                                <p>Passwords must match</p>
                            )}
                            <br />
                            <button
                                title={'signup'}
                                disabled={loading || !canSignUp}
                                className='button'
                                style={{ marginTop: '15px' }}
                                onClick={mutation}
                            >
                                {loading ? 'Loading...' : 'Signup'}
                            </button>
        
                        </form>

                        <p style={{ textAlign: 'center' }} >
                            Already a user?{' '}
                            <span
                                className='button'
                                style={{ color: writePalette.blue }}
                                onClick={this.props.switchToLogin}
                            >
                                Login.
                            </span>
                        </p>
                    </div>
                )}
            </Mutation>
        );
    }
}

export default SignupForm;