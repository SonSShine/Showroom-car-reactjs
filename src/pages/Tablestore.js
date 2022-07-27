import React from 'react';
import Search from './Search';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../css/stylesSP.css';
import { Navigate, useNavigate } from 'react-router-dom';

function Tablestore() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    label,
    required,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    let url = 'https://62be5b370bc9b1256155ad45.mockapi.io/store';
    if (searchTerm.length > 0) {
      url = url + '?search=' + searchTerm;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [searchTerm]);

  const [regions, setRegion] = useState([{ model: 'Vùng Miền' }]);
  const [regionsSave, setRegionsSave] = useState(null);

  const [nameStore, setNameStore] = useState([{ name: 'Tỉnh thành phố' }]);
  const [saveNameStore, setSaveNameStore] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    let url = 'https://62be5b370bc9b1256155ad45.mockapi.io/regions';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setRegion(data);
      });
  }, []);

  const changeCar = (event) => {
    const target = event.target;
    const key = target.value;
    console.log(nameStore[key]);
    setSaveNameStore(nameStore[key]);
  };

  const change = (event) => {
    const target = event.target;
    const value = target.value;
    setRegionsSave(value);
    console.log(value);
    let urls = 'https://62be5b370bc9b1256155ad45.mockapi.io/store?regions=';
    fetch(urls + value)
      .then((response) => response.json())
      .then((data) => {
        setNameStore(data);
        console.log(data);
      });
  };
  const handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    let data = { ...user };
    data[name] = value;

    if (name == 'gender') {
      data[name] = str2bool(value);
      console.log('gender');
      console.log(data[name]);
    }

    console.log(data);
    setUser(data);
  };
  var str2bool = (value) => {
    if (value && typeof value === 'string') {
      if (value.toLowerCase() === 'true') return true;
      if (value.toLowerCase() === 'false') return false;
    }
    return value;
  };
  const formatDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getYear();
    return day + '-' + month + '-' + year;
  };
  const saveUser = () => {
    console.log('save data', user);
    let method = 'POST';
    let id = '';
    if (user.id) {
      method = 'PUT';
      id = user.id;
    }

    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };
    fetch(
      'https://62c789832b03e73a58e63864.mockapi.io/feedback' + id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        navigate(-1);
      });
  };

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2">
          <br />
          <br />
          <br />
          <br />
          <img src="https://nhacaiuytinvip.com/wp-content/uploads/2022/02/banner-fb88-sidebar-2.gif"></img>
          <img src="https://nhacaiuytinvip.com/wp-content/uploads/2022/06/WY88-Web-Web-Banner-Design-300x300-1.gif"></img>
          <img src="https://nhacaiuytinvip.com/wp-content/uploads/2022/07/dai-ly-w88.gif"></img>
        </div>
        <div class="col-lg-8">
          <h1 className="banner-text">
            <br />
            <p>
              <center>
                <strong>Hỗ trợ kỹ thuật</strong>
              </center>
            </p>
          </h1>
          <div class="container">
            <center>
              <br />
              <h2 style={{ padding: 20 }}>Tìm theo vùng miền</h2>
            </center>
            <div class="row">
              {' '}
              <li style={{ listStyle: 'none' }}>
                <div className="select-container">
                  {regions != null ? (
                    <select
                      name="model"
                      className="form-control"
                      value={regionsSave}
                      onChange={(e) => change(e)}
                    >
                      <option>Vùng miền</option>
                      {regions.map((item) => (
                        <option value={item.id}>{item.regions}</option>
                      ))}
                    </select>
                  ) : (
                    ''
                  )}
                </div>
              </li>
              <li style={{ listStyle: 'none' }}>
                <div className="select-container">
                  {nameStore != null ? (
                    <select
                      name="namecar"
                      className="form-control"
                      onChange={(e) => changeCar(e)}
                    >
                      <option>Tên cửa hàng</option>
                      {nameStore.map((item, key) => (
                        <option value={key}>{item.name}</option>
                      ))}
                    </select>
                  ) : (
                    ''
                  )}
                </div>
              </li>
            </div>
            <form
              action="https://62c789832b03e73a58e63864.mockapi.io/feedback"
              method="POST"
            >
              <table className="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Tên cửa hàng</th>
                    <th>
                      {' '}
                      <center> Thông tin cửa hàng</center>
                    </th>
                  </tr>
                </thead>
                <tr>
                  <td>
                    {saveNameStore && (
                      <div>
                        <p>{saveNameStore.name}</p>
                      </div>
                    )}
                  </td>
                  <td>
                    {saveNameStore && (
                      <div>
                        <center>
                          {' '}
                          <p>{saveNameStore.bio}</p>
                        </center>
                      </div>
                    )}
                  </td>
                </tr>

                <div class="row">
                  <div class="col-sm-6">
                    <div className="input-group">
                      <input
                        type="text"
                        placeHolder="nhập tên cửa hàng"
                        className="form-control"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      ></input>
                      <div className="input-group-append">
                        <button className="btn btn-secondary" type="button">
                          <i class="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div>
                  <Search data={data} />
                </div>

                <tbody>
                  <tr>
                    <td colspan="3">
                      <strong>Thông tin cá nhân</strong>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3">
                      <strong>
                        Danh xưng <sup>*</sup>
                      </strong>
                    </td>
                  </tr>
                  <tr colspan="3" class="form-check-inline">
                    <label class="form-check-label" for="radio1">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="radio1"
                        name="gender"
                        value="0"
                        checked
                        {...register('gender', { required: true })}
                        onChange={(e) => handleChange(e)}
                      ></input>
                      Ông
                    </label>
                    <label class="form-check-label" for="radio2">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="radio2"
                        name="gender"
                        value="1"
                        {...register('gender', { required: true })}
                        onChange={(e) => handleChange(e)}
                      ></input>
                      Bà
                    </label>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Tên<sup>*</sup>
                      </strong>
                    </td>
                    <td colspan="2">
                      <strong>
                        Sô điện thoại<sup>*</sup>
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Nhập tên của bạn"
                        {...register('name', { required: true })}
                        onChange={(e) => handleChange(e)}
                      />
                    </td>
                    <td colspan="2">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Nhập số điện thoại của bạn"
                        {...register('phone', {
                          required: true,
                          minLength: 10,
                          maxLength: 10,
                        })}
                        onChange={(e) => handleChange(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Email</strong>
                    </td>
                    <td colspan="2">
                      <strong>Địa chỉ</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Nhập email của bạn"
                        name="email"
                        {...register('email', { required: true })}
                        onChange={(e) => handleChange(e)}
                      />
                    </td>
                    <td colspan="2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nhập địa chỉ của bạn"
                        name="addess"
                        {...register('addess', { required: true })}
                        onChange={(e) => handleChange(e)}
                      />
                    </td>
                  </tr>
                  <td colspan="3">
                    <strong>Ghi chú</strong>
                  </td>
                  <tr>
                    <td colspan="3">
                      <textarea
                        className="form-control"
                        placeholder="Ghi chú của bạn "
                        name="bio"
                        {...register('gender1', { maxLength: 300 })}
                        onChange={(e) => handleChange(e)}
                      ></textarea>
                      <tr>
                        <td>
                          <Link to="/feedback">
                            <input
                              type="submit"
                              className="btn btn-primary"
                              onClick={() => saveUser()}
                            />
                          </Link>
                        </td>
                      </tr>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
        <div class="col-lg-2">
          <br />
          <br />
          <br />
          <br />
          <img src="https://nhacaiuytinvip.com/wp-content/uploads/2022/02/banner-fb88-sidebar-2.gif"></img>
          <img src="https://nhacaiuytinvip.com/wp-content/uploads/2022/06/WY88-Web-Web-Banner-Design-300x300-1.gif"></img>
          <img src="https://nhacaiuytinvip.com/wp-content/uploads/2022/07/dai-ly-w88.gif"></img>
        </div>
      </div>
    </div>
  );
}

export default Tablestore;
