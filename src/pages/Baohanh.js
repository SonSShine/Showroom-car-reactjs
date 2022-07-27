import React from 'react';
import '../css/styles.css';
import { useState } from 'react';

function Baohanh() {
  const [xstyle, setXstyle] = useState({ display: 'block' });
  const [ystyle, setYstyle] = useState({ display: 'none' });
  const myFunction = () => {
    setXstyle({ display: 'none' });
    setYstyle({ display: 'block' });
    //console.log('setx');
  };
  const myFunction2 = () => {
    setXstyle({ display: 'block' });
    setYstyle({ display: 'none' });
    console.log('sety');
  };
  return (
    <div>
      <div class="tieude container-fluid">
        <h1>
          <p className="textbox0">
            <center>
              <strong>Bảo hành</strong>
            </center>
          </p>
          <br />
        </h1>

        <div class="container">
          <div>
            {/* <button onClick={() => myFunction()}>Chính sách bảo hành</button>
            <button onClick={() => myFunction2()}>Bảo hành điện tử</button> */}
            <button class="custom-btn btn-12" onClick={() => myFunction()}>
              <span>Click!</span>
              <span>Chính sách</span>
            </button>
            <button class="custom-btn btn-12" onClick={() => myFunction2()}>
              <span>Click!</span>
              <span>Bảo hành điện tử</span>
            </button>
          </div>
          <div id="myDIV" style={ystyle}>
            <p>
              <h2 className="para0">
                {' '}
                <center>
                  <strong>Giới thiệu</strong>
                </center>
              </h2>{' '}
              <br />
              <br />
              <br />
              <p className="para1">
                Các quy định bảo hành này được áp dụng cho xe du lịch mới do
                Công ty Cổ phần Liên doanh ô tô Hyundai Thành Công Việt Nam
                (HTV) phân phối thông qua các Đại Lý Ủy Quyền và chỉ có giá trị
                trong phạm vi lãnh thổ Việt Nam. <br />
                Riêng đối với xe du lịch Hyundai do HTV sản xuất lắp ráp thời
                hạn bảo hành xe là 05 năm hoặc 100.000 km tuỳ theo điều kiện nào
                đến trước. Đối tượng: Tất cả các model xe: Grand i10, Accent,
                Elantra, Tucson, Kona, Santa Fe có ngày giao xe từ ngày
                01/03/2021. Thời hạn bảo hành cho các xe du lịch Hyundai do HTV
                nhập khẩu và phân phối là 3 năm hoặc 100.000 km (riêng xe Creta
                nhập khẩu là 5 năm hoặc 100.000km) tuỳ theo điều kiện nào đến
                trước. Thời hạn bảo hành cho các xe tải nhẹ Porter do HTV sản
                xuất lắp ráp là 2 năm hoặc 50.000km tuỳ theo điều kiện nào đến
                trước.
                <br />
                <br />
                <br /> Lưu ý: <br />- HTV chịu trách nhiệm bảo hành đối với các
                hư hỏng do khuyết tật của vật liệu hoặc lỗi sản xuất.
                <br />- Việc sửa chữa, bảo hành phải được thực hiện bởi Đại Lý
                Hyundai Ủy Quyền. Các Đại Lý Hyundai Ủy Quyền sẽ tiến hành sửa
                chữa hoặc thay thế miễn phí các phụ tùng và nhân công (những chi
                tiết có thể tháo rời).
              </p>
            </p>
          </div>
          <div id="myDIV2" style={xstyle}>
            <p>
              <h2 className="para0">
                {' '}
                <center>
                  <strong>Giới thiệu</strong>
                </center>
              </h2>
              <bt />
              <br />
              <br />
              <br />
              <p className="para1">
                Nhằm tiến đến mục tiêu chuyển đổi số, kể từ ngày 13/04/2021,
                Công ty Cổ phần Liên doanh ô tô Hyundai Thành Công Việt Nam
                (HTV) triển khai hình thức bảo hành điện tử (online) đối với các
                sản phẩm xe Hyundai (xe du lịch) thay cho sổ bảo hành bản giấy.
                Việc đăng ký và quản lý thông tin bảo hành điện tử sẽ được thực
                hiện thông qua website của HTV. Sự chuyển đổi này không chỉ giúp
                khách hàng dễ dàng hơn trong việc truy cập và quản lý thông tin
                xe, mà còn hỗ trợ tốt hơn cho hệ thống Đại lý cũng như HTV trong
                việc quản lý và theo dõi hoạt động bảo hành các sản phẩm xe
                Hyundai sau này.
                <br /> Lưu ý: Đối với khách hàng mua xe trước ngày 13/04/2021
                vẫn áp dụng sổ bảo hành giấy cho đến khi hết hạn bảo hành theo
                quy định.
              </p>
            </p>
            <div class="container">
              <div class="box2 row">
                <div
                  class="col-xl-6 col-lg-6 col-md-6"
                  border="1px"
                  solid="#ddd"
                >
                  <p className="text2" style={{}}>
                    <h2>
                      <strong>Kích hoạt bảo hành điện tử</strong>
                    </h2>
                    <br /> <br />
                    <br />
                    <br />
                    <br />
                    <button type="button" class="btn btn-secondary">
                      Kích hoạt
                    </button>
                  </p>
                </div>
                <div
                  class="img-hover-zoom col-md-6 col-sm-4"
                  border="1px"
                  solid="#ddd"
                >
                  <img
                    src="https://hyundai.thanhcong.vn/images/technical-service/home2.png"
                    alt="responsive webite"
                    class="img-fluid"
                    style={{ width: '100%' ,height:'100%',margin: '0% 0% 0% 3%'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Baohanh;
