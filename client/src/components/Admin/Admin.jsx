import React from 'react';

import AdminProductList from '../AdminProductList/AdminProductList';

import AddProduct from '../AddProduct/AddProduct';


function Admin(props) {
  return (
    <div>
        <AddProduct />
  <AdminProductList />
    </div>
  );
}

export default Admin;
