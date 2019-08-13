import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

const BlogNavLinks = ({ linkSections, renderDot, activeWhite, router, customStyles }) => {

    let activeStyles = {
        color: 'rgb(237,56,57)',
        borderBottom: '2px solid rgb(237,56,57)',
    };

    if (activeWhite)
        activeStyles = {
            color: 'white',
            borderBottom: 0,
        };

    const links = linkSections.map((section, sectionIndex) => (
        <ul key={sectionIndex} style={customStyles} >
            <style jsx>{`
                ul {
                    display: flex;
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    width: 100%;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                }

                li {
                    padding: ${Object.keys(customStyles).length > 0 ? '10px' : '0'} 15px;
                    display: block;
                    color: rgb(129,129,129);
                }

                a {
                    color: inherit;
                    text-decoration: none;
                    padding: 0 6px 3px 6px;
                }

                a.active, li a:hover {
                    color: ${activeStyles.color};
                    border-bottom: ${activeStyles.borderBottom};
                }

            `}</style>
            {(sectionIndex > 0 || renderDot) && (
                <li>&bull;</li>
            )}
            {section.map(({ label, to }) => (
                <li key={to} >
                    <Link href={to} prefetch >
                        <a
                            className={to === router.asPath && 'active'}
                        >
                            {label}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    ));

    return links;
};

BlogNavLinks.defaultProps = {
    customStyles: {},
};

export default withRouter(BlogNavLinks);
