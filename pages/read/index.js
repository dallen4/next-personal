import React, { Component } from 'react';
import Link from 'next/link';
import { Query } from 'react-apollo';
import { LIST_POSTS } from '../../lib/queries';
import { writePalette } from '../../styles/colors';

export default class Read extends Component {
    static async getInitialProps({ query }) {
        console.log(query);
        return { slug: query.slug };
    }

    renderContent() {
        if (this.props.slug)
            return (
                <div>
                    <h1 style={{ color: writePalette.lightBlue }} >{this.props.slug}</h1>
                    <style jsx>{`
                        p {
                            padding-bottom: 1rem;
                        }
                    `}</style>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </div>
            );
        else
            return (
                <div>
                    <h1 style={{ margin: 0, padding: 0 }} >Read</h1>
                    <h4 style={{ margin: 0, padding: 0 }} >all posts</h4>
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
                                        {data.listPosts.length > 0 ? (
                                            <p>posts</p>
                                        ) : (
                                            <p>No posts yet, check back soon.</p>
                                        )}
                                    </div>
                                );
                        }}
                    </Query>
                </div>
            );
    }

    render() {
        return (
            <div style={{ margin: 0, padding: 0 }} >
                <style global jsx>{`
                    body {
                        background: ${writePalette.green};
                    }

                    h1, h4, p {
                        color: ${writePalette.white};
                    }
                `}</style>
                <Link  href='/' ><a style={{ color: writePalette.blue }} >go home</a></Link>
                {this.renderContent()}
            </div>
        );
    }
}
