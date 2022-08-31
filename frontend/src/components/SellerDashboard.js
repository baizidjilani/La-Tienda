import React, { useEffect, useState } from "react";
export default function SellerDashboard() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [balance,setBalance] = useState("");
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const res_orders = await fetch('http://localhost:5000/api/userorders/');
        const data_orders = await res_orders.json();
        setOrders(data_orders);

        const res_products = await fetch("http://localhost:4000/api/products");
        const data_products = await res_products.json();
        setProducts(data_products);

        const items = JSON.parse(localStorage.getItem('user'));
        console.log(items._id)
        const res_bank = await fetch(`http://localhost:7000/api/userbalance/${items._id}`);
        const data_bank = await res_bank.json();
        console.log(data_bank);
        setBalance(data_bank);

    };

    return(
        <main className="main-container">
        <div className="main-title">
          <p className="font-weight-bold">DASHBOARD</p>
        </div>

        <div className="main-cards">

          <div className="card">
            <div className="card-inner">
              <h4 className="text-primary">Total Orders : {orders.length}</h4>
              <span className="material-icons-outlined text-blue">inventory_2</span>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <h4 className="text-primary">Total Products: {products.length}</h4>
              <span className="material-icons-outlined text-orange">add_shopping_cart</span>
            </div>
          </div>

          <div className="card">
            <div className="card-inner">
              <h4 className="text-primary">Seller Bank Balance: {balance}</h4>
            </div>
          </div>

          
        </div>
      </main>
    )
}