import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./admin.css";


export default function Admin() {
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
            <Link to='/admin/products'>
              <li className="sidebar-list-item">
                <span className="material-icons-outlined">inventory_2</span> Products
              </li>
            </Link>
            <Link to='/admin/orders'>
              <li className="sidebar-list-item">
                <span className="material-icons-outlined">add_shopping_cart</span> Purchase Orders
              </li>
            </Link>
            <Link to='/admin/users'>
              <li className="sidebar-list-item">
                <span className="material-icons-outlined">group</span> Users
              </li>
            </Link>
            <Link to='/admin/sellers'>
              <li className="sidebar-list-item">
                <span className="material-icons-outlined">person</span> Sellers
              </li>
            </Link>
          </ul>
        </aside>
        <Outlet />
      </div>
    </div>
  )
}
