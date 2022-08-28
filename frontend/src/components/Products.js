import Banners from "./Banners";
import "./admin.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
    setIsLoading(false);
  };
  const addItem = (product) => {
    let cartArray = localStorage.getItem("cart");
    if (cartArray === null) {
      localStorage.setItem("cart", JSON.stringify([{ ...product, inCart: 1 }]));
    } else {
      let updatedCart = JSON.parse(cartArray);

      if (updatedCart.some((item) => item._id === product._id)) {
        updatedCart.map((item, index) => {
          if (item._id === product._id) {
            return updatedCart[index].inCart += 1;
          }
        });

      }
      else {
        updatedCart.push({ ...product, inCart: 1 })
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  return (
    <>
      <Banners />
      <h1 className="text-dark text-center my-5">Products</h1>
      <section className="mb-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((items) => {
              return (
                <div className="col" key={items._id}>
                  <div
                    className="card"
                    style={{ padding: "0px" }}
                    id="product-card"
                  >
                    <Link to={`/${items._id}`}>
                      <img src={`http://localhost:5000/uploads/${items.img}`} className="card-img-top" alt={items.img} />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title fw-bolder" style={{ color: "#9A616D" }}>
                        {items.title}
                      </h5>
                      <p className="card-text fw-bold text-secondary">
                        Price : &#2547; {items.price}
                      </p>
                      <button
                        type="button"
                        className="btn btn-outline-dark w-100"
                        onClick={() => addItem(items)}
                      >
                        Add to cart
                      </button>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
