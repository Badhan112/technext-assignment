import React from 'react';

const CommentCart = ({ name, email, body }) => {
    return (
        <div class="card my-1">
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{email}</h6>
                <p class="card-text">{body}</p>
            </div>
        </div>
    );
};

export default CommentCart;