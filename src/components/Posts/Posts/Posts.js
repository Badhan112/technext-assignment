import React, { useEffect, useState } from 'react';
import PostCart from '../PostCart/PostCart';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [visiblePost, setVisiblePost] = useState(10);
    const [newPost, setNewPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    const increaseVisiblePost = () => {
        setVisiblePost(visiblePost + 10);
    }

    const handleBlur = event => {
        
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <main className='bg-grey py-5'>
            <section className='bg-darkGrey p-3 rounded-3 container row mx-auto justify-content-center'>
                <div className="col-lg-7 col-md-10 col-sm-12">
                    <h3>Create New Post</h3>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input type="text" onBlur={handleBlur} name='title' class="form-control" id="title" />
                        </div>
                        <div class="mb-3">
                            <label for="body" class="form-label">Body</label>
                            <textarea name='body' onBlur={handleBlur} class="form-control" id="body" rows="5"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Post</button>
                    </form>
                </div>
            </section>

            <section className='container row mx-auto my-5'>
                {
                    posts.slice(0, visiblePost).map(post => <PostCart title={post.title} body={post.body} id={post.id} key={post.id} />)
                }
                <div className="col-12 d-flex">
                    <button onClick={increaseVisiblePost} className="btn btn-secondary mx-auto">Load More</button>
                </div>
            </section>
        </main>
    );
};

export default Posts;