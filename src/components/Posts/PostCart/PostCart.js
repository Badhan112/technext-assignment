import React from 'react';
import { useHistory } from 'react-router';

const PostCart = ({ title, body, id }) => {
    const history = useHistory();

    return (
        <div className='col-lg-4 col-md-6 col-sm-12 p-3'>
            <div className='bg-white p-3 h-100 text-justify shadow rounded-3'>
                <h4 className='my-3'>{title}</h4>
                <p>{body}</p>
                <button onClick={() => history.push(`post/${id}`)} className="btn btn-success shadow">See Comments</button>
            </div>
        </div>
    );
};

export default PostCart;