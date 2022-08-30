import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";


export default function OrderConfirmation() {



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
  const [tranId, setTranId] = useState("");
  const navigate  = useNavigate()
  useEffect(() => {
      const order = JSON.parse(localStorage.getItem("order"));
      const trans_id = JSON.parse(localStorage.getItem("trans_id"));
      setTranId(trans_id);
      setuserId(order.userId);
      setAddress(order.address);
      setsupplierId(order.supplierId);
      setCardNumber(order.cardNumber);
      setSecretNumber(order.secretNumber);
      setTotalPrice(order.totalPrice);
      setCartProducts(order.setCartProducts);
      setName(order.name);
      setMobileNo(order.mobileNo);
      setEmail(order.email);
      alert("Your Order Has Been Placed Successfully!!!")   
  });

  const PostOrder = async(e)=>{
    navigate('/')
  }
  return (
    <div>
      <h1>Your Order Has Been Submitted</h1>
      <section section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp",
        }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row">
                    <div className="col-md-6">
                    <h1>Order Summery</h1>
                      <form>
                        <div className="form-outline mb-4">
                          <h5 className="text-center">
                            Name: {name} 
                          </h5>
                        </div>
                        <div className="form-outline mb-4">
                           <h5 className="text-left">
                               Email: {email} 
                            </h5>
                        </div>
                        <div className="form-outline mb-4">
                        <h5 className="text-left">
                               Mobile No: {mobileNo} 
                            </h5>
                        </div>
                        <div className="form-outline mb-4">
                        <h5 className="text-left">
                               Transaction Id: {tranId} 
                            </h5>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            onClick={PostOrder}
                          >
                            <h3>Back To Home Page</h3>
                          </button>
                        </div> 
                      </form>
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
