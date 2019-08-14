import React from 'react';
import { writePalette } from '../styles/colors';

export default ({ onClick, label, disabled }) => (
    <button
        title={label}
        style={{
            width: '120px',
            padding: '10px',
            backgroundImage:
            `linear-gradient(to right, ${writePalette.lightBlue}, ${writePalette.blue})`,
            borderRadius: '5px',
            color: writePalette.white,
            fontSize: '0.8rem',
            opacity: disabled ? 0.7 : 1.0,
        }}
        className={!disabled && 'button'}
        onClick={onClick}
        disabled={disabled}
    >
        {label}
    </button>
);
