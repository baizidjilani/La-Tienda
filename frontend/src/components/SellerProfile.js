import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Seller() {
  const [cardHolderName,setName] = useState("");
  const [email,setEmail] = useState("");
  const [cardNumber,setcardNumber] = useState("");
  const [secretNumber,setSecretNumber] = useState("");
  const [balance,setBalance] = useState("");
  const [error, setError]  = React.useState(false);
  const navigate = useNavigate();
  const collectBankInformation = async()=>{
    console.warn(cardHolderName,email, cardNumber,secretNumber,balance);
    if(!cardHolderName || !email || !cardNumber || !secretNumber || !balance)
    {
        setError(true);
        return false;
    }
    let result  = await fetch("http://localhost:5000/api/bank/openaccount", {
      method: 'post',
      body: JSON.stringify({cardHolderName,email,cardNumber,secretNumber,balance}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    result = await result.json();
    console.warn(result);
    navigate('/login')
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
