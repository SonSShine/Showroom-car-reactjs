import React from 'react';
import '../css/styles.css';
import { Link } from 'react-router-dom';

function Service() {
  const clickbutton = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div class="container-fluid">
      <div>
        <img
          src="https://hyundai.thanhcong.vn/images/technical-service/home.png"
          alt=""
          style={{ width: '100%' }}
        ></img>
        <p className="myCarousel">
          <h1>
            Before Service đặc
            <br /> trưng của Hyundai
          </h1>
          <h5>
            Hyundai đang cung cấp nhiều chương trình dịch vụ khác nhau,
            <br /> đem lại trải nghiệm tốt, sự hài lòng cho khách hàng
          </h5>
        </p>
        <div class="container">
          <div class="box1 row">
            <div
              class="img-hover-zoom col-md-6 col-sm-4"
              border="1px"
              solid="#ddd"
            >
              <img
                src="https://hyundai.thanhcong.vn/images/technical-service/home1.png"
                alt="responsive webite"
                class="img-fluid"
                style={{ width: '100%', height: '100%', marginLeft: '-3%'}}
              />
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
              <p className="text1">
                <Link
                  to="/baohanh"
                  style={{ textDecoration: 'none' }}
                  onClick={() => clickbutton()}
                >
                  <p>
                    <h2>
                      <strong>Bảo hành</strong>
                    </h2>
                  </p>
                </Link>
                <br /> <br />
                <br />
                <br />
                <br />
                <Link
                  to="/baohanh"
                  style={{ textDecoration: 'none' }}
                  onClick={() => clickbutton()}
                >
                  <p>
                    <strong>Chính sách bảo hành</strong>
                  </p>
                </Link>
                <p></p>
                <Link
                  to="/baohanh"
                  style={{ textDecoration: 'none' }}
                  onClick={() => clickbutton()}
                >
                  <p>
                    <strong>Bảo hành điện tử</strong>
                  </p>
                </Link>
              </p>
            </div>{' '}
          </div>
        </div>

        <div class="container">
          <div class="box2 row">
            <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
              <p className="text2">
                <Link to="/baoduongsuachua" style={{ textDecoration: 'none' }}>
                  <h2 id="serviceword">
                    <strong>Bảo dưỡng định kì & sửa chữa</strong>
                  </h2>
                </Link>
                <br /> <br />
                <br />
                <br />
                <br />
                <Link to="/baoduongsuachua" style={{ textDecoration: 'none' }}>
                  <p id="serviceword">Bảo dưỡng định kì</p>
                </Link>
                <Link to="/baoduongsuachua" style={{ textDecoration: 'none' }}>
                  <p id="serviceword">Sửa chữa chung & đồng sơn </p>
                </Link>
              </p>
            </div>{' '}
            <div
              class="img-hover-zoom col-md-6 col-sm-4"
              border="1px"
              solid="#ddd"
            >
              <img
                src="https://hyundai.thanhcong.vn/images/technical-service/home2.png"
                alt="responsive webite"
                class="img-fluid"
                style={{ width: '100%' ,  height: '100%', margin: '0% 0% 0% 3%'}}
              />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="box3 row">
            <div
              class="img-hover-zoom col-md-6 col-sm-4"
              border="1px"
              solid="#ddd"
            >
              <img
                src="https://hyundai.thanhcong.vn/images/technical-service/home3.png"
                alt="responsive webite"
                class="img1 img-fluid"
                style={{ width: '100%' , height: '100%',margin: '0% 0% 0% -3%'}}
              />
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
              <p className="text2">
                <Link
                  id="serviceword"
                  to="/phutungphukien"
                  style={{ textDecoration: 'none' }}
                >
                  <h2>
                    <strong>Phụ tùng & phụ kiện chính hãng</strong>
                  </h2>
                </Link>
                <br /> <br />
                <br />
                <br />
                <br />
                <Link
                  id="serviceword"
                  to="/phutungphukien"
                  style={{ textDecoration: 'none' }}
                >
                  <p>Phụ tùng chính hãng</p>
                </Link>
                <Link
                  id="serviceword"
                  to="/phutungphukien"
                  style={{ textDecoration: 'none' }}
                >
                  <p>Phụ kiện chính hãng</p>
                </Link>
              </p>
            </div>{' '}
          </div>
        </div>

        <div class="container">
          <div class="box1 row">
            <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
              <p className="text1">
                <Link
                  to="/chuongtrinh"
                  style={{ textDecoration: 'none' }}
                >
                  <h2>
                    <strong>Chương trình dịch vụ</strong>
                  </h2>
                </Link>
                <br /> <br />
                <br />
                <br />
                <br />
                <Link
                  to="/chuongtrinh"
                  style={{ textDecoration: 'none' }}
                >
                  <p> Chương trình khuyến mại Dịch vụ</p>
                </Link>
                <Link
                  to="/chuongtrinh"
                  style={{ textDecoration: 'none' }}
                >
                  <p>Chương trình hỗ trợ thiên tai, bão lũ</p>
                </Link>
              </p>
            </div>{' '}
            <div
              class="img-hover-zoom col-md-6 col-sm-4"
              border="1px"
              solid="#ddd"
            >
              <img
                src="https://hyundai.thanhcong.vn/images/technical-service/home4.png"
                alt="responsive webite"
                class="img1 img-fluid"
                style={{ width: '100%' ,  height: '100%', margin: '0% 0% 0% 3%' }}
              />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="box2 row">
            <div
              class="img-hover-zoom col-md-6 col-sm-4"
              border="1px"
              solid="#ddd"
            >
              <img
                src="https://hyundai.thanhcong.vn/images/technical-service/home5.png"
                alt="responsive webite"
                class="img1 img-fluid"
                style={{ width: '100%' ,  height: '100%', margin: '0% 0% 0% -3%'}}
              />
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
              <p className="text2">
                <Link
                  id="serviceword"
                  to="/trieuhoi"
                  style={{ textDecoration: 'none' }}
                  onClick={() => clickbutton()}
                >
                  <h2>
                    <strong>Triệu hồi </strong>
                  </h2>{' '}
                </Link>
                <br /> <br />
                <br />
                <br />
                <br />
                <Link
                  id="serviceword"
                  to="/trieuhoi"
                  style={{ textDecoration: 'none' }}
                  onClick={() => clickbutton()}
                >
                  <p>Trách nhiệm của HTV </p>
                </Link>
                <Link
                  id="serviceword"
                  to="/baohiem"
                  style={{ textDecoration: 'none' }}
                  onClick={() => clickbutton()}
                >
                  <p>Trách nhiệm của đại lý </p>
                </Link>
              </p>
            </div>{' '}
          </div>
        </div>
        <div class="container">
          <div class="box3 row">
          <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
              <p className="text2">
                <Link
                  id="serviceword"
                  to="/baohiem"
                  style={{ textDecoration: 'none' }}
                  onClick={() => clickbutton()}
                >
                  <h2>
                    <strong>Bảo hiểm liên kết</strong>
                  </h2>
                </Link>
                <br /> <br />
                <br />
                <br />
                <br />
                <Link
                  id="serviceword"
                  to="/baohiem"
                  style={{ textDecoration: 'none' }}
                  onClick={() => clickbutton()}
                >
                  {' '}
                  <p>Xem chi tiết</p>
                </Link>
              </p>
            </div>{' '}
            <div
              class="img-hover-zoom col-md-6 col-sm-4"
              border="1px"
              solid="#ddd"
            >
              <img
                src="https://hyundai.thanhcong.vn/images/technical-service/home6.png"
                alt="responsive webite"
                class="img1 img-fluid"
                style={{ width: '100%', height: '100%', margin: '0% 0% 0% 3%' }}
              />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="box4 row">
            <div
              class="img-hover-zoom col-md-6 col-sm-4"
              border="1px"
              solid="#ddd"
            >
              <img
                src="https://hyundai.thanhcong.vn/images/technical-service/home7.png"
                alt="responsive webite"
                class="img1 img-fluid"
                style={{ width: '100%' , height: '100%', margin: '0% 0% 0% -3%'}}
              />
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
              <p className="text1">
                <Link
                  to="/giaonhanxe"
                  style={{ textDecoration: 'none' }}
                  onClick={() => clickbutton()}
                >
                  {' '}
                  <h2>
                    <strong>Chương trình giao xe tại nhà</strong>
                  </h2>
                </Link>
                <br /> <br />
                <br />
                <br />
                <br />
                <Link
                  to="/giaonhanxe"
                  style={{ textDecoration: 'none' }}
                  onClick={() => clickbutton()}
                >
                  {' '}
                  <p>Xem chi tiết</p>
                </Link>
              </p>
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Service;