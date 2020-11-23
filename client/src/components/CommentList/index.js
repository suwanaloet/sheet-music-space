import React from 'react';
import { Link } from 'react-router-dom';

const CommentList = ({ comments }) => {
    return (
        <div className="card mb-3">
            <div className="card-header">
                <span className="text-light">Comments:</span>
            </div>
            <div className="card-body commentTop">
                {comments &&
                    comments.map(comment => (
                        <p className="pill mb-3 commentBottom" key={comment._id}>
                            <div className="commentText">
                                {comment.commentText}
                            </div> {'by: '}
                            <Link to={`/profile/${comment.username}`} style={{ fontWeight: 500 }}>
                                {comment.username}
                            </Link>
                            <br></br>
                            on {comment.createdAt}
                        </p>
                    ))}
            </div>
        </div>
    );
};

export default CommentList