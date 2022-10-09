import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';

const NaveBar = () => {
    return (
        <div className='bg-black flex justify-around px-8 py-6'>
            <div className='flex justify-start items-center w-full'>
                <FontAwesomeIcon className='text-white text-4xl' icon={faBook}></FontAwesomeIcon>
                <h1 className=' text-4xl text-white ml-2'>E-library</h1>
            </div>
            <nav className='flex text-white'>
            <Link to='/home' className='mr-4'>Home</Link>
            <Link to='/review' className='mr-4'>Review</Link>
            <Link to='/about' className='mr-4'>About</Link>
            <Link to='/login' className='mr-4'>Login</Link>
            </nav>
        </div>
    );
};

export default NaveBar;