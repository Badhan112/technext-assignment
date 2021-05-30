import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CommentCart from '../CommentCart/CommentCart';

const SinglePost = () => {
    let { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data));

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res => res.json())
            .then(data => setComments(data));
    }, [id])

    return (
        <main className='my-5'>
            <section className='container p-4'>
                <div className='shadow p-4 rounded-3'>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            </section>
            <section className='container mx-auto'>
                <h3 className='text-center'>All Comments</h3>
                {
                    comments.map(comment => <CommentCart name={comment.name} email={comment.email} body={comment.body} />)
                }
            </section>
        </main>
    );
};

export default SinglePost;