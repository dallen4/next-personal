import React from 'react';
import { Query } from 'react-apollo';
import { LIST_TAGS } from '../../lib/queries';
import { stringToProper } from '../../lib/util';
import NavLinks from './NavLinks';

const CategoryNav = ({ activeWhite, customStyles }) => {
    return (
        <Query
            query={LIST_TAGS}
        >
            {({ data, error }) => {
                let links = [
                    {
                        label: 'All',
                        to: '/blog',
                    }
                ];

                if (data && data.tags !== undefined)
                    links.push(...data.tags.map(({ name }) => ({
                        label: stringToProper(name),
                        to: `/blog/${name}`,
                    })));

                return (
                <NavLinks
                    activeWhite={activeWhite}
                    linkSections={[links]}
                    customStyles={customStyles}
                />
                );
            }}
        </Query>
    );
};

CategoryNav.defaultProps = {
    customStyles: {},
};

export default CategoryNav;
