import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import UserPostCard from '../UserPostCard/UserPostCard';

const Profile = () => {
    const user = useContext(UserContext);
    const { name, username, email, phone, website, id } = user;
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(res => res.json())
        .then(data => setUserPosts(data));
    }, [id])
    
    return (
        <main>
            <section className='container my-5 d-flex justify-content-center'>
                <div>
                    <h3>User Name: {username}</h3>
                    <h4>Name: {name}</h4>
                    <h5>Email: {email}</h5>
                    <h5>Phone: {phone}</h5>
                    <h5>Website: {website}</h5>
                </div>
            </section>
            <section className='container my-5 row mx-auto'>
                {
                    userPosts.map(post => <UserPostCard post={post} />)
                }
            </section>
        </main>
    );
};

export default Profile;