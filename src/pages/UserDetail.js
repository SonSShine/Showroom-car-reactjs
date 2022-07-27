import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';
import "../css/MainAdmin.css";

const UserDetail = () => {
    const params = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
        console.log('user use effect!!');

        let url =
            'https://62b04951b0a980a2ef4f686d.mockapi.io/user/' + params.id;

        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                data.date = new Date(data.date);
                console.log('date', data.date);
                setUser(data); //setStudents(data)
            });
    }, []);



    const formatDate = (date) => {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return day + '-' + month + '-' + year;
    };

    return (
        <>
            {user != null ? (
                <div className="container bootstrap snippets bootdey">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-responsive">
                                <table className="table table-user-information">
                                    <tbody>
                                        <tr>
                                            <td className="tdTieude">
                                                <strong>Mã khách hàng</strong>
                                            </td>
                                            <td className="text-primary">{user.id}</td>
                                        </tr>

                                        <tr>
                                            <td className="tdTieude">
                                                <strong>Tên khách hàng</strong>
                                            </td>
                                            <td className="text-primary">{user.name}</td>
                                        </tr>

                                        <tr>
                                            <td className="tdTieude">
                                                <strong>Loại xe</strong>
                                            </td>
                                            <td className="text-primary">{user.model_car}</td>
                                        </tr>

                                        <tr>
                                            <td className="tdTieude">
                                                <strong>Tên xe</strong>
                                            </td>
                                            <td className="text-primary">{user.name_car}</td>
                                        </tr>

                                        <tr>
                                            <td className="tdTieude">
                                                <strong>Ngày tháng năm sinh</strong>
                                            </td>
                                            <td className="text-primary">{formatDate(user.date)}</td>
                                        </tr>

                                        <tr>
                                            <td className="tdTieude">
                                                <strong>Ảnh khách hàng</strong>
                                            </td>
                                            <td className="text-primary">
                                                <img src={user.picture} className={"img_edit"} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tdTieude">
                                                <strong>Ghi chú cho cửa hàng</strong>
                                            </td>
                                            <td className="text-primary">{user.bio}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <div className="spinner-border text-primary mt-3 ms-6" />
            )}
        </>
    );
};

export default UserDetail;