import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const NavBar = () => {
    const user = useContext(UserContext);
    return (
        <nav class="navbar navbar-expand-md navbar-light bg-light shadow">
            <div class="container">
                <Link class="navbar-brand" to='/'><h1>Technext Community</h1></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/posts' class="nav-link ms-4" aria-current="page" ><h3>Posts</h3></Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/users' class="nav-link ms-4" ><h3>Users</h3></Link>
                        </li>
                        {
                            user &&
                            <li class="nav-item">
                                <Link to='/profile' class="nav-link ms-4 shadow rounded-3" ><h3>{user.username}</h3></Link>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;