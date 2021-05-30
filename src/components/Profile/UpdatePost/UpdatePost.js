import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const UpdatePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [updatedPost, setUpdatedPost] = useState({});
    const [isFetchData, setIsFetchData] = useState(false);
    const history = useHistory();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [id])

    const handleBlur = event => {
        const newPost = { ...updatedPost };
        newPost[event.target.name] = event.target.value;
        setUpdatedPost(newPost);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setIsFetchData(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedPost),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                setIsFetchData(false);
                alert(`${data.title} has been Updated`);
                history.push('/profile');
            })
            .catch(() => {
                alert('Failed to Update');
                setIsFetchData(false);
            })
    }

    return (
        <main className='my-5'>
            <section className='container row mx-auto justify-content-center'>
                <div className="col-lg-6 col-md-9 col-sm-12">
                    {
                        isFetchData
                            ? <div className='d-flex justify-content-center align-items-center h-100'>
                                <div class="spinner-border text-dark" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            : <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="title" class="form-label">Title</label>
                                    <input type="text" onBlur={handleBlur} name='title' defaultValue={post.title} class="form-control" id="title" />
                                </div>
                                <div class="mb-3">
                                    <label for="body" class="form-label">Body</label>
                                    <textarea name='body' onBlur={handleBlur} defaultValue={post.body} class="form-control" id="body" rows="5"></textarea>
                                </div>

                                <button type="submit" class="btn btn-primary">Update</button>
                            </form>
                    }

                </div>
            </section>
        </main>
    );
};

export default UpdatePost;