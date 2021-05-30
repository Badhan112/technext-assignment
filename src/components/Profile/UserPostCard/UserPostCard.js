import React from 'react';
import { useHistory } from 'react-router';

const UserPostCard = ({ post }) => {
    const { id, title, body } = post;
    const history = useHistory();
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
            <div class="card shadow h-100">
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{body}</p>
                    <button onClick={() => history.push(`/post/${id}`)} className="btn btn-secondary me-2">See All Commants</button>
                    <button className="btn btn-success me-2">Update</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default UserPostCard;