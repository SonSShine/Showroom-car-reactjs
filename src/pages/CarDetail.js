import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';
import "../css/MainAdmin.css";

const CarsDetail = () => {
  const params = useParams();
  const [cars, setCars] = useState(null);
  useEffect(() => {
    console.log('user use effect!!');

    let url =
        'https://62be5b370bc9b1256155ad45.mockapi.io/huyndai/' + params.id;

    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          data.date = new Date(data.date);
          console.log('date', data.date);
          setCars(data);
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
        {cars != null ? (
            <div className="container bootstrap snippets bootdey">
              <div className="panel-body inf-content">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="table-responsive">
                      <table className="table table-user-information">
                        <tbody>
                        <tr>
                          <td className="tdTieude">
                            <strong>Số thứ tự</strong>
                          </td>
                          <td className="text-primary">{cars.id}</td>
                        </tr>

                        <tr>
                          <td>
                            <strong className="tdTieude">Tên xe</strong>
                          </td>
                          <td className="text-primary">{cars.name}</td>
                        </tr>

                        <tr>
                          <td>
                            <strong className="tdTieude">Loại xe</strong>
                          </td>
                          <td className="text-primary">{cars.model}</td>
                        </tr>

                        <tr>
                          <td>
                            <strong className="tdTieude">Giá xe</strong>
                          </td>
                          <td className="text-primary">${cars.price}</td>
                        </tr>

                        <tr>
                          <td>
                            <strong className="tdTieude">Ngày ra mắt</strong>
                          </td>
                          <td className="text-primary">{formatDate(cars.date)}</td>
                        </tr>

                        <tr>
                          <td>
                            <strong className="tdTieude">Ảnh xe</strong>
                          </td>
                          <td className="text-primary">
                            <img src={cars.picture} className={"img_edit"} />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong className="tdTieude">Nổi bật</strong>
                          </td>
                          <td className="text-primary">{cars.bio}</td>
                        </tr>
                        </tbody>
                      </table>
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
};

export default CarsDetail;