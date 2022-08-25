import React, {useEffect, useState} from "react";
import { Link, useNavigate,useParams } from "react-router-dom";

export default function UpdateProduct() {
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

  const UpdateProduct = async()=>{
    console.warn(title,desc,img,categories,size,color,price)
    let result = await fetch(`http://localhost:5000/api/products/${params.id}`,{
        method: 'Put',
        body: JSON.stringify({title,desc,img, categories,size,color, price}),
        headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    if(result)
    {
        alert("Result is deleted.")
    }
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
                      Update a Product
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Set Title"
                          value={title} 
                          onChange = {(e) => setTitle(e.target.value)}
                        />
                      </div>
                      

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Enter Description"
                          value={desc} 
                          onChange = {(e) => setDescription(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Set Image"
                          value={img} 
                          onChange = {(e) => setImage(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Add Categories"
                          value={categories} 
                          onChange = {(e) => setCategories(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Set Size"
                          value={size} 
                          onChange = {(e) => setSize(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Set Color"
                          value={color} 
                          onChange = {(e) => setColor(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Set Price"
                          value={price} 
                          onChange = {(e) => setPrice(e.target.value)}
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          onClick={UpdateProduct}
                        >
                          Submit
                        </button>
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
  );
}
