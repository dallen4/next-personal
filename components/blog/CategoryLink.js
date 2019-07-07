import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { stringToProper } from '../../lib/util';
import { FaDesktop, FaNewspaper } from 'react-icons/fa';
import { FiHeadphones } from 'react-icons/fi';

function CategoryLink({ category }) {

    let color = 'rgb(237,56,57)';

    let iconData = {
        color,
        size: 12,
        style: {
            marginBottom: '3px',
        },
    };

    let link = (
        <FaNewspaper
            {...iconData}
        />
    );

    switch (category) {
        case 'technology':
            link = (
                <FaDesktop
                    {...iconData}
                />
            );
            break;
        case 'music':
            link = (
                <FiHeadphones
                    {...iconData}
                />
            );
            break;
    }

    return (
        <Link>
            <a
                style={{
                    cursor: 'pointer',
                    display: 'inline-flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color,
                }}
            >
                <p
                    style={{
                        textDecoration: 'underline',
                        paddingRight: '5px',
                    }}
                >
                    {stringToProper(category)}
                </p>
                <span
                    style={{
                        height: '12px',
                        padding: '2px',
                        borderRadius: '8px',
                        backgroundColor: 'white',
                    }}
                >
                    {link}
                </span>
            </a>
        </Link>
    );
}

CategoryLink.propTypes = {
    category: PropTypes.string.isRequired,
};

export default CategoryLink;
