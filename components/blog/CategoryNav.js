import React from 'react';
import { Query } from 'react-apollo';
import { LIST_TAGS } from '../../lib/queries';
import { stringToProper } from '../../lib/util';
import NavLinks from './NavLinks';

const CategoryNav = ({ activeWhite }) => {
    return (
        <Query
            query={LIST_TAGS}
        >
            {({ data }) => {
                if (!data) return null;

                let links = data.tags.map(({ name}) => ({
                    label: stringToProper(name),
                    to: `/blog/${name}`,
                }));

                links.unshift({
                    label: 'All',
                    to: '/blog',
                })

                return (
                <NavLinks
                    activeWhite={activeWhite}
                    linkSections={[links]}
                />
                );
            }}
        </Query>
    );
};

export default CategoryNav;
