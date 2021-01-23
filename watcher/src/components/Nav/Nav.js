import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {

    return (
        <>
            <nav>
                <Link to='/home'>Home </Link>
                <Link to='/settings'>Settings</Link>
                <Link to='/register'>Reg</Link>
                <Link to='/login'>Login</Link>
                <Link to='/view'>View</Link>
            </nav>
        </>
    )
}

export default Nav