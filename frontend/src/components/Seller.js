import { Link, Outlet , useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from "react";
import "./admin.css";


export default function Seller() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  useEffect(() => {
    navigate('dashboard')
}, []);
  return (
    <div>
      <div className="grid-container">
        <aside id="sidebar">

          <ul className="sidebar-list">
            <Link to='dashboard'>
              <li className="sidebar-list-item">
                <span className="material-icons-outlined">dashboard</span> Dashboard
              </li>
            </Link>
            <Link to='/seller/addproducts'>
              <li className="sidebar-list-item">
                <span className="material-icons-outlined">inventory_2</span>Add Products
              </li>
            </Link>
            <Link to='/seller/products'>
              <li className="sidebar-list-item">
                <span className="material-icons-outlined">add_shopping_cart</span> Orders
              </li>
            </Link>
            <Link to='profile'>
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
