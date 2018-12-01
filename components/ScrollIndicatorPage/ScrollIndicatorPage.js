import React, { Component } from 'react';

export default class ScrollIndicatorPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: `0%`,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }
    
    componentDidMount() {
        this.handleScroll();
    }

    handleScroll() {
        let viewHeight = window.innerHeight;
        let heightOffset = window.pageYOffset;
        let documentHeight = document.body.clientHeight;
        let percentage = (heightOffset / (documentHeight - viewHeight)) * 100;
        let width = `${Math.floor(percentage)}%`;
        this.setState({ width });
    }

    render() {
        let { width } = this.state;

        let styles = {
            width,
            bottom: 0,
            position: 'fixed',
            height: '3px',
            backgroundColor: 'rgb(252, 154, 31)',
        };

        return (
            <div onWheel={this.handleScroll}>
                {this.props.children}
                <div
                    style={styles}
                />
            </div>
        );
    }
}
