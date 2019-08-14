import React from 'react'
import PropTypes from 'prop-types'

const ImageCaption = ({ text }) => (
    <p
        style={{
            fontStyle: 'italic',
            opacity: 0.75,
            fontSize: '0.9rem',
        }}
    >{text}</p>
)

ImageCaption.propTypes = {
    text: PropTypes.string.isRequired,
}

export default ImageCaption;
