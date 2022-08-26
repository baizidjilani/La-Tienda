import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDescription() {
    const params = useParams();
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const res = await fetch(`http://localhost:5000/api/products/find/${params.id}`);
        const data = await res.json();
        setDescription(data);
        setIsLoading(false);
    };
    const addItem = (product) => {
        let cartArray = localStorage.getItem("cart");
        if (cartArray === null) {
          localStorage.setItem("cart", JSON.stringify([{ ...product, inCart: 1 }]));
        } else {
          let updatedCart = JSON.parse(cartArray);
    
          if ( updatedCart.some((item)=> item._id === product._id)){
            updatedCart.map((item, index) => {
                if (item._id === product._id) {
                 return updatedCart[index].inCart += 1;
                }
              });
    
          }
          else {
            updatedCart.push({...product, inCart: 1})
          }
          
          localStorage.setItem("cart",JSON.stringify(updatedCart));
        }
      };

    return (
        <section className="my-4">
           <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="./images/watch.jpg" alt="product" className="w-100"/>
                </div>
                <div className="col-md-6">
                    <div>
                        <h2>{description.title}</h2>
                        <p>{description.desc}</p>
                        <hr />
                        <p className="display-6">&#2547; {description.price}</p>
                        <button type="button" className="btn btn-outline-dark w-100" onClick={() => addItem(description)}>Add to cart</button>
                    </div>
                </div>
            </div>
           </div>
        </section>
    )
}