import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ScrollIndicatorPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            interpolatedValue: `0%`,
            horizontal: true,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    static propTypes = {
        customStyles: PropTypes.object,
    };

    static defaultProps = {
        customStyles: {},
    };
    
    componentDidMount() {
        this.handleScroll();
        this.setState({
            horizontal: window.innerWidth > 800 ? true : false,
        });
    }

    handleScroll() {

        // get current offset from top of document
        let heightOffset = window.pageYOffset;

        // subtract view height from total document height
        let docViewDiff = document.body.clientHeight - window.innerHeight;

        let percentage = (heightOffset / docViewDiff * 100).toFixed(2);
        let interpolatedValue = `${percentage}%`;

        this.setState({ interpolatedValue });

    }

    render() {

        let { customStyles, } = this.props;
        let { interpolatedValue, horizontal } = this.state;

        let styles = {
            left: 0,
            bottom: 0,
            position: 'fixed',
            height: '3px',
            width: horizontal ? '3px' : '5px',
            backgroundColor: 'rgb(252, 154, 31)',
            ...customStyles,
        };

        let interpolatedField = horizontal ? 'width' : 'height';

        styles[interpolatedField] = interpolatedValue;

        return (
            <div onWheel={this.handleScroll}>
                {this.props.children}
                <div style={styles} />
            </div>
        );
    }
}
