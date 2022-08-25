import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OpenBankAccount() {
  const [cardHolderName,setName] = useState("");
  const [email,setEmail] = useState("");
  const [cardNumber,setcardNumber] = useState("");
  const [secretNumber,setSecretNumber] = useState("");
  const [balance,setBalance] = useState("");
  const navigate = useNavigate();
  const collectBankInformation = async()=>{
    console.warn(cardHolderName,email, cardNumber,secretNumber,balance);
    let result  = await fetch("http://localhost:5000/api/bank/openaccount", {
      method: 'post',
      body: JSON.stringify({cardHolderName,email,cardNumber,secretNumber,balance}),
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
                      Create an account
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          value={cardHolderName} 
                          onChange = {(e) => setName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Your Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          value={email} 
                          onChange = {(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          value={cardNumber} 
                          onChange = {(e) => setcardNumber(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Card Number
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          value={secretNumber} 
                          onChange = {(e) => setSecretNumber(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Secret Number
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          value={balance} 
                          onChange = {(e) => setBalance(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Initial Deposit
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <a href="/" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
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
