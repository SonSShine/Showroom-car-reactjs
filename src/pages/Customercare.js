import React from 'react';
import { Link } from 'react-router-dom';

export default function Customercare() {
    const clickbutton = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div class="container-fluid">
            <div class="container">
                <br />
                <h3>Giới thiệu</h3>
                <br />
                <h5>
                    Nhằm mục đích hỗ trợ Quý khách trong quá trình sử dụng xe, Hyundai
                    Thành Công Việt Nam xin được cung cấp thông tin liên hệ của Chăm sóc
                    khách hàng Hyundai Thành Công Việt Nam.
                </h5>
                <br />
                <img src="https://hyundai.thanhcong.vn/images/service/cskh-1.png"></img>
                <br />
            </div>
            <div class="container">
                <div class="box2 row">
                    <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
                        <p className="text2">
                            <Link
                                to="/"
                                style={{ textDecoration: 'none' }}
                                onClick={() => clickbutton()}
                            >
                                <h2 id="serviceword">
                                    <strong>Chương trình hội viên hyundai</strong>
                                </h2>
                            </Link>
                            <br /> <br />
                            <br />
                            <br />
                            <br />
                            <Link
                                to="/"
                                style={{ textDecoration: 'none' }}
                                onClick={() => clickbutton()}
                            >
                                <p id="serviceword">Giới thiệu chung</p>
                            </Link>
                            <Link
                                to="/"
                                style={{ textDecoration: 'none' }}
                                onClick={() => clickbutton()}
                            >
                                <p id="serviceword">Đại lý Hyundai</p>
                            </Link>
                        </p>
                    </div>{' '}
                    <div
                        class="img-hover-zoom col-xl-6 col-lg-6 col-md-6"
                        border="1px"
                        solid="#ddd"
                    >
                        <img
                            src="https://hyundai.thanhcong.vn/images/service/cskh-2.png"
                            alt="responsive webite"
                            class="img-fluid"
                            style={{ width: '100%', height: '100%', margin: '0% 0% 0% 3%' }}
                        />
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="box3 row">
                    <div
                        class="img-hover-zoom col-xl-6 col-lg-6 col-md-6"
                        border="1px"
                        solid="#ddd"
                    >
                        <img
                            src="https://hyundai.thanhcong.vn/images/service/cskh-3.png"
                            alt="responsive webite"
                            class="img1 img-fluid"
                            style={{ width: '100%', height: '100%', margin: '0% 0% 0% -3%' }}
                        />
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
                        <p className="text2">
                            <Link
                                id="serviceword"
                                to="/"
                                style={{ textDecoration: 'none' }}
                                onClick={() => clickbutton()}
                            >
                                <h2>
                                    <strong>Hướng dẫn sử dụng xe an toàn</strong>
                                </h2>
                            </Link>
                            <br /> <br />
                            <br />
                            <br />
                            <br />
                            <Link
                                id="serviceword"
                                to="/"
                                style={{ textDecoration: 'none' }}
                                onClick={() => clickbutton()}
                            >
                                <p>Xem chi tiết</p>
                            </Link>
                        </p>
                    </div>{' '}
                </div>
                <br />
                <br />
                <br />
                <p>
                    <h6>
                        <i class="fa-solid fa-location-dot"></i> <span></span> Bộ phận PTĐL
                        & CSKH Hyundai Thành Công Việt Nam, tầng 12 tòa nhà Thành Công
                        Tower, số 79 Dịch Vọng Hậu, Cầu Giấy, Hà Nội
                    </h6>
                    <br />
                    <h6>
                        <i class="fa-solid fa-phone"></i> <span></span>1900 561212 - 0243
                        795 3366
                    </h6>
                    <br />
                    <h6>
                        {' '}
                        <i class="fa-solid fa-clock-eleven-thirty"></i> <span></span> 8h00 -
                        17h00 từ thứ 2 đến thứ 6
                    </h6>
                    <br />
                    <h6>
                        <i class="fa-solid fa-inbox-in"></i>
                        <span></span>cs@hyundai.thanhcong.vn
                    </h6>
                    <br />
                    <h6>
                        <i class="fa-solid fa-globe"></i>
                        <span></span>https://hyundai.thanhcong.vn/
                    </h6>
                    <br />
                </p>
            </div>
        </div>
    );
}
