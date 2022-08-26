import React, {useEffect, useState} from "react";
import { Link, useNavigate,useParams } from "react-router-dom";

export default function ProductDetails() {

	const [title,setTitle] = useState("");
	const [desc,setDescription] = useState("");
	const [img,setImage] = useState("No Image");
	const [categories,setCategories] = useState("");
	const [size,setSize] = useState("");
	const [color,setColor] = useState("");
	const [price,setPrice] = useState("");
	const params = useParams();
	const [error, setError]  = React.useState(false);
	const navigate = useNavigate();
  
	useEffect(()=>{
	  getProductDetails();
	},[])
  
	const getProductDetails = async()=>{
	  console.log(params);
	  let result = await fetch(`http://localhost:5000/api/products/find/${params.id}`);
	  result = await result.json();
	  console.warn(result)
	  setTitle(result.title);
	  setDescription(result.desc)
	  setImage(result.img)
	  setCategories(result.categories)
	  setSize(result.size)
	  setColor(result.color)
	  setPrice(result.price)
	}
  return (
    <div>
      
					<section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            "https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp",
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Product Details
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                      <h5 className="text-left">
                        Title: {title}
                      </h5>
                      </div>

                      <div className="form-outline mb-4">
                      <h5 className="text-left">
                        Category: {categories}
                      </h5>
                      </div>

                      <div className="form-outline mb-4">
                      <h5 className="text-left">
                        Size: {size}
                      </h5>
                      </div>

                      <div className="form-outline mb-4">
                      <h5 className="text-left">
                        Price: {price}
                      </h5>
                      </div>

					  <div className="form-outline mb-4">
                      <h5 className="text-left">
                        Description: {color}
                      </h5>
                      </div>
                    </form>
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
