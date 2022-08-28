import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OpenBankAccount() {
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
    const items = JSON.parse(localStorage.getItem('user'));
    let result  = await fetch(`http://localhost:5000/api/bank/openaccount/${items._id}`, {
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
                      Create Bank Account
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Name"
                          value={cardHolderName} 
                          onChange = {(e) => setName(e.target.value)}
                        />
                        {error && !cardHolderName && <span className="invalid_block">Enter Valid Card Holder Name </span>}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Email"
                          value={email} 
                          onChange = {(e) => setEmail(e.target.value)}
                        />
                        {error && !email && <span className="invalid_block">Enter Valid Email </span>}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Card Number"
                          value={cardNumber} 
                          onChange = {(e) => setcardNumber(e.target.value)}
                        />
                        {error && !cardNumber && <span className="invalid_block">Enter Valid Card Number </span>}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          placeholder="Secret Number"
                          value={secretNumber} 
                          onChange = {(e) => setSecretNumber(e.target.value)}
                        />
                        {error && !secretNumber && <span className="invalid_block">Enter Valid Secret Number </span>}
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          placeholder="Initial Depsit"
                          className="form-control form-control-lg"
                          value={balance} 
                          onChange = {(e) => setBalance(e.target.value)}
                        />
                        {error && !secretNumber && <span className="invalid_block">Enter Valid Initial Deposit</span>}
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={collectBankInformation}
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
