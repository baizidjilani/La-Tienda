import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SellerAddProduct() {
  const [title,setTitle] = useState("");
  const [desc,setDescription] = useState("");
  const [img,setImage] = useState("No Image");
  const [categories,setCategories] = useState("");
  const [size,setSize] = useState("");
  const [color,setColor] = useState("");
  const [price,setPrice] = useState("");
  const [error, setError]  = React.useState(false);
  const navigate = useNavigate();
  const AddProduct = async()=>{
    if(!title || !desc || !categories || !size || !color || !price)
    {
        setError(true);
        return false;
    }
    console.warn(title,desc,img, categories,size,color, price);
    const  userAccessToken = JSON.parse(localStorage.getItem('user')).accessToken;
    console.warn(userAccessToken)
    let result  = await fetch("http://localhost:5000/api/products", {
      method: 'post',
      body: JSON.stringify({title,desc,img, categories,size,color, price}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    navigate('/')
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
                      Add a Product
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          value={title} 
                          onChange = {(e) => setTitle(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Product Title
                        </label>
                        {error && !title && <span className="invalid_block">Enter Valid Title </span>}
                      </div>
                      

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          value={desc} 
                          onChange = {(e) => setDescription(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Enter Describtion
                        </label>
                        {error && !desc && <span className="invalid_block">Enter Valid Description </span>}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          value={img} 
                          onChange = {(e) => setImage(e.target.value)}
                        />
                        <div class="mb-3">
                            <label htmlFor="formFile" class="form-label">Input File</label>
                            <input class="form-control" type="file" id="formFile"/>
                        </div>
                        {error && !img && <span className="invalid_block">Enter Valid Image </span>}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          value={categories} 
                          onChange = {(e) => setCategories(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Add Categories
                        </label>
                        {error && !categories && <span className="invalid_block">Enter Valid Categories </span>}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          value={size} 
                          onChange = {(e) => setSize(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Set Size
                        </label>
                        {error && !size && <span className="invalid_block">Enter Valid Size </span>}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          value={color} 
                          onChange = {(e) => setColor(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Set Color
                        </label>
                        {error && !color && <span className="invalid_block">Enter Valid Color </span>}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          value={price} 
                          onChange = {(e) => setPrice(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Set Price
                        </label>
                        {error && !price && <span className="invalid_block">Enter Valid Price </span>}
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          onClick={AddProduct}
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
