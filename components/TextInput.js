// TextEditor component
import React, { Component } from 'react';
import { writePalette } from '../styles/colors';

export default class TextEditor extends Component {

    static propTypes = {};

    static defaultProps = {
        label: 'input',
        inputColor: writePalette.white,
        activeInputColor: writePalette.lightBlue,
        errorColor: 'red',
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
    };

    _onFocus = () => {
        this.toggleIsActive(true);
        this.setState({ hasError: false });
    };

    _onBlur = () => {
        this.toggleIsActive(false);
        if (this.state.input.length === 0)
            this.setState({ hasError: true });
    };

    toggleIsActive = isActive => {
        this.setState({ isActive });
    };

    value = () => this.state.input;

    render() {
        let {
            label,
            inputColor,
            activeInputColor,
            errorColor
        } = this.props;
        let { isActive, hasError } = this.state;

        let color = isActive ? activeInputColor : hasError ? errorColor : inputColor;
        return (
            <div>
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
                        fontSize: '0.85rem'
                    }}
                    value={this.state.input}
                    onChange={this._onChange}
                    onFocus={this._onFocus}
                    onBlur={this._onBlur}
                />
                {hasError && <p
                    style={{
                        paddingLeft: '8px',
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
