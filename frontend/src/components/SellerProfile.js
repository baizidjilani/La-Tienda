import { Link, useNavigate,useParams } from "react-router-dom";
import React, {useEffect, useState} from "react";

export default function Seller() {
  const [name,setName] = useState("");
  const [username,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [shopname,setShopName] = useState("");
  const [balance,setBalance] = useState("");
  const params = useParams();
  
  const [error, setError]  = React.useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    fetchData();
    // fetchBalance();
  }, [])
    
    const fetchData = async () => {
      const items = JSON.parse(localStorage.getItem('user'));
      const res = await fetch(`http://localhost:5000/api/suppliers/find/${items._id}`);
      const data = await res.json();
      // console.log(data)
      setName(data.name);
      setUserName(data.username);
      setShopName(data.shopname);
      setEmail(data.email);
    };
    const fetchBalance = async () => {
        const items = JSON.parse(localStorage.getItem('user'));
        console.log(items._id)
        const res_bank = await fetch(`http://localhost:7000/api/userbalance/${items._id}`);
        const data_bank = await res_bank.json();
        console.log(data_bank);
        setBalance(data_bank);
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
                      Seller Profile
                    </h2>

                    <form className="text-start">
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
                        ShopName: {shopname}
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
  );
}
