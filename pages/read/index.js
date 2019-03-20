import React, { Component } from 'react';
import Link from 'next/link';
import { Query } from 'react-apollo';
import { LIST_POSTS } from '../../lib/queries';

export default class Read extends Component {
    static async getInitialProps({ query }) {
        console.log(query);
        return { slug: query.slug };
    }

    renderContent() {
        if (this.props.slug)
            return (
                <p>{this.props.slug}</p>
            );
        else
            return (
                <Query
                    query={LIST_POSTS}
                >
                    {({ data, loading, error, networkStatus }) => {
                        if (loading || networkStatus === 4)
                            return <p>loading...</p>;
                        else if (error)
                            return <p>Error fetching posts</p>
                        else
                            return (
                                <div>
                                    <p>posts</p>
                                    <div>
                                        {data.listPosts.length > 0 ? (
                                            <p>posts</p>
                                        ) : (
                                            <p>No posts yet, check back soon.</p>
                                        )}
                                    </div>
                                </div>
                            );
                    }}
                </Query>
            );
    }

    render() {
        return (
            <div style={{ margin: 0, padding: 0, height: '100%', wdith: '100%', backgroundColor: 'red' }} >
                <h1 style={{ margin: 0, padding: 0 }} >Read {this.props.slug}</h1>
                <Link  href='/' ><a>go home</a></Link>
                {this.renderContent()}
            </div>
        );
    }
}
