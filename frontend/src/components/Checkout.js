import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Checkout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [secretNumber, setSecretNumber] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [userId, setuserId] = useState("");
  const [supplierId, setsupplierId] = useState("");
  const [cartProducts, setCartProducts] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const auth = localStorage.getItem('user');
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (!auth || !cartItems || cartItems.length < 1) {
      navigate('/');
    } else {
      setuserId(JSON.parse(auth)._id);
      setCartProducts(cartItems);
      setsupplierId(cartItems[0].supplierId);
      setTotalPrice(cartItems.reduce(
        (prevVal, currentVal) =>
          (prevVal += currentVal.inCart * currentVal.price),
        0
      ) + 50)
    }
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await fetch('http://localhost:7000/api/transaction/', {
      method: 'post',
      body: JSON.stringify({ cardNumber, secretNumber, totalPrice, supplierId }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    let trans = await res.json();
    console.log(res.status);

    let transactionId  = trans['Your transaction number'];
    console.log(transactionId);
    localStorage.setItem("trans_id",JSON.stringify(transactionId));


    if (res.status === 201) {
      let res = await fetch(`http://localhost:5000/api/userorders/${userId}`, {
        method: 'post',
        body: JSON.stringify({ name, email, mobileNo, address, totalPrice, cartProducts, userId }),
        headers: {
          'Content-Type': 'application/json'
        }
      });


    let order  = await res.json();
    console.log(order);
    localStorage.setItem("order",JSON.stringify(order));


    let res_order_post = await fetch('http://localhost:4000/api/confirm/order/:id', {
      method: 'post',
      body: JSON.stringify({ name, email, mobileNo, address, cartProducts, totalPrice, supplierId, transactionId }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let order_post  = await res_order_post.json();
    console.log(order_post)


      if (res_order_post.status === 200) {
        alert(`Your order has been placed.
      Transaction id : ${transactionId}`);
        localStorage.removeItem('cart');
        navigate('/orderconfirmation');
      }
    }
  }
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row">
                    <div className="col-md-6">
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <input type="text" required className="form-control" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                          <input type="email" required className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                          <input type="number" required className="form-control" placeholder="Contact no." onChange={(e) => setMobileNo(e.target.value)} />
                        </div>
                        <div className="mb-3">
                          <textarea className="form-control" required placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="mb-3">
                          <input type="number" required className="form-control" placeholder="Card number" onChange={(e) => setCardNumber(e.target.value)} />
                        </div>
                        <div className="mb-3">
                          <input type="password" required className="form-control" placeholder="Secret number" onChange={(e) => setSecretNumber(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-outline-danger w-100">Confirm Order</button>
                      </form>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">ORDER SUMMARY</h3>
                      {
                        cartProducts.map(product => {
                          return (
                            <div key={product._id} className="text-start ms-5 row">
                              <div className="col-4 d-flex justify-content-center align-items-center">
                                <p style={{ 'fontSize': '.8rem' }}>{product.title}</p>
                              </div>
                              <div className="col-4 d-flex justify-content-center align-items-center">
                                X
                              </div>
                              <div className="col-4 d-flex justify-content-center align-items-center">
                                {product.inCart}
                              </div>
                            </div>
                          )
                        })
                      }
                      <p className="text-start fw-bold ms-5">Order Total : &#2547; {totalPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}