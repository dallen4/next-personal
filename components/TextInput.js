// TextInput component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { writePalette } from '../styles/colors';

export default class TextInput extends Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        inputColor: PropTypes.string,
        activeInputColor: PropTypes.string,
        errorMsg: PropTypes.string,
        errorColor: PropTypes.string,
        onChange: PropTypes.func,
        validateInput: PropTypes.func,
    };

    static defaultProps = {
        label: 'input',
        inputColor: writePalette.white,
        activeInputColor: writePalette.lightBlue,
        errorMsg: 'Input length must be greater than 1',
        errorColor: 'red',
        validateInput: input => input.length > 0,
    };

    constructor(props) {
        super(props);

        this.state = {
            input: '',
            isActive: false,
            hasError: false,
        };
    }

    _onChange = event => {
        this.setState({ input: event.target.value });
        if (this.props.onChange)
            this.props.onChange(event.target.value);
    };

    _onFocus = () => {
        this.toggleIsActive(true);
        this.setState({ hasError: false });
    };

    _onBlur = () => {
        this.toggleIsActive(false);
        let { input } = this.state;
        this.setState({
            hasError: !this.props.validateInput(input)
        });
    };

    toggleIsActive = isActive => {
        this.setState({ isActive });
    };

    value = () => this.state.input;

    containsError = () => this.state.hasError;

    render() {
        let {
            label,
            inputColor,
            activeInputColor,
            errorColor
        } = this.props;

        let {
            input,
            isActive,
            hasError,
        } = this.state;

        let color = isActive ? activeInputColor : hasError ? errorColor : inputColor;
        return (
            <div style={{ display: 'block' }} >
                <p style={{
                    display: 'inline-block',
                    paddingRight: '10px',
                    color,
                    fontWeight: isActive ? 'bold' : 'normal',
                    fontSize: '1rem',
                }} >
                    {label}
                </p>
                <input
                    style={{
                        backgroundColor: 'transparent',
                        color,
                        borderBottom: `1px solid ${color}`,
                        fontSize: '0.85rem',
                        marginRight: '8px',
                    }}
                    value={input}
                    onChange={this._onChange}
                    onFocus={this._onFocus}
                    onBlur={this._onBlur}
                />
                {hasError && <p
                    style={{
                        display: 'inline-block',
                        color: 'red',
                        fontSize: '0.7rem'
                    }}
                >
                    {this.props.errorMsg}
                </p>}
            </div>
        );
    }
}
