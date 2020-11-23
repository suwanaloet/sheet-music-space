import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME } from '../../utils/queries';


const PostList = ({ posts, title }) => {
    const { username: userParam } = useParams();
    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });



    if (!posts.length) {
        return <h4>Nothing here yet! {userParam ? `This user hasnt added any sheets yet.` : 'Start adding sheets below!'}</h4>
    }

    return (
        <div>
            <h3>{title}</h3>
            {posts &&
                posts.map(post => (
                    <div key={post._id} className="card mb-3 postCard">
                        <p className="postTop">Posted by:
                        <br></br>
                            <Link to={`/profile/${post.username}`}>
                                {post.username}
                            </Link>{' '}
                                on {post.createdAt}
                        </p>
                        <div className="card-body postBottom">
                            <p>{post.postText}</p>
                            <a href={post.postSheetUrl}>{post.postSheetUrl}</a>
                            <p></p>
                            <Link to={`/post/${post._id}`}>
                                <p>Click here to join the discussion</p>
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PostList