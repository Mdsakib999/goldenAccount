import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

const AdminDashbordLayout = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="flex h-fit">
            <Sidebar open={open} setOpen={setOpen} />
            <div className={`flex-grow overflow-hidden p-6 bg-gray-100  transition-all duration-300 ${open ? ' md:ml-72' : ' ml-16 md:ml-20'} sm:ml-20 lg:${open ? 'ml-72' : 'ml-20'}`}>
                <div className=''>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminDashbordLayout;