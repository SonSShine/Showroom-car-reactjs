import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

export default function AdminHeader() {

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <div>
                    <Link to='/admin' class="navbar-brand">QUẢN LÝ SẢN PHẨM<br />& KHÁCH HÀNG</Link>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id='menu' class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to='/admin' class="nav-link">Quản lý xe</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/admin/caredit/:id' class="nav-link">Thêm xe mới</Link>
                        </li> <li class="nav-item active">
                            <Link to='/admin/adminuser' class="nav-link">Quản lý khách hàng</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};


