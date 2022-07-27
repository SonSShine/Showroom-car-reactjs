import React from 'react';
import '../css/styles.css';
import { useState } from 'react';

function Trieuhoi() {
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
              <strong>Triệu hồi</strong>
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
              <span>Trách nhiệm HTV</span>
            </button>
            <button class="custom-btn btn-12" onClick={() => myFunction2()}>
              <span>Click!</span>
              <span>Trách nhiệm đại lý</span>
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
                - Các quy định về triệu hồi/bản tin kỹ thuật được áp dụng đối
                với tất cả các sản phẩm là xe đã được/ và/ hoặc/ sẽ được phân
                phối thông qua hệ thống Đại lý ủy quyền trên thị trường Việt
                Nam. <br />
                - HTV có trách nhiệm tiếp nhận các yêu cầu triệu hồi, nhanh
                chóng, nghiêm túc, khẩn trương ban hành thông báo về kế hoạch
                triệu hồi tới từng Đại lý ủy quyền của HTV trên toàn quốc nhằm
                đảm bảo tất cả các Đại lý ủy quyền đều nắm vững, hiểu rõ từng
                chi tiết để thực hiện và hoàn thành nhanh chóng trong kế hoạch
                triệu hồi đã được phê chuẩn bởi Cơ quan QLCL Nhà nước.
                <br />
                - HTV có trách nhiệm sử dụng mọi nguồn lực cần thiết và trong
                khả năng để phối hợp, hỗ trợ, kiểm tra, giám sát, báo cáo kết
                quả thực hiện của kế hoạch triệu hồi đã được phê chuẩn bởi Cơ
                quan QLCL với các bên liên quan. <br />
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
                Trách nhiệm của Đại lý Hyundai Ủy quyền và khách hàng: Khách
                hàng chủ động phối hợp đưa xe tới Đại lý ủy quyền, Đại lý xử lý
                đúng theo hướng dẫn Triệu hồi mà HTV quy định.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Trieuhoi;
