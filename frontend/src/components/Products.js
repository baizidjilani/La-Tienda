import Banners from "./Banners";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

export default function Products() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/api/products');
        const data = await res.json();
        console.log(data);
        setProducts(data);
        setIsLoading(false);
    };
    return (
        <>
            <Banners />
            <h1 className="text-dark text-center my-5">Products</h1>
            <section className="mb-5">
                <div className='container'>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            products.map(items => {
                                return (
                                    <div className="col" key={items._id}>
                                        <Link to = {`/${items._id}`}>
                                            <div className="card h-100" style={{ 'padding': '0px' }} id ='product-card'>
                                                <img src='./assets/images/watch.jpg' className="card-img-top" alt={items.img} />
                                                <div className="card-body">
                                                    <h5 className="card-title fw-bolder text-dark">{items.title}</h5>
                                                    <p className="card-text fw-bold text-dark">Price : $ {items.price}</p>
                                                    <button type="button" className="btn btn-outline-dark w-100">Add to cart</button>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}