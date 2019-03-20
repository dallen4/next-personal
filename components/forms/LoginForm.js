import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { LOGIN } from '../../lib/mutations/user';
import { styles } from './styles';
import validator from 'validator';

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
                onError={error => {console.log(error)}}
                
            >
                {(mutation, { loading, error }) => (
                    <div className='formWrapper'>

                        <h3>Login</h3>

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
                                <input type='email'
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
                            <button
                                disabled={loading || !isValidEmail}
                                className='button'
                                style={{ marginTop: '15px' }}
                                onClick={mutation}
                            >
                                {loading ? 'Loading...' : 'Login'}
                            </button>

                        </form>
                    </div>
                )}
            </Mutation>
        );
    }
}

export default LoginForm;