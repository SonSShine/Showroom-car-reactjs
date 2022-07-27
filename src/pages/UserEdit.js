import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../css/MainAdmin.css"

export default function UserEdit() {
    const params = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (params.id !== "new") {
            let url =
                "https://62b04951b0a980a2ef4f686d.mockapi.io/user/" + params.id;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setUser(data);
                });
        } else {
            let initData = {};
            setUser(initData);
        }


    }, []);
    const navigate = useNavigate();

    const handleChange = (event) => {
        console.log(event);
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(name);
        let data = { ...user };
        data[name] = value;



        console.log(data);
        setUser(data);
    };

    const saveUser = () => {
        let method = "POST";
        let id = "";
        if (user.id) {
            method = "PUT";
            id = user.id;
        }
        const requestOptions = {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        };

        fetch(
            "https://62b04951b0a980a2ef4f686d.mockapi.io/user/" + id,
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                navigate(-1);
            });
    };


    return (
        <>
        {user != null ? (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <strong>Thêm thông tin khách hàng mới</strong>
                        <br />
                        <div className="table-responsive">
                            <table className="table table-user-information">
                                <tbody>

                                    <tr>
                                        <td>
                                            <strong>Tên khách hàng</strong>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={user.name}
                                                name="name"
                                                onChange={(e) => handleChange(e)}
                                            ></input>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>Loại xe</strong>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={user.model_car}
                                                name="model_car"
                                                onChange={(e) => handleChange(e)}
                                            ></input>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>Tên xe</strong>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={user.name_car}
                                                name="name_car"
                                                onChange={(e) => handleChange(e)}

                                            ></input>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>Ngày tháng năm sinh</strong>
                                        </td>
                                        <td>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={user.date}
                                                name="date"
                                                onChange={(e) => handleChange(e)}
                                            ></input>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>Ảnh khách hàng</strong>
                                        </td>
                                        <td className="text-primary">
                                            <input type="text" onChange={(e) => handleChange(e)} value={user.picture} name="picture" className="filetype" />
                                            <img className="img_edit" src={user.picture} alt="preview image" />

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <strong>Ghi chú cho cửa hàng</strong>
                                        </td>
                                        <td>
                                            <textarea
                                                type="text"
                                                name="bio"
                                                className="form-control"
                                                value={user.bio}
                                                onChange={(e) => handleChange(e)}
                                            ></textarea>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => saveUser()}
                                >
                                    Lưu lại
                                </button>
                                <span> </span>
                                <Link to="/admin/adminuser">
                                    <button type="button" className="btn btn-secondary">
                                        Hủy bỏ
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 ) : (
    <div className="spinner-border text-primary mt-3 ms-6" />
)}


        </>
    );
}