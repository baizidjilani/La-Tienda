import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [name,setName] = useState("");
  const [username,setusername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [error, setError]  = React.useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if (auth){navigate('/')}
  })
  const collectData = async()=>{
    console.warn(name,username,email, password,confirmPassword);
    if(!name || !username || !email || !password || !confirmPassword)
    {
        setError(true);
        return false;
    }
    let result  = await fetch("http://localhost:5000/api/auth/register", {
      method: 'post',
      body: JSON.stringify({name,username,email,password,confirmPassword}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result))
    navigate('/openbankaccount')
  }
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              placeholder="Name"
                              value={name} 
                              onChange = {(e) => setName(e.target.value)}
                            />
                            {error && !name && <span className="invalid_block">Enter Valid Name </span>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              placeholder="User Name"
                              value={username} 
                              onChange = {(e) => setusername(e.target.value)}
                            />
                            {error && !username && <span className="invalid_block">Enter Valid Username </span>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              placeholder="Email"
                              value={email} 
                              onChange = {(e) => setEmail(e.target.value)}
                            />
                            {error && !email && <span className="invalid_block">Enter Valid Email </span>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4d"
                              className="form-control"
                              placeholder="Password"
                              value={password} 
                              onChange = {(e) => setPassword(e.target.value)}
                            />
                            {error && !password && <span className="invalid_block">Enter Valid Password </span>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              placeholder="Confirm Password"
                              value={confirmPassword} 
                              onChange = {(e) => setConfirmPassword(e.target.value)}
                            />
                            {error && !confirmPassword && <span className="invalid_block">Your Password is Incorrect </span>}
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            onClick={collectData}
                          >
                            <h3>Register</h3>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        alt="login form"
                        className="img-fluid"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
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