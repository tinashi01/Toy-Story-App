import React from 'react';
import {Link} from 'react-router-dom';

function NavBar () {
    return (
        <nav className='navbar'>
            <Link to ='/'>Home</Link>
            <Link to ='/toys'>Andy's Toys</Link>
            <Link to ='/form'>List a Toy</Link>
        </nav>
    )

}

export default NavBar;