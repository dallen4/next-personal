import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import Highlight from 'react-highlight.js';

const PostBody = ({ body }) => {
    return (
        <Markdown
            options={{
                overrides: {
                    div: {
                        props: {
                            className: 'content',
                        },
                    },
                    p: {
                        props: {
                            className: 'body-text',
                        },
                    },
                    code: {
                        component: ({ children, ...props }) => {
                            if (props.className)
                                return <Highlight {...props}>{children}</Highlight>;
                            else return <code>{children}</code>;
                        },
                    },
                },
            }}
        >
            {body.replace(/[\n\r]/g, '  \n')}
        </Markdown>
    );
};

PostBody.propTypes = {
    body: PropTypes.string.isRequired,
};

export default PostBody;
