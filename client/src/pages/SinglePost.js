import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POST } from '../utils/queries';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import Auth from '../utils/auth';


const SinglePost = props => {
    const { id: postId } = useParams();

    const { loading, data } = useQuery(QUERY_POST, {
        variables: { id: postId }
    });

    const post = data?.post || {};

    if (loading) {
        return <div>Loading, please wait.</div>;
    }


    return (
        <div>
            <div className="card mb-3">
                <p className="card-header commentTop">
                    {'Posted by '}
                    <span style={{ fontWeight: 500 }}>
                        {post.username}
                    </span>{' '}
                     on: {post.createdAt}
                </p>
                <div className="card-body commentBottom">
                    <p>{post.postText}</p>
                </div>
            </div>

            <CommentList comments={post.comments} />

            {Auth.loggedIn() && <CommentForm postId={post._id} />}
        </div>
    );
};

export default SinglePost;
