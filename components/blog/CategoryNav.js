import React from 'react';
import { LIST_TAGS } from '../../lib/queries';
import { stringToProper } from '../../lib/util';
import NavLinks from './NavLinks';
import { useQuery } from '@apollo/react-hooks';

const CategoryNav = function({ activeWhite, customStyles }) {
    const { loading, error, data, fetchMore, networkStatus } = useQuery(LIST_TAGS, {
        notifyOnNetworkStatusChange: true,
    });

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

};

CategoryNav.defaultProps = {
    customStyles: {},
};

export default CategoryNav;
