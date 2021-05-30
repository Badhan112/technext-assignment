import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CommentCart from '../CommentCart/CommentCart';

const SinglePost = () => {
    let { id } = useParams();
    const [comments, setComments] = useState([]);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [id])

    return (
        <main className='my-5'>
            <h1 className='text-center'>All Comments</h1>
            <section className='row container mx-auto'>
                {
                    comments.map(comment => <CommentCart name={comment.name} email={comment.email} body={comment.body} />)
                }
            </section>
        </main>
    );
};

export default SinglePost;