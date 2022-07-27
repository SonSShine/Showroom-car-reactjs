import React from 'react';
import '../css/styles.css';
import { useState } from 'react';

function Phutungphukien() {
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
              <strong>Phụ tùng & phụ kiện chính hãng</strong>
            </center>
          </p>
          <br />
        </h1>

        <div class="container">
          <div>
            <button class="custom-btn btn-12" onClick={() => myFunction()}>
              <span>Click!</span>
              <span>Phụ tùng</span>
            </button>
            <button class="custom-btn btn-12" onClick={() => myFunction2()}>
              <span>Click!</span>
              <span>Phụ kiện</span>
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
                Phụ tùng chính hãng của Hyundai phải trải qua một quy trình
                thiết kế, sản xuất, kiểm tra chất lượng tuân thủ tiêu chuẩn khắt
                khe nhất. Nhờ vậy, các phụ tùng chính hãng luôn đảm bảo được sự
                vừa vặn, độ bền và tính năng vận hành tốt nhất, từ đó kéo dài
                niên hạn sử dụng cũng như đảm bảo an toàn cao nhất cho khách
                hàng.
                <br />
                Nếu bạn quan tâm đến sự an toàn cho chính mình và người thân,
                nếu bạn luôn quan tâm và dành sự yêu thương, chăm sóc cho người
                bạn đường quý giá của mình, hãy đảm bảo rằng chiếc xe ô tô của
                bạn được lắp đặt các phụ tùng chính hãng của Hyundai, bởi các kỹ
                Kỹ thuật viên được đào tạo chuyên nghiệp tại hệ thống các đại lý
                của chúng tôi, nhà phân phối và lắp ráp chính thức nhãn hiệu ô
                tô Hyundai tại Việt Nam.
                <br />
                <br />
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
                Bên cạnh cung cấp các phụ tùng chính hãng, chúng tôi cũng phân
                phối rất nhiều phụ kiện chính hãng mang thương hiệu Hyundai, đáp
                ứng sự đa dạng hóa trong nhu cầu của khách hàng như: camera hành
                trình, ốp la zăng, lướt tản nhiệt thể thao, thảm trải sàn, lưới
                chở hàng... <br />
                <br />
                <div class="accessories-images2">
                  <div class="row">
                    <div class="col-md-3">
                      <img src="https://hyundai-api.thanhcong.vn/storage/uploads/page/accessories6.png" />
                    </div>
                    <div class="col-md-3">
                      <img src="https://hyundai-api.thanhcong.vn/storage/uploads/page/accessories5.png" />
                    </div>
                    <div class="col-md-3">
                      <img src="https://hyundai-api.thanhcong.vn/storage/uploads/page/accessories3.png" />
                    </div>
                    <div class="col-md-3">
                      <img src="https://hyundai-api.thanhcong.vn/storage/uploads/page/accessories4.png" />
                    </div>
                  </div>{' '}
                  <div class="desc">
                    <center> Hình ảnh phụ kiện chính hãng</center>
                  </div>
                </div>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Phutungphukien;
