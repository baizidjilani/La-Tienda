import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/api/products");
    result = await result.json();
    setProducts(result);
  };

  console.warn("products", products);

  const Details = async()=>{
    navigate('/')
  }

  const deleteProduct = async(id)=>{
    let result = await fetch(`http://localhost:5000/api/products/${id}`,{
        method: 'Delete',
    });
    result = await result.json();
    console.warn(result);
    if(result)
    {
        alert("Result is deleted.")
        getProducts();
    }
  };
  

  return (
    <div className="product-list">
        {
            products.map((item,index)=>
            <ul key={item._id}>
            <li>{index+1}</li>
            <li>{item.title}</li>
            <li>{item.desc}</li>
            <li>{item.price}</li>
            <li><button onClick={()=>deleteProduct(item._id)}>Detele</button></li>
            <Link to={"/update/"+item._id}>Update</Link>
            </ul>)
        }
    </div>
  );
}
