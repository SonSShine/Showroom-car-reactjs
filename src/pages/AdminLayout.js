import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import AdminHeader from './AdminHeader';
import Footer from './Footer';

const AdminLayout = () => {
    return (
    <>
        <AdminHeader />
        <Outlet />
        {/* <Footer /> */}
    </>
    );
};


export default AdminLayout;