import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import "../css/MainAdmin.css";

export default function ListUser(props) {
    // set data car from props
    const [user, setUser] = useState(null);

    useEffect(() => {

        setUser(props.data);
    }, [props.data]);



    const deleteUser = (id) => {
        fetch('https://62b90e92ff109cd1dc8ad594.mockapi.io/user/' + id, {
            method: 'DELETE',
        }).then(() => {
            console.log('delete successful!!');
            let result = [...user];
            result = result.filter((item) => {
                return item.id != id;
            });
            setUser(result);
        });
    };



    console.log("list user");
    var list_users = [];
    if (user != null) {
        list_users = user.map((item) => (
            <tr key={item.id} id={"list_user"}>

                <td className="col-lg-1">{item.id}</td>
                <td className="col-lg-2">{item.name}</td>
                <td className="col-lg-3">{item.email}</td>
                <td className="col-lg-2">{item.phone}</td>
                <td className="col-lg-1">{item.name_car}</td>

                <td className="col-lg-2">
                    <NavLink to={'/admin/adminuser/' + item.id}>
                        <button type="button" className="btn btn-success">Chi tiết</button></NavLink><br />
                    <NavLink to={'/admin/useredit/' + item.id}>
                        <button type="button" className="btn btn-primary">
                            Chỉnh sửa
                        </button>
                    </NavLink><br />

                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteUser(item.id)}
                    >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </td>
            </tr>
        ));
    }


    return (

        <>
           {list_users}
        </>
    );
}