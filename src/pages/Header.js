import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import '../css/Header.css';

export default function App() {
    const [hyundai, setHyundai] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const doSearch = () => {
        let url =
            'https://62be5b370bc9b1256155ad45.mockapi.io/huyndai?name=' + searchTerm;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setSearchTerm('');
                setHyundai(data);
            });
    };


    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <Link to='/' class="navbar-brand"><img src='https://xeotogiadinh.com/wp-content/uploads/2017/05/logo-hyundai-300x281.png' width="100px" /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id='menu' class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to='products' class="nav-link">Các loại xe</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Dịch vụ
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='service' class="dropdown-item">Dịch vụ</Link>
                                <Link to='baohanh' class="dropdown-item">Bảo hành</Link>
                                <Link to='baohiem' class="dropdown-item">Bảo hiểm</Link>
                                <Link to='baoduongsuachua' class="dropdown-item">Bảo dưỡng định kỳ & sửa chữa</Link>
                                <Link to='phutungphukien' class="dropdown-item">Phụ tùng & phụ kiện</Link>
                                <Link to='chuongtrinh' class="dropdown-item">Chương trình dịch vụ</Link>
                                <Link to='trieuhoi' class="dropdown-item">Triệu hồi</Link>
                            </div>
                        </li>
                        <li class="nav-item">
                            <Link to='store' class="nav-link">Thông tin đại lý</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                Chăm sóc khách hàng
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='customercare' class="dropdown-item">Chăm sóc khách hàng</Link>
                                <Link to='tablestore' class="dropdown-item">Hỗ trợ kỹ thuật</Link>
                                <Link to='baoduongsuachua' class="dropdown-item">Bảo dưỡng định kỳ & sửa chữa</Link>                           
                            </div>
                        </li>
                        <li class="nav-item">
                            <Link to='feedback' class="nav-link">Phản hồi</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};


