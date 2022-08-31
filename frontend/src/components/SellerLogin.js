import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [username,setusername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async()=>{
    console.warn(username,password);
    let result  = await fetch("http://localhost:5000/api/auth/supplier/login", {
      method: 'post',
      body: JSON.stringify({username,password}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    if(result.username)
    {
      localStorage.setItem("user",JSON.stringify(result))
      navigate('/')
    }
    else{
      alert("Please Enter Correct username or password!!")
    }
    navigate('/seller')
  }
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#ece4e4"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: "1rem"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
            <img src="http://localhost:3000/images/8_unsplash.jpg"
                alt="login form" className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                    <span className="h1 fw-bold mb-0">Log In</span>
                  </div>

                  <div className="form-outline mb-4">
                    <input 
                      type="email" 
                      id="form2Example17" 
                      className="form-control form-control-lg" 
                      placeholder='Username'
                      value={username}
                      onChange = {(e) => setusername(e.target.value)} />
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" 
                    id="form2Example27" 
                    className="form-control form-control-lg"
                    placeholder='Password'
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)} />
                  </div>

                  <div className="pt-1 mb-4">
                    
                    <button 
                      className="btn btn-dark btn-lg btn-block w-100" 
                      type="button" 
                      onClick={handleLogin}>
                        Login
                    </button>
                  </div>

                  <p className="mb-5 pb-lg-2" style={{color: "393f81"}}>Don't have an account? <Link to="/seller/signup"
                      style={{color: "#393f81"}}>Register as a Seller </Link></p>
                  
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
