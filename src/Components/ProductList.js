import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../css/Products.css';

function ProductList(props) {
  const [hyundai, setHyundai] = useState(null);
  const [modeles, setModeles] = useState(null);

  useEffect(() => {
    console.log('product list useEffect!!');
    setHyundai(props.data);
    console.log('categories useEffect');
    setModeles(props.data);
  }, [props.data]);

  var hyundai_jsx = [];
  if (hyundai != null) {
    hyundai_jsx = hyundai.map((item) => (
      <div className="col-lg-4">
        <Link to={'/detail/' + item.id}>
          <div className='card'>
            <img className='picture' src={item.picture} alt="Card image cap" />
            <div className="card-body">
              <h5 className="name">{item.name}</h5>
            </div>
          </div>
        </Link>
      </div>
    ));
  }
  return (
    <div className="container-fuild">
      <div className="row card-deck">{hyundai_jsx}</div>
      <div className='containerProducts'></div>
    </div>

  );
}

export default ProductList;
