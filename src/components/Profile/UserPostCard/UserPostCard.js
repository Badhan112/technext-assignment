import React, { useState } from 'react';
import { useHistory } from 'react-router';

const UserPostCard = ({ post }) => {
    const { id, title, body } = post;
    const history = useHistory();
    const [isTransferingData, setIsTransferingData] = useState(false);

    const handleClick = () => {
        setIsTransferingData(true);
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                setIsTransferingData(false);
                alert(`${data.title} has beed deleted`);
            })
            .catch(() => {
                setIsTransferingData(false);
                alert('Failed to Delete your post');
            });
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
            <div class="card shadow h-100">
                {
                    isTransferingData
                        ? <div className='d-flex justify-content-center align-items-center h-100'>
                            <div class="spinner-border text-dark" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        : <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{body}</p>
                            <button onClick={() => history.push(`/post/${id}`)} className="btn btn-secondary me-2">See All Commants</button>
                            <button onClick={() => history.push(`/updatepost/${id}`)} className="btn btn-success me-2">Update</button>
                            <button onClick={handleClick} className="btn btn-danger">Delete</button>
                        </div>
                }
            </div>
        </div>
    );
};

export default UserPostCard;