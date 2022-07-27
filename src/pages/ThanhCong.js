import React from 'react';
import { Link } from 'react-router-dom';
import '../css/stylesSP.css';

export default function ThanhCong() {
  return (
    <div class="phanHoi1">
      <div className="phanHoi">
        <center>
          <h1>Bạn đã gửi thông tin cho quản trị viên thành công</h1>
          <Link to="/">
            <button type="button" className="btn btn-link">
              Quay lại trang chủ
            </button>
          </Link>
        </center>
      </div>
    </div>
  );
}
