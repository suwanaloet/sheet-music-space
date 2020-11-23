import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT } from '../../utils/mutations';

const CommentForm = ({ postId }) => {

    const [commentText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleChange = event => {
        if (event.target.value.length <= 500) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    }

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addComment({
                variables: {
                    commentText,
                    postId
                }
            });
            setText('');
            setCharacterCount(0);
        }
        catch (error) {
            console.error(error)
        }
    };

    return (
        <div>
            <p className={`m-0 ${characterCount === 500 || error ? 'text-error' : ''}`}>
                Character Count: {characterCount}/500
                {error && <span className="ml-2">Oops!...Looks like we hit a wrong note</span>}
            </p>

            <form
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Comment on this piece!"
                    value={commentText}
                    className="form-input col-12 formBoundaries"
                    onChange={handleChange}
                >
                </textarea>

                <button
                    className="commentButton" type='submit'
                >
                    Add Comment!
                </button>
                <br>
                </br>
            </form>
        </div>
    );
};

export default CommentForm;