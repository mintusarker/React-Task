import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <nav>

            <div className='navbar'>
                <div>Task</div>
                <div>
                    <ul>
                        <li> <Link className='link' to='/'>Home</Link> </li>
                        <li> <Link className='link' to='/list'>Booking List</Link> </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navber;