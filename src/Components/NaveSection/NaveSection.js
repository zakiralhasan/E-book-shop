import React from 'react';
import { Outlet } from 'react-router-dom';
import NaveBar from './NaveBar';

const NaveSection = () => {
    return (
        <div>
            <NaveBar></NaveBar>
            <Outlet></Outlet>
        </div>
    );
};

export default NaveSection;