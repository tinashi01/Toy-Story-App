import React from 'react';
import {Link} from 'react-router-dom';

export default function ViewDetails({id}) {
    return (
        <Link to={`http://localhost:3000/toys/${id}`}>
            <button className="see-more">View Details</button>
        </Link>
    )
}