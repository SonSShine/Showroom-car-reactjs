import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../css/Feedback.css';

function Feedback() {
    return (
        <div>
            <div class="container">
                <div class="box1 row partner">
                    <div class="container-fluid text-center">
                        <h1 class="section-title">PHẢN HỒI</h1>
                    </div>
                    <div class="col-md-6">
                        <div class="input-group mt-3">
                            <input type="text" placeholder="Họ tên" class="form-control" id="fullname" name="fullname" aria-describedt="fullname_label" /><span class="input-group-text" id="fullname_label"><li class="fa fa-solid fa-user"></li></span>
                        </div>
                        <div class="input-group mt-3">
                            <input type="text" placeholder="Email" class="form-control" id="email" name="email" aria-describedt="email_label" /><span class="input-group-text" id="email_label"><li class="fa fa-solid fa-envelope"></li></span>
                        </div>
                        <div class="input-group mt-3">
                            <input type="text" placeholder="Số điện thoại" class="form-control" id="number" name="number" aria-describedt="number_label" /><span class="input-group-text" id="number_label"><li class="fa fa-solid fa-phone"></li></span>
                        </div>
                        <div class="input-group mt-3">
                            <input type="text" placeholder="Tiêu đề" class="form-control" id="text" name="text" aria-describedt="text_label" /><span class="input-group-text" id="text_label"><li class="fa fa-solid fa-file"></li></span>
                        </div>
                        <div class="input-group mt-3">
                            <textarea placeholder="Nhập nội dung" class="form-control" id="content" name="content" aria-describedby="content_label" rows="10"></textarea><span class="input-group-text" id="text_label"><i class="fa fa-solid fa-book"></i></span>
                        </div>
                        <button type="submit" class="btn btn-primary mt-3">Gửi</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;