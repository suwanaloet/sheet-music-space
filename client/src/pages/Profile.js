import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import PostList from '../components/PostList';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import PostForm from '../components/PostForm';
import { capitalizeFirstLetter } from '../utils/helpers';


const Profile = () => {
    const { username: userParam } = useParams();
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });
    const user = data?.me || data?.user || {};

    // redirect to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to="/profile" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
            <h4>
                This page is for registered users only! Please sign up or log in.
            </h4>
        );
    }

    return (
        <div>
            <div className="flex-row mb-3">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                    Viewing {userParam ? `${user.username}'s` : 'your'} sheets:
                </h2>
            </div>
            <div className="mb-3">{!userParam && <PostForm />}</div>
            <div className="flex-row justify-space-between mb-3">
                <div className="col-12 mb-3 col-lg-8">
                    <PostList posts={user.posts} title={userParam ? capitalizeFirstLetter(`${user.username}'s sheets:`) : 'Your sheets:'}>
                    </PostList>
                </div>
            </div>

        </div>
    );
};

export default Profile;
