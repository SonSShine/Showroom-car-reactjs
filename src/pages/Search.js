import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Search(props) {
  const [store, setStore] = useState(null);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    setStore(props.data);
  }, [props.data]);

  const sortColumn = (field, type) => {
    const sortData = [...store];
    if (type == 'string') {
      sortData.sort((a, b) => direction * a[field].localeCompare(b[field]));
    } else if (type == 'number') {
      sortData.sort((a, b) => direction * (a[field] - b[field]));
    }
    setDirection(direction * -1);
    setStore(sortData);
  };

  var store_list = [];
  if (store != null) {
    store_list = store.map((item) => (
      <tr>
        <td>{item.name}</td>
        <td>{item.bio}</td>
      </tr>
    ));
  }

  return (
    <table className="table">
      <center>
        {' '}
        <h2> Tìm theo tên</h2>
      </center>
      <tr>
        
          <thead class="thead-dark">
            {' '}
            <th onClick={() => sortColumn('name', 'string')}>
              Sắp xếp theo tên
            </th>
          </thead>
        <center>
          <th onClick={() => sortColumn('bio', 'string')}></th>{' '}
        </center>
      </tr>
      {store_list}
    </table>
  );
}

export default Search;
