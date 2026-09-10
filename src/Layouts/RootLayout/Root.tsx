import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <p>Header</p>
            <Outlet></Outlet>
            <p>Footer</p>
        </div>
    );
};

export default Root;