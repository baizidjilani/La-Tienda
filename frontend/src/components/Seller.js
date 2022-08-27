import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./admin.css";


export default function Seller() {
  const auth = localStorage.getItem('user');
  return (
    <div>
      <div className="grid-container">
        <aside id="sidebar">

          <ul className="sidebar-list">
            <Link to='/admin/dashboard'>
              <li className="sidebar-list-item">
                <span className="material-icons-outlined">dashboard</span> Dashboard
              </li>
            </Link>
            <Link to='/seller/addproducts'>
              <li className="sidebar-list-item">
                <span className="material-icons-outlined">inventory_2</span>Add Products
              </li>
            </Link>
            <Link to='/seller/orders'>
              <li className="sidebar-list-item">
                <span className="material-icons-outlined">add_shopping_cart</span> Orders
              </li>
            </Link>
            <Link to={'profile/'+auth._id}>
              <li className="sidebar-list-item">
                <span className="material-icons-outlined">person</span> Seller Profile
              </li>
            </Link>
          </ul>
        </aside>
        <Outlet />
      </div>
    </div>
  )
}
