import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../css/MainAdmin.css"

export default function CarsEdit() {
    const params = useParams();
    const [cars, setCars] = useState(null);

    useEffect(() => {
        if (params.id !== "new") {
            let url =
                "https://62be5b370bc9b1256155ad45.mockapi.io/huyndai/" + params.id;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setCars(data);
                });
        } else {
            let initData = {};
            setCars(initData);
        }


    }, []);
    const navigate = useNavigate();


    const handleChange = (event) => {
        console.log(event);
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(name);
        let data = { ...cars };
        data[name] = value;

        console.log(data);
        setCars(data);
    };




    const saveUser = () => {
        let method = "POST";
        let id = "";
        if (cars.id) {
            method = "PUT";
            id = cars.id;
        }
        const requestOptions = {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cars)
        };

        fetch(
            "https://62be5b370bc9b1256155ad45.mockapi.io/huyndai/" + id,
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
            {cars != null ? (
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-lg-12">
                            <strong>THÊM THÔNG TIN XE MỚI</strong>
                            <br />
                            <div className="table-responsive">
                                <table className="table table-user-information">
                                    <tbody>

                                        <tr>
                                            <td>
                                                <strong>Tên xe</strong>
                                            </td>
                                            {/* <td className="text-primary">{cars.firstName}</td> */}
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={cars.name}
                                                    name="name"
                                                    onChange={(e) => handleChange(e)}
                                                ></input>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong>Loại xe</strong>
                                            </td>
                                            {/* <td className="text-primary">{cars.firstName}</td> */}
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={cars.model}
                                                    name="model"
                                                    onChange={(e) => handleChange(e)}
                                                ></input>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong>Giá xe</strong>
                                            </td>
                                            {/* <td className="text-primary">{cars.firstName}</td> */}
                                            <td>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={cars.price}
                                                    name="price"
                                                    onChange={(e) => handleChange(e)}

                                                ></input>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong>Ngày ra mắt</strong>
                                            </td>
                                            <td>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={cars.date}
                                                    name="date"
                                                    onChange={(e) => handleChange(e)}
                                                ></input>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <strong>Ảnh xe</strong>
                                            </td>
                                            <td className="text-primary">
                                                <input type="text" onChange={(e) => handleChange(e)} value={cars.picture} name="picture" className="filetype" />
                                                <img className="img_edit" src={cars.picture} alt="preview image" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>Thông tin xe</strong>
                                            </td>
                                            <td>
                                                <textarea
                                                    type="text"
                                                    name="bio"
                                                    className="form-control"
                                                    value={cars.bio}
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
                                    <Link to="/admin">
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