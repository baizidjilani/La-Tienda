import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Seller() {
  const [name,setName] = useState("");
  const [username,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [balance,setBalance] = useState("");
  const params = useParams();
  
  const [error, setError]  = React.useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    fetchData();
    fetchBalance();
  }, [])
    
    const fetchData = async () => {
        console.log(params)
        const res = await fetch(`http://localhost:5000/api/suppliers/find/${params.id}`);
        const data = await res.json();
        console.log(data)
        setName(data.name);
        setUserName(data.username);
        setEmail(data.email);
    };
    const fetchBalance = async () => {
        const res_bank = await fetch(`http://localhost:5000/api/userbalance/${params.id}`);
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

                    <form>
                      <div className="form-outline mb-4">
                      <h5 className="text-left">
                        Seller Name: Seller2 
                      </h5>
                      </div>

                      <div className="form-outline mb-4">
                      <h5 className="text-left">
                        Seller Username: Seller2 
                      </h5>
                      </div>

                      <div className="form-outline mb-4">
                      <h5 className="text-left">
                        Seller Email: Seller2 
                      </h5>
                      </div>

                      <div className="form-outline mb-4">
                      <h5 className="text-left">
                        Seller Shopname: Seller2 
                      </h5>
                      </div>

                      <div className="form-outline mb-4">
                      <h5 className="text-left">
                        Seller BankBalance: Seller2 
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
