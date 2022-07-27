import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import '../css/Store.css';
import { Link } from 'react-router-dom';

mapboxgl.accessToken =
  'pk.eyJ1IjoicGh1b25naG9hbmdsb25nIiwiYSI6ImNsNThmYTA0cjBtd3QzbWxmbmJ2b3psYTEifQ.J74jL8IrwQRy5yeZDI7jFg';

function Store() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(105.823669);
  const [lat, setLat] = useState(21.019259);
  const [zoom, setZoom] = useState(18);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/phuonghoanglong/cl5986jjx00en14ogandwy0jg',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="banner"></div>

          <div className="container">
            <ul className='Tieude'>
              <li className="list-group-item">
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <i class="fa-solid fa-angle-right"/>
              </li>
              <li className="list-group-item">
                <Link to=""> Thông tin đại lý</Link>
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="listBando">
              <div className="banner-text" style={{paddingBottom:'17%'}}>
                <h1 className="text-center">Thông tin đại lý</h1>
              </div>
              <img
                className="banner-img"
                src="https://i.pinimg.com/564x/6f/4e/87/6f4e87c57bad8495f4dd2ae9d5e24277.jpg"
              />
            </div>
          </div>
        </div>

        {/* ---From--- */}
        <div className="container">
          <table cellpadding="10px">
            <tr className="Store-table">
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập tên đại lý"
                ></input>
              </td>
              <td>
                <select name="addess" id="addess" className="form-control">
                  <option value="Tất cả vùng miền">Tất cả vùng miền </option>
                  <option value="Miền Bắc">Miền Bắc</option>
                  <option value="Mieebf Trung và Tây nguyên">
                    Miền Trung và Tây Nguyên{' '}
                  </option>
                  <option value="Miền Nam">Miền Nam</option>
                </select>
              </td>
              <td>
                <select class="form-control" name="city">
                  <option value="1">An Giang</option>
                  <option value="2">Bạc Liêu</option>
                  <option value="3">Bắc Cạn</option>
                  <option value="4">Bắc Giang</option>
                  <option value="5">Bắc Ninh</option>
                  <option value="6">Bến Tre</option>
                  <option value="7">Bình Dương</option>
                  <option value="8">Bình Định</option>
                  <option value="9">Bình Phước</option>
                  <option value="10">Bình Thuận</option>
                  <option value="11">Cà Mau</option>
                  <option value="12">Cao Bằng</option>
                  <option value="13">Cần Thơ</option>
                  <option value="14">Đà Nẵng</option>
                  <option value="15">Daklak</option>
                  <option value="16">Đồng Nai</option>
                  <option value="17">Đồng Tháp</option>
                  <option value="18">Gia Lai</option>
                  <option value="19">Hà Giang</option>
                  <option value="20">Hà Nam</option>
                  <option value="21">Hà Nội</option>
                  <option value="22">Hà Tĩnh</option>
                  <option value="23">Hải Dương</option>
                  <option value="24">Hải Phòng</option>
                  <option value="25">Hòa Bình</option>
                  <option value="26">Hồ Chí Minh</option>
                  <option value="27">Hưng Yên</option>
                  <option value="28">Khánh Hòa</option>
                  <option value="29">Kiên Giang</option>
                  <option value="30">Kon Tum</option>
                  <option value="31">Lai Châu</option>
                  <option value="32">Lạng Sơn</option>
                  <option value="33">Lào Cai</option>
                  <option value="34">Lâm Đồng</option>
                  <option value="35">Long An</option>
                  <option value="36">Nam Định</option>
                  <option value="37">Nghệ An</option>
                  <option value="38">Ninh Bình</option>
                  <option value="39">Ninh Thuận</option>
                  <option value="40">Phú Thọ</option>
                  <option value="41">Phú Yên</option>
                  <option value="42">Quảng Bình</option>
                  <option value="43">Quảng Nam</option>
                  <option value="44">Quảng Ngãi</option>
                  <option value="45">Quảng Ninh</option>
                  <option value="46">Sóc Trăng</option>
                  <option value="47">Sơn La</option>
                  <option value="48">Tây Ninh</option>
                  <option value="49">Thái Bình</option>
                  <option value="50">Thái Nguyên</option>
                  <option value="51">Thanh Hóa</option>
                  <option value="52">Thừa Thiên Huế</option>
                  <option value="53">Tiền Giang</option>
                  <option value="54">Trà Vinh</option>
                  <option value="55">Tuyên Quang</option>
                  <option value="56">Vĩnh Long</option>
                  <option value="57">Vĩnh Phúc</option>
                  <option value="58">Yên Bái</option>
                </select>
              </td>
              <td>
                <select class="form-control" name="store">
                  <option vlaue="Tất cả đại lý"> Tất cả đại lý</option>
                  <option vlaue="Đại lý xe du lịch"> Đại lý xe du lịch</option>
                  <option vlaue="Đại lý xe thương mại">
                    {' '}
                    Đại lý xe thương mại
                  </option>
                </select>
              </td>
              <td>
                <button className="btn btn-primary">Tìm kiếm</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      {/* ---endform */}

      <div className="">
        <div className="col-sm-6 col-md-12">
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
          <div ref={mapContainer} className="map-container" />
        </div>
      </div>
    </>
  );
}
export default Store;
