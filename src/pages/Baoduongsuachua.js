import React from 'react';
import '../css/styles.css';
import { useState } from 'react';

function Baoduong() {
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
              <strong>Bảo dưỡng định kì & sửa chữa</strong>
            </center>
          </p>
          <br />
        </h1>

        <div class="container">
          <div>
            <button class="custom-btn btn-12" onClick={() => myFunction()}>
              <span>Click!</span>
              <span>Bảo dưỡng</span>
            </button>
            <button class="custom-btn btn-12" onClick={() => myFunction2()}>
              <span>Click!</span>
              <span>Sửa chữa</span> 
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
                Trong quá trình sử dụng, để đảm bảo cho chiếc xe của bạn vận
                hành một cách trơn tru, bạn cần mang xe tới tới các Đại Lý
                Hyundai Ủy Quyền để kiểm tra, bảo dưỡng định kỳ.
                <br />
                Lần bảo dưỡng định kỳ đầu tiên khi xe đã chạy được 1.000 km hay
                đã chạy trong khoảng thời gian trung bình là một tháng, nhằm đảm
                bảo cho chiếc xe của bạn được chăm sóc và có thể hoạt động mà
                không có sự cố nào xảy ra. <br />
                Lịch bảo dưỡng được nêu trong “Sách hướng dẫn sử dụng”. Lịch bảo
                dưỡng này được thiết kế để giúp bạn có được một chiếc xe với
                hiệu suất hoạt động tốt, có độ bền và độ tin cậy lớn và đảm bảo
                cho quyền lợi bảo hành xe của bạn có giá trị.
                <br />
                <center>
                  {' '}
                  <img src="https://tuvanmuaxe.vn/upload/upload_img/images/bao-duong-dinh-ky-xe-oto-kia-viet-nam-tuvanmuaxe_vn-2.JPG"></img>
                </center>
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
                Sửa chữa chung: Ngoài việc chăm sóc chiếc xe của bạn bằng cách
                đưa xe đi bảo dưỡng định kỳ, nếu chiếc xe của bạn xảy ra bất kỳ
                sự cố nào, hãy liên hệ với chúng tôi. Chúng tôi cũng cung cấp
                dịch vụ sửa chữa chung với những Kỹ thuật viên có tay nghề cao,
                với những thiết bị chuẩn đoán - sửa chữa hiện đại, chất lượng
                quốc tế như máy chuẩn đoán GDS Mobile, Thiết bị cài áp suất lốp
                TPMS, Thiết bị đo xung VMI, Bộ dụng cụ chẩn đoán động cơ Diesel
                CIT 4000… <br />
                <center>
                  <img src="https://hyundaingocphat.com/source/News/1_1764e677-e7f9-4da1-bfc6-c50a8c8e4448.jpg"></img>
                </center>
                <br />
                Sửa chữa đồng sơn: Chúng tôi luôn không ngừng đổi mới và mong
                muốn mang đến cho khách hàng chất lượng dịch vụ Đồng Sơn tốt
                nhất. Với mục tiêu nâng cao chất lượng và tính cạnh tranh của
                Dịch vụ Hyundai, bảo vệ môi trường và sức khỏe của người lao
                động, hướng tới một tương lai xanh, chúng tôi đã chính thức thức
                triển khai chương trình chuyển đổi SƠN GỐC NƯỚC. Khách hàng sẽ
                được trải nghiệm công nghệ tiên tiến trong lĩnh vực đồng sơn với
                buồng phun sơn công nghệ cao và sản phẩm sơn gốc nước. Chất
                lượng đảm bảo hơn, màu sắc đẹp hơn do thành phần có chứa hạt
                ca-may, giá thành ưu đãi, quan trọng hơn nữa là chung tay cùng
                cộng đồng bảo vệ môi trường “Xanh”. Hiện tại, chương trình
                đã/đang được chuyển đổi theo từng giai đoạn, tiến tới áp dụng
                toàn hệ thống Đại lý 3S trên toàn quốc, bắt đầu từ ngày
                01/04/2022. Điển hình tiên phong chuyển đổi là những Đại lý:
                Hyundai Giải Phóng, Hyundai Sông Hàn, Hyundai Đông Đô... và rất
                nhiều Đại lý khác đang bắt đầu kế hoạch chuyển đổi.
                <center>
                  {' '}
                  <img src="https://dongdoautohd.vn/wp-content/uploads/2021/01/lam-dong-son_2.jpg"></img>
                </center>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Baoduong;
