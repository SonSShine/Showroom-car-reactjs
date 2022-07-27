import React from 'react';
import '../css/Home.css';
import '../App.css';
import { Link, NavLink } from 'react-router-dom';


function Home() {


  return (
    <div class="container-fluid">
    <div className='row'>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://hyundai-api.thanhcong.vn/storage/uploads/slider/Accent.jpg" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src="https://hyundai-api.thanhcong.vn/storage/uploads/slider/Slide-website-new-elantra-2000x599.jpg" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src="https://hyundai-api.thanhcong.vn/storage/uploads/slider/Slide-website-new-i10-2000x599.jpg" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src="https://hyundai-api.thanhcong.vn/storage/uploads/slider/Slide-website-new-kona-2000x599.jpg" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src="https://hyundai-api.thanhcong.vn/storage/uploads/slider/MicrosoftTeams-image%20(22).png" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src="https://hyundai-api.thanhcong.vn/storage/uploads/slider/Slide-website-new-tucson-2000x599.jpg" class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src="https://hyundai-api.thanhcong.vn/storage/uploads/slider/slide-website.jpg" class="d-block w-100" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    <div class="col-lg-2">
          <br /><br /><br /><br />
          <img
            src="https://bdsweb.com.vn/upload_images/images/bbds/banner-bat-dong-san-doc-00.jpg"
          ></img>
        </div>

      <div class="col-lg-8">
    <div class="container">
        <div class="box1 row">
          <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
            <h2>Dịch vụ lái thử</h2>
            <h5>Bạn nên lái thử để biết được chiếc xe nào phù hợp với mình chứ.</h5>
            <Link to='testdrive' type="button" class="btn btn-danger" style={{width: '30%'}}>Đăng ký lái thử</Link>
          </div>
          <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd" style={{ width: '100%' }}>
            <img src='https://truongdaotaolaixehcm.com/wp-content/uploads/2020/08/kinh-nghiem-lai-xe-o-to-duong-dai-2.jpg' />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="box1 row">
        <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd" style={{ width: '100%' , height: '100' , margin: '0% 0% 0% -3%' }}>
            <img src='https://hyundai-api.thanhcong.vn/storage/uploads/maintenance/service-hyundai-min.png' />
          </div>
          <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
            <h2>Dịch vụ bảo trì</h2>
            <h5>Tại sao bạn nên kiểm tra xe thường xuyên?</h5>
            <Link to='/' type="button" class="btn btn-primary"style={{width: '30%'}}>Xem thêm</Link>
          </div>          
        </div>
      </div>
      <div class="container">
        <div class="box1 row">
        <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
            <h1>Tin công nghệ</h1>
            <h5>Diện kiến Sedan hiệu năng cao Hyundai ELANTRA 2022 chinh phục thị trường Mẽo</h5>
            <Link to='/' type="button" class="btn btn-primary"style={{width: '30%'}}>Xem thêm</Link>
          </div>
          <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" style={{ paddingLeft: '0px', width: '100%' }} solid="#ddd">
            <img src='https://hyundai-api.thanhcong.vn/storage/uploads/post/xedoisong_high_performance_sedan_allnew_hyundai_elantra_n_2022_276hp_debut_usa_h1_hozw.jpg' />
          </div>          
        </div>
      </div>

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="box1 row">
                <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" style={{ paddingLeft: '0px', width: '100%' }} solid="#ddd">
                  <img src='https://hyundai-api.thanhcong.vn/storage/uploads/post/DSC04115.jpg' />
                </div>
                <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd" s>
                  <h1>Trao tặng điểm thi đại học năm 2018</h1>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <a href='http://icdn.dantri.com.vn/zoom/1200_630/2019/12/13/bai-thi-1576206748782.jpg' type="button" class="btn btn-primary"style={{width: '30%'}}>Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="box1 row">
                <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" style={{ paddingLeft: '0px', width: '590px', height: '330px' }} solid="#ddd">
                  <img src='https://hyundai-api.thanhcong.vn/storage/uploads/post/5df99668bda54.jpg' />
                </div>
                <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
                  <h1>Hyundai đồng hành cùng giải đua lư hương vàng mở rộng</h1>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <a href='https://ducdongbaolong.vn/wp-content/uploads/2018/05/lu-huong-dat-vang.jpg' type="button" class="btn btn-primary"style={{width: '30%'}}>Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="box1 row">
                <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" style={{ paddingLeft: '0px', width: '590px' }} solid="#ddd">
                  <img src='https://hyundai-api.thanhcong.vn/storage/uploads/post/60e3f9886ecb3.jpeg' />
                </div>
                <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
                  <h1>Hyundai say no với offer của công ty Việt Á</h1>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <a href='https://nld.mediacdn.vn/291774122806476800/2021/12/19/phanquocviet-1639909959011639280845-16399100210371218288978.jpg' type="button" class="btn btn-primary"style={{width: '30%'}}>Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="box1 row">
                <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" style={{ paddingLeft: '0px', width: '590px' }} solid="#ddd">
                  <img src='https://hyundai-api.thanhcong.vn/storage/uploads/post/jump2.jpg' />
                </div>
                <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
                  <h1>Lớp dạy làm giàu từ người thân</h1>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <a href='http://image.congan.com.vn/thumbnail/CATP-480-2021-12-4/7a-1_434_260_335.png' type="button" class="btn btn-primary"style={{width: '30%'}}>Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="box1 row">
                <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" style={{ paddingLeft: '0px', width: '100%' }} solid="#ddd">
                  <img src='https://hyundai-api.thanhcong.vn/storage/uploads/post/5f8a64e759689.jpg' />
                </div>
                <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
                  <h1>Giúp đỡ đồng bào lũ lụt cùng đại sứ thiên tai Phan Anh</h1>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <a href='https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/9/8/951318/Phan-Anh-1.jpg' type="button" class="btn btn-primary"style={{width: '30%'}}>Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="box1 row">
                <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" style={{ paddingLeft: '0px', width: '100%' }} solid="#ddd">
                  <img src='https://hyundai-api.thanhcong.vn/storage/uploads/post/5fb8fce3811b9.jpg' />
                </div>
                <div class="img-hover-zoom col-xl-6 col-lg-6 col-md-6" border="1px" solid="#ddd">
                  <h1>Đồng hành cùng nhà cái trong kì Sea Games 31</h1>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <a href='https://vnn-imgs-f.vgcloud.vn/2018/07/04/09/ca-do.jpg' type="button" class="btn btn-primary"style={{width: '30%'}}>Xem thêm</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
</div>
<div class="col-lg-2">
          <br /><br /><br /><br />
          <img
            src="https://bdsweb.com.vn/upload_images/images/bbds/banner-bat-dong-san-doc-00.jpg"
          ></img>
        </div>
</div>
    </div>
  );
};

export default Home;
