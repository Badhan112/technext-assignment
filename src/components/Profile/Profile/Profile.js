import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const Profile = () => {
    const user = useContext(UserContext);
    const { name, username, email, phone, website } = user;
    return (
        <main>
            <section className='container'>
                <h3>{name}</h3>
            </section>
        </main>
    );
};

export default Profile;