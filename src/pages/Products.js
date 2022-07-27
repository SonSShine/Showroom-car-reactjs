import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductList from '../Components/ProductList';
import { Link, NavLink } from 'react-router-dom';
import '../css/Products.css';

export default function Products() {
  const [hyundai, setHyundai] = useState(null);
  const [modeles, setModeles] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    console.log('app useeffect!!');
    let url = 'https://62be5b370bc9b1256155ad45.mockapi.io/huyndai';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setHyundai(data);
      });

    let url_modeles = 'https://62be5b370bc9b1256155ad45.mockapi.io/model';
    fetch(url_modeles)
      .then((response) => response.json())
      .then((data) => {
        setModeles(data);
      });
  }, []);

  useEffect(() => {
    let url = "https://62be5b370bc9b1256155ad45.mockapi.io/huyndai";

    if (searchInput.length > 0) {
      url = url + "?name=" + searchInput;
    }

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setHyundai(data);
        });
  }, [searchInput]);

  var modeles_jsx = [];
  if (modeles != null) {
    modeles_jsx = (
      <nav style={{ padding: '3%', width: '1110px' }} className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="menu nav navbar-nav">
          {
            (modeles_jsx = modeles.map((item) => (
              <li key={item.id}>
                <Link to={'model/' + item.model_name}>
                  {item.model_name}
                </Link>
              </li>
            )))
          }
        </ul>
      </nav>
    );
  }

  return (
    <div className="container">
      <div className="container">
        <div className="banner"></div>
      </div>
      <div className="container">
        <ul className='Tieude'>
          <li className="list-group-item">
            <Link to="/">Trang chủ</Link>
          </li>
          <li>
            <i class="fa-solid fa-angle-right"></i>
          </li>
          <li className="list-group-item">
            <Link to=""> Sản Phẩm</Link>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="listSanpham">
          <div className="banner-text" style={{width :'103%', paddingBottom:'28%'}}>
            <h1 className="text-center">Sản Phẩm</h1>
            <h4 className="text-center">
              Tất cả sản phẩm của Huyndai Hoàng Cầu Việt Nam
            </h4>
          </div>
          <img
            className="banner-img"
            src="https://www.dailyhyundai.org/files/banner-F3Gvps4gzK.jpg"
          />
        </div>
      </div>
      <div>
        <li class='search'>
          <form className="form-inline my-2 my-lg-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder='Tìm xe'
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} />
              <div className="input-group-btn">
              </div>
            </div>
          </form>
          <div className="container-fluid">
          </div>
        </li>
      </div>
      <div className='container Modeles' style={{marginTop:'-15%'}}>
        {modeles_jsx}
      </div>

      <ProductList data={hyundai}></ProductList>
    </div>

  );
}
