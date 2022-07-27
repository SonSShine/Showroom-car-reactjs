import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import "../css/MainAdmin.css";

export default function ListCars(props) {
    // set data car from props
    const [cars, setCars] = useState(null);

    useEffect(() => {

        setCars(props.data);  // set car data from props
    }, [props.data]);



    const deleteUser = (id) => {
        fetch('https://62be5b370bc9b1256155ad45.mockapi.io/huyndai/' + id, {
            method: 'DELETE',
        }).then(() => {
            console.log('delete successful!!');
            let result = [...cars];
            result = result.filter((item) => {
                return item.id != id;
            });
            setCars(result);
        });
    };



    console.log("list cars");
    var list_cars = [];
    if (cars != null) {
        list_cars = cars.map((item) => (
            <tr key={item.id} id={"list_car"}>

                <td className="col-sm-1">{item.id}</td>
                <td className="col-sm-2">{item.name}</td>
                <td className="col-sm-3">{item.model}</td>
                <td className="col-sm-2">${item.price}</td>
                <td className="col-sm-1"><img className={"img_edit"} src={item.picture} /></td>

                <td className="col-sm-2">
                    <NavLink to={'/admin/' + item.id}><button type="button" className="btn btn-success">Chi tiết</button></NavLink><br />
                    <NavLink to={'/admin/caredit/' + item.id}>
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


            <tbody>{list_cars}</tbody>

    );
}