import { useState, useEffect } from "react";


export default function Cart(props) {
    const [cartProducts, setCartProducts] = useState([]);
    let cartItems = localStorage.getItem("cart");
    useEffect(() => {

    }, [cartItems])
    if (cartItems) {
      cartItems = JSON.parse(cartItems);
    }else {
      cartItems = [];
    }
    const minusQuantity = id => {
        if ( cartItems.some((item)=> item._id === id)){
            cartItems.map((item, index) => {
                if (item._id === id) {
                 return cartItems[index].inCart -= 1;
                }
              });
    
          }
          localStorage.setItem('cart', JSON.stringify(cartItems));
    }
    const plusQuantity = id => {
        if ( cartItems.some((item)=> item._id === id)){
            cartItems.map((item, index) => {
                if (item._id === id) {
                 return cartItems[index].inCart += 1;
                }
              });
    
          }
          localStorage.setItem('cart', JSON.stringify(cartItems));
    }
    const removeItem = id => {
        if ( cartItems.some((item)=> item._id === id)){
            cartItems.map((item, index) => {
                if (item._id === id) {
                 return cartItems.splice(index, 1);
                }
              });
    
          }
          localStorage.setItem('cart', JSON.stringify(cartItems));
    }
    return (
        <div className='container-fluid py-3'>
        <div className="row justify-content-center">
            <h4 className="text-center py-3 text-decoration-underline">My Cart</h4>
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4">
                {/* <div className="d-flex justify-content-center py-3">
                    <p className='position-relative fw-bolder text-title'>Cart <span className="postition-absolute translate-middle rounded-pill badge bg-danger mx-1">{totalUniqueItems}</span></p>
                    <p className='fw-bolder text-title'>Total Items <span className="postition-absolute translate-middle rounded-pill badge bg-success mx-1">{totalItems}</span></p>
                </div> */}
                <div>
                    <table className="table table-light m-0">
                        <tbody>
                            {cartItems.map((item, index) => {
                                return(
                                    <tr key={index} className='align-middle'>
                                        <td><img src={`http://localhost:5000/uploads/${item.img}`} className='img-cart' alt={item.title} style={{'width' : '200px'}} /></td>
                                        <td>{item.title}</td>
                                        <td>${item.price}</td>
                                        <td>Quantity: 
                                            <button onClick={() => minusQuantity(item._id)} className='btn btn-outline-dark ms-1'>-</button>
                                            {item.inCart}
                                            <button onClick={() => plusQuantity(item._id)} className='btn btn-outline-dark ms-1'>+</button>
                                            <button onClick={() => removeItem(item._id)} className='btn btn-outline-danger ms-5'>Remove Item</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                {/* <div className="d-flex justify-content-between py-5">
                    <button onClick={() => emptyCart()} className="btn btn-outline-danger">Clear All</button>
                    <h3>Total Price: ${cartTotal}</h3>
                </div> */}
            </div>
        </div>
    </div>
    );
  }
