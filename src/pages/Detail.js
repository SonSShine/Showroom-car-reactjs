import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/Detail.css';

const Detail = () => {
  const [datas, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    console.log(' detail useEffect!!! ');
    let url =
      'https://62be5b370bc9b1256155ad45.mockapi.io/huyndai/' + params.id;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((datas) => {
        setData(datas);
      });
    console.log('>>> check dataUse : ', datas);
    console.log('app useeffect!!');  
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className='banner'></div>
          <div className="container">
            <ul className="Tieude">
              <li className="list-group-item">
                <Link to="/" style={{color : 'white'}}>Trang chủ</Link>
              </li>
              <li>
                <i class="fa-solid fa-angle-right"/>
              </li>
              <li className="list-group-item">
                <Link to="/products" style={{color : 'white'}}>Sản Phẩm</Link>
              </li>
              <li class="fa-solid fa-angle-right" style={{paddingTop : '3%', color : 'white'}}/>              
              <li className="list-group-item" style={{color : 'white'}}>{datas.name}</li>
              <li class="fa-solid fa-angle-right" style={{paddingTop : '3%', color : 'white'}}/>  
              <li className="list-group-item" style={{color : 'white'}}>Nổi bật</li>
            </ul>
          </div>
        </div>

        <img src={datas.picture} />
      </div>
      <div className=" table-menu container-fluid">
        <div className="col-md-4 col-sm-6 container">
          <table cellpadding="10px">
            <tr>
              <th width="30%" colSpan="3">
                <Link to="/store/">Tìm đại lí</Link>
              </th>
              <th width="30%">
                <Link to="/testdrive/">Đăng kí lái thử</Link>
              </th>
              <th width="30%">
                <Link to="/">Dịch vụ</Link>
              </th>
            </tr>
          </table>
        </div>
      </div>
      <br/>

      <div className="container">
        <div id="accordion">
          <button
            type="button"
            class="btn btn-link"
            data-toggle="collapse"
            data-target="#standOut"
          >
            Nổi bật
          </button>
          <button
            type="button"
            class="btn btn-link"
            data-toggle="collapse"
            data-target="#Specifications"
            style={{ width: '25%' }}
          >
            Thông số kĩ thuật
          </button>

          <div
            id="standOut"
            class="collapse show text-center"
            data-parent="#accordion"
          >
            <b className="h1 text-center">{datas.name}</b>
            <br />
            <div>
              <strong className="h4">
                Không gian rộng rãi trong một thiết kế nhỏ gọn
              </strong>
              <br />
              <p>
                Grand i10 sở hữu kích thước lớn hàng đầu phân khúc, đem đến một
                không gian thoải mái tối đa. Bên cạnh đó là sự tỉ mỉ, tinh tế
                trên các chi tiết cùng các tiện ích.
              </p>
              <img src={datas.picture} />
              <p>
                <strong>Thiết kế tinh xảo</strong>
                <br />
                <b>{datas.name}</b> thu hút mọi ánh nhìn trên mọi góc độ với các
                đường nét thời trang thể thao phá cách mang màu sắc của nghệ
                thuật đương đại.
                <br />
                {datas && datas.specifications && datas.specifications.exterior}
              </p>
              <img src={datas.picture} />
              <p>
                <strong>Tiện nghi & an toàn trên từng cây số</strong>
                <br />
                Khoang nội thất của <b>{datas.name}</b> là tất cả những gì bạn
                cần. Đó là sự rộng rãi của không gian kết hợp cùng các tính năng
                an toàn vượt tầm phân khúc.
                <br />
                {datas &&
                  datas.specifications &&
                  datas.specifications.furniture}
              </p>

              <img src={datas.picture} />
            </div>
          </div>
          <div id="Specifications" class="collapse" data-parent="#accordion">
            <table cellPadding="10px">
              <tr>
                <th colSpan="2" className="text-center h1">
                  <b>Thông tin xe</b>
                </th>
              </tr>
              <tr>
                <td width="50%">
                  <img src={datas.picture} />
                </td>
                <tr>
                  <td width="25%">
                    <b>Tên: </b>
                  </td>
                  <td>{datas.name}</td>
                </tr>
                <tr>
                  <td>
                    <b> Ngày sản xuất:</b>
                  </td>
                  <td>{datas.date} </td>
                </tr>
                <tr>
                  <td>
                    <b>Dòng xe:</b>
                  </td>
                  <td>{datas.model} </td>
                </tr>
                <tr>
                  <td>
                    <b> Xuất xứ:</b>
                  </td>
                  <td>{datas.origin} </td>
                </tr>
                <tr>
                  <td>
                    <b> Hiệu năng:</b>
                  </td>
                  <td>
                    {datas &&
                      datas.specifications &&
                      datas.specifications.engine}{' '}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b> Chất liệu: </b>
                  </td>
                  <td>
                    {' '}
                    {datas &&
                      datas.specifications &&
                      datas.specifications.material}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b> Giới thiệu:</b>{' '}
                  </td>
                  <td>{datas.bio} </td>
                </tr>
                <tr>
                  <td>
                    <b> Giá niêm yết: </b>
                  </td>
                  <td>{datas.price}$/Ngày </td>
                </tr>
                <Link to="/testdrive/">
              <button className="buy btn btn-danger" style={{ width: '26%' }}>Thuê Ngay</button>
            </Link>
              </tr>              
            </table>
          </div>
        </div>
        <br/>
      </div>
    </>
  );
};
export default Detail;
