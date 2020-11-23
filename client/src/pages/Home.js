import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS } from '../utils/queries';

import Auth from '../utils/auth';
import PostForm from '../components/PostForm'
import PostList from '../components/PostList';

const Home = () => {
    const { loading, data } = useQuery(QUERY_POSTS);
    const posts = data?.posts || [];
    const loggedIn = Auth.loggedIn();
    console.log(posts);

    return (
        <main>
            <div className="flex-row justify-space-between">
                {loggedIn && (
                    <div className="col-12 mb-3">
                        <PostForm />
                    </div>
                )}
                <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                            <PostList posts={posts} title="Sheets recently shared:" className="postListContainer" />
                        )}
                </div>
            </div>
        </main>
    );
};

export default Home;