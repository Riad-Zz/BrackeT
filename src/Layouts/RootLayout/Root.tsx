import Navbar from '@/Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <p>Footer</p>
        </div>
    );
};

export default Root;