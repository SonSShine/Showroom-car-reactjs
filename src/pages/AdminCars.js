import React, { useEffect, useState } from "react";
import ListCars from "../Components/ListCars";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/MainAdmin.css";

export default function Admin() {
    const [cars, setCars] = useState(null);
    const [searchInput, setSearchInput] = useState("");

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        let url = "https://62be5b370bc9b1256155ad45.mockapi.io/huyndai";

        if (searchInput.length > 0) {
            url = url + "?name=" + searchInput;
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCars(data);
                console.log(data);
            });


        // user login data
        fetch("https://62b04951b0a980a2ef4f686d.mockapi.io/admin")
            .then((response) => response.json())
            .then((data) => { setAdmin(data); console.log("admin", data); });


    }, [searchInput]);


    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = admin.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );


    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (

        <div className="container-fluid">


            <h2 className="text-center">QUẢN LÝ THÔNG TIN XE</h2>

            <div className="login-form">
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>


            <div className="row">
                <div className="col-lg-12">

                    <div className="input-group">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tìm xe"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        ></input>
                    </div>

                    <div className="text-left">

                    </div>
                </div>
                <table id="myTable" className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th className="col-lg-1">Mã</th>
                            <th className="col-lg-2">Tên xe</th>
                            <th className="col-lg-3">Loại xe</th>
                            <th className="col-lg-2">Giá xe</th>
                            <th className="col-lg-1">Ảnh xe</th>
                            <th className="col-lg-2">Tùy chọn</th>
                        </tr>
                    </thead>
                    {isSubmitted && <ListCars data={cars} /> }

                </table>
            </div>

        </div>
    );
}