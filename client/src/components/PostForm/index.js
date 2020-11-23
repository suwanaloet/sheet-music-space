import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';
import 'bootstrap/dist/css/bootstrap.min.css';

const PostForm = () => {
    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            try {
                const { posts } = cache.readQuery({ query: QUERY_POSTS });
                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: { posts: [addPost, ...posts] }
                });
            } catch (e) {
                console.error(e);
            }
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, posts: [...me.posts, addPost] } }
            });
        }
    });
    const [postText, setText] = useState('');
    const [postSheetUrl, setSheetUrl] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const handleTextChange = event => {
        if (event.target.value.length <= 500) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };
    const handleSheetChange = event => {
        if (event.target.value.length <= 500) {
            setSheetUrl(event.target.value)
        }
    };
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addPost({
                variables: {
                    postText,
                    postSheetUrl
                }
            });

            // clear form values
            setText('');
            setSheetUrl('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="flex-row justify-center justify-space-between-md align-stretch">
            <h2>Make a new entry!</h2>
            <p className={`m-0 ${characterCount === 500 || error ? 'text-error' : ''}`}>
                Character Count: {characterCount}/500
                <br></br>
                 {error && <h6 className="ml-2 text-danger">Oops!...Looks like we hit a wrong note. Check to make sure that the description and link fields aren't empty before posting.</h6>}
            </p>
            <form
                
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="Add a description!"
                    value={postText}
                    className="form-input col-12 col-md-9"
                    onChange={handleTextChange}
                >
                </textarea>

                <textarea
                    placeholder="Add the url! (public web, google drive, image link)"
                    value={postSheetUrl}
                    className="form-input col-12 col-md-9"
                    onChange={handleSheetChange}
                >

                </textarea>
                <br></br>
                <button className="button postButton" type="submit">
                    Submit!
                </button>
            </form>
        </div>
    );
};

export default PostForm;