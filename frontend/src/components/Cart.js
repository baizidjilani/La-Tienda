import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

export default function Cart(props) {
  const [cartProducts, setCartProducts] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    const cartItems = localStorage.getItem("cart");
    if (cartItems) {
      setCartProducts(JSON.parse(cartItems));
    }
  }, []);
  const minusQuantity = (id) => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems.some((item) => item._id === id)) {
      cartItems.map((item, index) => {
        if (item._id === id) {
          return (cartItems[index].inCart -= 1);
        }
      });
    }
    setCartProducts(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  const plusQuantity = (id) => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems.some((item) => item._id === id)) {
      cartItems.map((item, index) => {
        if (item._id === id) {
          return (cartItems[index].inCart += 1);
        }
      });
    }
    setCartProducts(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  const removeItem = (id) => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems.some((item) => item._id === id)) {
      cartItems.map((item, index) => {
        if (item._id === id) {
          return cartItems.splice(index, 1);
        }
      });
    }
    setCartProducts(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };


  return (
    <div className="container-fluid py-3">
      <div className="row justify-content-center">
        <h4 className="text-center py-3 text-decoration-underline">My Cart</h4>
        <div className="col-md-8">
          <div>
            <table className="table table-light m-0">
              <tbody>
                {cartProducts.map((item, index) => {
                  return (
                    <tr key={index} className="align-middle">
                      <td>
                        <img
                          src={`http://localhost:5000/uploads/${item.img}`}
                          className="img-cart"
                          alt={item.title}
                          style={{ width: "200px" }}
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>&#2547;{item.price}</td>
                      <td>
                        Quantity:
                        <button
                          onClick={() => minusQuantity(item._id)}
                          className="btn btn-outline-dark ms-1"
                        >
                          -
                        </button>
                        {item.inCart}
                        <button
                          onClick={() => plusQuantity(item._id)}
                          className="btn btn-outline-dark ms-1"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item._id)}
                          className="btn btn-outline-danger ms-5"
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <h3 className="text-start text-dark">Order summary</h3>
            <ul className="list-group list-group-flush text-start mb-3">
              <li className="list-group-item">
                Total Item :{" "}
                {cartProducts.reduce(
                  (prevVal, currentVal) => (prevVal += currentVal.inCart),
                  0
                )}
              </li>
              <li className="list-group-item">
                Sub Total: &#2547;{" "}
                {cartProducts.reduce(
                  (prevVal, currentVal) =>
                    (prevVal += currentVal.inCart * currentVal.price),
                  0
                )}
              </li>
              <li className="list-group-item">Shipping : &#2547; 50</li>
              <li className="list-group-item">
                Order total: &#2547;{" "}
                {cartProducts.reduce(
                  (prevVal, currentVal) =>
                    (prevVal += currentVal.inCart * currentVal.price),
                  0
                ) + 50}{" "}
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-outline-dark w-100"
              onClick={() =>  navigate("/checkout")}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
