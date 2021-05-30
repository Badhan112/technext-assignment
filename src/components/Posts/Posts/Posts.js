import React, { useEffect, useState } from 'react';
import PostCart from '../PostCart/PostCart';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [visiblePost, setVisiblePost] = useState(10);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    const increaseVisiblePost = () => {
        setVisiblePost(visiblePost + 10);
    }

    return (
        <main className='bg-grey py-5'>
            <section className='container row mx-auto'>
                {
                    posts.slice(0, visiblePost).map(post => <PostCart title={post.title} body={post.body} id={post.id} />)
                }
                <div className="col-12 d-flex">
                    <button onClick={increaseVisiblePost} className="btn btn-secondary mx-auto">Load More</button>
                </div>
            </section>
        </main>
    );
};

export default Posts;