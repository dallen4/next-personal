import React from 'react'
import PropTypes from 'prop-types'

const ImageCaption = ({ text }) => (
    <p
        style={{
            fontStyle: 'italic',
        }}
    >{text}</p>
)

ImageCaption.propTypes = {
    text: PropTypes.string.isRequired,
}

export default ImageCaption;
