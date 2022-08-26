import React, {useEffect, useState} from "react";
import { Link, useNavigate,useParams } from "react-router-dom";


export default function UserProfile() {
  const [name,setName] = useState("");
  const [username,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [balance,setBalance] = useState("");
  const params = useParams();
  
  const [error, setError]  = React.useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    fetchData();
    // fetchBalnce();
  })
    
    const fetchData = async () => {
        console.log(params)
        const res = await fetch(`http://localhost:5000/api/users/find/${params.id}`);
        const data = await res.json();
        console.log(params)
        setName(data.name);
        setUserName(data.username);
        setEmail(data.email);
    };
    const fetchBalnce = async () => {
        const res_bank = await fetch(`http://localhost:5000/api/userbalance/${params.id}`);
        const data_bank = await res_bank.json();
        setBalance(data_bank.balance);
    };
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
                      User Profile
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                      <h5 className="text-left">
                        Name: {name} 
                      </h5>
                      </div>

                      <div className="form-outline mb-4">
                      <h5 className="text-left">
                        Username: {username}
                      </h5>
                      </div>

                      <div className="form-outline mb-4">
                      <h5 className="text-left">
                        Email: {email}
                      </h5>
                      </div>

                      <div className="form-outline mb-4">
                      <h5 className="text-left">
                        BankBalance: {balance} 
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
