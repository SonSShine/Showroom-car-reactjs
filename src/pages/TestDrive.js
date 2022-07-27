import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/TestDrive.css';
import { useForm, Controller } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom'


function TestDrive() {
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
    return day + '/' + month + '/' + year;
  };
  const saveUser = () => {
    console.log('save data', user);
    let method = 'POST';
    let id = '';   

    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };
    fetch(
      'https://62b90e92ff109cd1dc8ad594.mockapi.io/user' + id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        navigate(-1);
      });
  };
  const {
    register,
    handleSubmit,
    watch,
    label,
    required,
    formState: { errors },

  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [models, setModel] = useState([{ model: 'chon dong xe' }]);
  const [model_save, setModelSave] = useState(null);
  const [nameCar, setNameCar] = useState([{ name: 'chon mau xe' }]);
  const [carSave, setCarSave] = useState(null);
  const [user, setUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    let url = 'https://62b04951b0a980a2ef4f686d.mockapi.io/model_car/';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setModel(data);
      });
  }, []);
  const changeCar = (event) => {
    const target = event.target;
    const key = target.value;
    console.log(nameCar[key]);
    setCarSave(nameCar[key]);
  };

  const change = (event) => {
    const target = event.target;
    const value = target.value;
    setModelSave(value);

    fetch('https://62be5b370bc9b1256155ad45.mockapi.io/huyndai?model=' + value)
      .then((response) => response.json())
      .then((data) => {
        setNameCar(data);
        console.log(data);
      });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="banner"></div>

          <div className="container">
            <ul className='Tieude'>
              <li className="list-group-item">
                <Link to="/" style={{ color: 'white' }}>Trang chủ</Link>
              </li>
              <li>
                <i class="fa-solid fa-angle-right"></i>
              </li>
              <li className="list-group-item">
                <Link to="" style={{ color: 'white' }}>Đăng kí lái thử</Link>
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="listLaithu">
              <div className="banner-text text-center" style={{paddingBottom:'18%'}}>
                <h1>Đăng kí lái thử</h1>
                <h4>
                  Bạn có thể đăng kí lái thử tại các đại lý của Hyundai Thành
                  Công trải dài trên toàn quốc. Chúng tôi đang nỗ lực hết mình
                  để bạn có những trải nghiệm lái thử một cách thuận tiện và thú
                  vị nhất.
                </h4>
              </div>
              <img
                className="banner-img"
                src="https://toigingiuvedep.vn/wp-content/uploads/2021/08/background-banner-dep.jpg"
              />
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} action="https://62b90e92ff109cd1dc8ad594.mockapi.io/user" method="POST">
            <table>
              <thead>
                <tr>
                  <th rowspan="3" width="50%" className='text-center'>
                    {carSave != null ? (
                      <img className='img-test' src={carSave.picture} />
                    ) : (
                      <div class="spinner-border text-dark" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    )}

                  </th>
                </tr>
                <tr>
                  <th>
                    Dòng xe ôtô<sup>*</sup>
                  </th>

                  <th>
                    Tên xe ôtô <sup>*</sup>
                  </th>
                </tr>
                <tr>
                  <td>
                    <div>
                      {models != null ? (
                        <select
                          className="form-control"
                          name="model"
                          value={model_save}
                          onChange={(e) => change(e)}
                        >
                          <option>Chọn dòng xe</option>
                          {models.map((item) => (
                            <option value={item.model}>{item.model}</option>
                          ))}
                        </select>
                      ) : (
                        ''
                      )}
                    </div>
                  </td>
                  <td>
                    <div>
                      {nameCar != null ? (
                        <select
                          className="form-control"
                          name="namecar"
                          onChange={(e) => changeCar(e)}
                        >
                          <option>Chọn mãu xe</option>
                          {nameCar.map((item, key) => (
                            <option value={key}>{item.name}</option>
                          ))}
                        </select>
                      ) : (
                        ''
                      )}
                    </div>
                  </td>
                </tr>
              </thead>
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
                      value="false"
                      checked
                      {...register("gender", { required: true })}
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
                      value="true"
                      {...register("gender", { required: true })}
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
                      name='name'
                      placeholder="Nhập tên của bạn"

                      {...register("name", { required: true })}
                      onChange={(e) => handleChange(e)}
                    />                     
                  </td>
                  <td colspan="2">
                    <input
                      type="text"
                      className="form-control"
                      name='phone'
                      placeholder="Nhập số điện thoại của bạn"
                      {...register("phone", { required: true, minLength: 10, maxLength: 10 })}
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
                      name='email'
                      {...register("email", { required: true })}
                      onChange={(e) => handleChange(e)}
                    />
                  </td>
                  <td colspan="2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập địa chỉ của bạn"
                      name='address'
                      {...register("address", { required: true })}
                      onChange={(e) => handleChange(e)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Ngày lái thử</strong>
                  </td>
                  <td colspan="2">
                    <strong>
                      Chọn đại lý
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Chọn ngày"
                      name='TestDrive'
                      {...register("testDrive")}
                      onChange={(e) => handleChange(e)}
                    />
                  </td>
                  <td colspan="2">
                    <select className="form-control" name='store'{...register("store")}
                      onChange={(e) => handleChange(e)} >
                      <option selected="selected" data-v-70f709c0>
                        Chọn đại lý
                      </option>{' '}
                      <option value="1" data-v-70f709c0>
                        Hyundai Kinh Dương Vương 3s
                      </option>
                      <option value="2" data-v-70f709c0>
                        Hyundai Việt Hàn 3s
                      </option>
                      <option value="3" data-v-70f709c0>
                        Hyundai Ngọc An 3s
                      </option>
                      <option value="4" data-v-70f709c0>
                        Hyundai An Khánh 3S
                      </option>
                      <option value="6" data-v-70f709c0>
                        Hyundai Vinh
                      </option>
                      <option value="7" data-v-70f709c0>
                        Hyundai Hải Phòng
                      </option>
                      <option value="8" data-v-70f709c0>
                        Hyundai Đông Anh
                      </option>
                      <option value="9" data-v-70f709c0>
                        Hyundai Long Biên
                      </option>
                      <option value="10" data-v-70f709c0>
                        Hyundai Hà Đông
                      </option>
                      <option value="11" data-v-70f709c0>
                        Hyundai Phạm Hùng
                      </option>
                      <option value="12" data-v-70f709c0>
                        Hyundai Phạm Văn Đồng
                      </option>
                      <option value="13" data-v-70f709c0>
                        Hyundai Lê Văn Lương 1S
                      </option>
                      <option value="14" data-v-70f709c0>
                        Hyundai Đông Đô 3S
                      </option>
                      <option value="15" data-v-70f709c0>
                        Hyundai An Khánh 1S
                      </option>
                      <option value="16" data-v-70f709c0>
                        Hyundai Lê Văn Lương 1S
                      </option>
                      <option value="17" data-v-70f709c0>
                        Hyundai Giải Phóng 3S
                      </option>
                      <option value="19" data-v-70f709c0>
                        Hyundai Cầu Diễn
                      </option>
                      <option value="22" data-v-70f709c0>
                        Hyundai Gia Định Showroom 1S
                      </option>
                      <option value="24" data-v-70f709c0>
                        Hyundai Trường Chinh 1S
                      </option>
                      <option value="25" data-v-70f709c0>
                        Hyundai Gia Định 3S
                      </option>
                      <option value="27" data-v-70f709c0>
                        Hyundai Việt Hàn 1S
                      </option>
                      <option value="30" data-v-70f709c0>
                        Hyundai Ngọc An 1S
                      </option>
                      <option value="31" data-v-70f709c0>
                        Hyundai Miền Nam 3S
                      </option>
                      <option value="32" data-v-70f709c0>
                        Hyundai Miền Nam 1S
                      </option>
                      <option value="33" data-v-70f709c0>
                        Hyundai Đông Sài Gòn Xưởng Dịch vụ 2S (trụ sở chính)
                      </option>
                      <option value="34" data-v-70f709c0>
                        Hyundai Đông Sài Gòn phòng trưng bày 1S
                      </option>
                      <option value="35" data-v-70f709c0>
                        Hyundai Trường Chinh 3S
                      </option>
                      <option value="36" data-v-70f709c0>
                        Hyundai Bình Phước
                      </option>
                      <option value="37" data-v-70f709c0>
                        Hyundai Tây Ninh
                      </option>
                      <option value="38" data-v-70f709c0>
                        Hyundai Bình Thuận
                      </option>
                      <option value="39" data-v-70f709c0>
                        Hyundai Long An
                      </option>
                      <option value="40" data-v-70f709c0>
                        Hyundai Đồng Tháp 1S
                      </option>
                      <option value="41" data-v-70f709c0>
                        Hyundai Đồng Tháp 3S
                      </option>
                      <option value="42" data-v-70f709c0>
                        Hyundai An Giang
                      </option>
                      <option value="43" data-v-70f709c0>
                        Hyundai Bà Rịa Vũng Tàu
                      </option>
                      <option value="44" data-v-70f709c0>
                        Hyundai Tiền Giang
                      </option>
                      <option value="45" data-v-70f709c0>
                        Hyundai Kiên Giang
                      </option>
                      <option value="46" data-v-70f709c0>
                        Hyundai Tây Đô
                      </option>
                      <option value="47" data-v-70f709c0>
                        Hyundai Bến Tre
                      </option>
                      <option value="48" data-v-70f709c0>
                        Hyundai Vĩnh Long
                      </option>
                      <option value="49" data-v-70f709c0>
                        Hyundai Bạc Liêu
                      </option>
                      <option value="50" data-v-70f709c0>
                        Hyundai Cà Mau
                      </option>
                      <option value="51" data-v-70f709c0>
                        Hyundai Ngọc Phát
                      </option>
                      <option value="52" data-v-70f709c0>
                        Hyundai Ngọc Phát (Địa điểm Amata)
                      </option>
                      <option value="53" data-v-70f709c0>
                        Hyundai Bình Dương 3S (Chi nhánh Thành Phố Mới)
                      </option>
                      <option value="54" data-v-70f709c0>
                        Hyundai Bình Dương 1S
                      </option>
                      <option value="55" data-v-70f709c0>
                        Hyundai Vinh 1S
                      </option>
                      <option value="56" data-v-70f709c0>
                        Hyundai Sông Hàn
                      </option>
                      <option value="57" data-v-70f709c0>
                        Hyundai Sơn Trà
                      </option>
                      <option value="58" data-v-70f709c0>
                        Hyundai Thanh Hóa
                      </option>
                      <option value="59" data-v-70f709c0>
                        Hyundai Hà Tĩnh
                      </option>
                      <option value="60" data-v-70f709c0>
                        Hyundai Quảng Bình
                      </option>
                      <option value="61" data-v-70f709c0>
                        Hyundai Quảng Trị
                      </option>
                      <option value="62" data-v-70f709c0>
                        Hyundai Huế 3S
                      </option>
                      <option value="63" data-v-70f709c0>
                        Hyundai Huế 1S
                      </option>
                      <option value="64" data-v-70f709c0>
                        Hyundai Quảng Nam
                      </option>
                      <option value="65" data-v-70f709c0>
                        Hyundai Quảng Ngãi
                      </option>
                      <option value="66" data-v-70f709c0>
                        Hyundai Bình Định
                      </option>
                      <option value="67" data-v-70f709c0>
                        Hyundai Gia Lai
                      </option>
                      <option value="68" data-v-70f709c0>
                        Hyundai Đăk Lăk
                      </option>
                      <option value="69" data-v-70f709c0>
                        Hyundai Nha Trang
                      </option>
                      <option value="70" data-v-70f709c0>
                        Hyundai Đà Lạt
                      </option>
                      <option value="74" data-v-70f709c0>
                        Hyundai Phú Yên 1S
                      </option>
                      <option value="105" data-v-70f709c0>
                        Hyundai Sơn Tây 3S
                      </option>
                      <option value="106" data-v-70f709c0>
                        Hyundai Lào Cai
                      </option>
                      <option value="107" data-v-70f709c0>
                        Hyundai Tuyên Quang 3S
                      </option>
                      <option value="108" data-v-70f709c0>
                        Hyundai Thái Nguyên
                      </option>
                      <option value="109" data-v-70f709c0>
                        Hyundai Yên Bái 3S
                      </option>
                      <option value="110" data-v-70f709c0>
                        Hyundai Sơn La
                      </option>
                      <option value="111" data-v-70f709c0>
                        Hyundai Việt Trì
                      </option>
                      <option value="112" data-v-70f709c0>
                        Hyundai Vĩnh Yên
                      </option>
                      <option value="113" data-v-70f709c0>
                        Hyundai Quảng Ninh 3S
                      </option>
                      <option value="114" data-v-70f709c0>
                        Hyundai Bắc Giang
                      </option>
                      <option value="115" data-v-70f709c0>
                        Hyundai Bắc Ninh 3S
                      </option>
                      <option value="116" data-v-70f709c0>
                        Hyundai Bắc Ninh 1S
                      </option>
                      <option value="117" data-v-70f709c0>
                        Hyundai Hải Dương
                      </option>
                      <option value="118" data-v-70f709c0>
                        Hyundai Hưng Yên
                      </option>
                      <option value="119" data-v-70f709c0>
                        Hyundai Nam Định 3S
                      </option>
                      <option value="120" data-v-70f709c0>
                        Hyundai Thái Bình 3S
                      </option>
                      <option value="121" data-v-70f709c0>
                        Hyundai Ninh Bình
                      </option>
                      <option value="129" data-v-70f709c0>
                        Hyundai Long An 1S
                      </option>
                      <option value="137" data-v-70f709c0>
                        Hyundai Lê Văn Lương 3S
                      </option>
                      <option value="150" data-v-70f709c0>
                        Hyundai Đại Đồng Tiến
                      </option>
                      <option value="152" data-v-70f709c0>
                        Hyundai Phạm Văn Đồng 1S
                      </option>
                      <option value="153" data-v-70f709c0>
                        Hyundai Ninh Bình 1S
                      </option>
                      <option value="158" data-v-70f709c0>
                        Hyundai Huy Long
                      </option>
                      <option value="159" data-v-70f709c0>
                        Hyundai Quảng Ninh 1S
                      </option>
                      <option value="165" data-v-70f709c0>
                        Hyundai Hưng Yên - CN Phố Nối (2S)
                      </option>
                      <option value="166" data-v-70f709c0>
                        Hyundai Thanh Hóa – Chi nhánh Ngọc Lặc
                      </option>
                      <option value="167" data-v-70f709c0>
                        Hyundai An Phú 1S
                      </option>
                      <option value="168" data-v-70f709c0>
                        Hyundai Hoà Bình
                      </option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                    <strong>Ghi chú</strong>
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                    <textarea
                      className="form-control"
                      placeholder="Ghi chú của bạn "
                      name='bio'
                      {...register("gender1", { maxLength: 300 })}
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                      <input type="checkbox" name='agree' {...{ required: true }}

                      />

                      Tôi đã đọc chấp thuận<sub>*</sub>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    Quyền riêng tư của bạn rất quan trọng với Hyundai Hoàng Cầu,
                    cũng như sự tin tưởng của bạn với các sản phẩm và dịch vụ
                    của Hyundai. Chúng tôi cố gắng bảo vệ quyền riêng tư trực
                    tuyến của bạn, đồng thời mang tới trải nghiệm trang web thú
                    vị cung cấp thông tin, sản phẩm và dịch vụ có liên quan hữu
                    ích cho bạn. Khi đăng ký lái thử, bạn đồng ý với các điều
                    khoản trên với Hyundai Hoàng Cầu.
                  </td>
                </tr>

                <tr>
                  <td><Link to='/thanhcong'>          
                    <input type="submit" className="btn btn-primary"
                      onClick={() => saveUser()}></input></Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <br />
      </div>
    </>
  );
}
export default TestDrive;
