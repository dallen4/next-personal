import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ label, color, onClick }) {
    let backgroundColor;

    if (color === 'green') backgroundColor = 'rgb(23,171,141)';
    else if (color === 'orange') backgroundColor = 'rgb(237,56,57)';

    return (
        <button
            title={label}
            style={{
                backgroundColor,
                color: 'white',
                padding: '6px 20px 6px 20px',
                borderRadius: '5px',
            }}
            onClick={onClick}
        >
            <p>{label}</p>
        </button>
    );
}

Button.propTypes = {
    color: PropTypes.oneOf(['green', 'orange']),
};

Button.defaultProps = {
    color: 'green',
};
