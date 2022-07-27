import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductList from '../Components/ProductList';

const Model = () => {
  const [hyundai, setHyundai] = useState(null);
  const [model, setModel] = useState(null);
  const params = useParams();
  useEffect(() => {
    console.log('user use effect!!');

    let url =
      'https://62be5b370bc9b1256155ad45.mockapi.io/huyndai?model=' + params.name;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setHyundai(data);
        setModel(params.name);
      });
  }, []);

  return (
    <div>
      <div className="App-jumbotron jumbotron text-center ">
        <h1>{model}</h1>
      </div>
      <div className="container">
        <ProductList data={hyundai}></ProductList>
      </div>
    </div>
  );
};

export default Model;
