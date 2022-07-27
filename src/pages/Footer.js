import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div style={{ "background-color": "#000", "color": "white" }}>
                <div className="container">
                    <div className='row'>
                        <div className="col-md-2 col-sm-6">
                            <br></br>
                            <li className="menu-item-title">SẢN PHẨM</li>
                            <li className="menu-item"><Link to='products'>Xe du lịch </Link></li>
                            <li className="menu-item"><Link to='products'>Xe SUV </Link></li>
                            <li className="menu-item"><Link to='products'>Xe chuyên dụng, tải nhẹ </Link></li>
                            <li className="menu-item"><Link to='products'>Xe thương mại </Link></li>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <br></br>
                            <li className="menu-item-title">LÁI THỬ</li>
                            <li className="menu-item"><Link to='testdrive'>Đăng ký lái thử </Link></li>
                            <li className="menu-item"><Link to='products'>Chọn xe </Link></li>
                            <li className="menu-item"><Link to='service'>Thông tin dịch vụ </Link></li>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <br></br>
                            <li className="menu-item-title">DỊCH VỤ</li>
                            <li className="menu-item"><Link to='baohanh'>Bảo hành</Link></li>
                            <li className="menu-item"><Link to='baohiem'>Bảo hiểm</Link></li>
                            <li className="menu-item"><Link to='baoduongsuachua'>Bảo dưỡng</Link></li>
                            <li className="menu-item"><Link to='chuongtrinh'>Chương trình dịch vụ</Link></li>
                            <li className="menu-item"><Link to='trieuhoi'>Triệu hồi</Link></li>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <br></br>
                            <li className="menu-item-title">KHÁCH HÀNG</li>
                            <li className="menu-item"><Link to='customercare'>Chăm sóc khách hàng</Link></li>
                            <li className="menu-item"><Link to='tablestore'>Hỗ trợ kỹ thuật </Link></li>
                            <li className="menu-item"><Link to='baoduongsuachua'>Bảo dưỡng định kỳ</Link></li>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <br></br>
                            <li className="menu-item-title">SOCIAL MEDIA</li>
                            <li className="menu-item"><Link to='/'>Email: cs@hyundai.thanhcong.vn </Link></li>
                            <li className="menu-item"><Link to='/'>Hotline: 1900561212 </Link></li>
                            <li className="menu-item"> <i class="fa-brands fa-facebook"></i> <i class="fab fa-youtube"></i></li>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ "background-color": "#000", "color": "grey" }}>
                <div className="container">
                    <div className='row'>
                        <div className='menu-item'>
                            <br></br>
                            Công ty cổ phần liên doanh ô tô Hyundai Thành Công Việt Nam (HTV)<br />
                            Trụ sở chính: Khu công nghiệp Gián Khẩu, Xã Gia Trấn, Huyện Gia Viễn, Tỉnh Ninh Bình<br />
                            Văn phòng HN: Tầng 12, Tòa nhà Thành Công Tower, 79 Dịch Vọng Hậu, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội<br />
                            Văn phòng HCM: Tầng 14, Tòa nhà Vincom Center, 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh<br />
                            © Copyright 2021. All rights Reserved<br />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;