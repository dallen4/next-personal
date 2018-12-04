import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

// based off:
// https://medium.com/@pppped/how-to-code-a-responsive-circular-percentage-chart-with-svg-and-css-3632f8cd7705
const CircleGraph = ({ size, percentage, barColor, animate }) => (
    <div style={{ height: size, width: size }}>
        <svg viewBox="0 0 36 36">
            <path
                fill="none"
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                stroke="rgba(150,150,150,0.5)"
                strokeWidth="3.8"
            />
            <path
                className={animate ? "circle-graph" : ""}
                d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={barColor}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={`${percentage},100`}
            />
            <text x="18" y="20.35" className="percentage">
                {percentage}%
            </text>
        </svg>
    </div>
);

CircleGraph.propTypes = {
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    percentage: PropTypes.number,
    barColor: PropTypes.string,
    animate: PropTypes.bool,
};

CircleGraph.defaultProps = {
    size: '100px',
    percentage: 50,
    barColor: 'red',
    animate: false,
};

export default CircleGraph;
