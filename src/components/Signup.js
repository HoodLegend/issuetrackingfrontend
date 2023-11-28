import { useState, useRef } from 'react';
import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import  PropTypes from 'prop-types';
import useToken from './useToken';


function Signup ({ setToken }) {  
    

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();
  
    const onChangeName = (e) => {
      const name = e.target.value;
      setName(name);
    };
  
    const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
  
    async function RegisterUser (credentials) {
      return fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
        .then(data =>{
            if(!data.ok){
              throw new Error("could not fetch the data from API!")
            }
         data.json()})
     }


     const handleSignup = async e => {
      e.preventDefault();
      const token = await RegisterUser({
        email,
        password,
        name
      });
      setToken(token);
     }
    
    


      return (
        <>
          <main>
            <div className="container">
              <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                      <div className="d-flex justify-content-center py-4">
                        <a
                          href="index.html"
                          className="logo d-flex align-items-center w-auto"
                        >
                          <img src="assets/img/logo.png" alt="" />
                          <span className="d-none d-lg-block">
                            Turing Foods
                          </span>
                        </a>
                      </div>

                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="pt-4 pb-2">
                            <h5 className="card-title text-center pb-0 fs-4">
                              Create an Account
                            </h5>
                            <p className="text-center small">
                              Enter your personal details to create account
                            </p>
                          </div>

                          <Form
                            className="row g-3 needs-validation"
                            noValidate
                            onSubmit={handleSignup}
                          >
                            {!successful && (
                              <div>
                                <div className="col-12">
                                  <label
                                    htmlFor="yourEmail"
                                    className="form-label"
                                  >
                                    Email
                                  </label>
                                  <div className="input-group has-validation">
                                    <span
                                      className="input-group-text"
                                      id="inputGroupPrepend"
                                    >
                                      @
                                    </span>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="yourEmail"
                                    name="email"
                                    required
                                    onChange={onChangeEmail}
                                    value={email}
                                  />
                                  <div className="invalid-feedback">
                                    Please enter a valid Email adddress!
                                  </div>
                                  </div>
                                </div>

                                <div className="col-12">
                                  <label
                                    htmlFor="yourUsername"
                                    className="form-label"
                                  >
                                    Username
                                  </label>

                                    <input
                                      type="text"
                                      name="name"
                                      className="form-control"
                                      id="yourUsername"
                                      required
                                      onChange={onChangeName}
                                      value={name}
                                    />
                                    <div className="invalid-feedback">
                                      Please choose a name.
                                    </div>
                                </div>

                                <div className="col-12">
                                  <label
                                    htmlFor="yourPassword"
                                    className="form-label"
                                  >
                                    Password
                                  </label>
                                  <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="yourPassword"
                                    required
                                    onChange={onChangePassword}
                                    value={password}
                                  />
                                  <div className="invalid-feedback">
                                    Please enter your password!
                                  </div>
                                </div>

                                <div className="col-12">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      name="terms"
                                      type="checkbox"
                                      value=""
                                      id="acceptTerms"
                                      required
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="acceptTerms"
                                    >
                                      I agree and accept the{" "}
                                      <a href="/">terms and conditions</a>
                                    </label>
                                    <div className="invalid-feedback">
                                      You must agree before submitting.
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <button
                                    className="btn btn-primary w-100"
                                    type="submit"
                                  >
                                    Create Account
                                  </button>
                                </div>
                                <div className="col-12">
                                  <p className="small mb-0">
                                    Already have an account?{" "}
                                    <a href="/signin">Log in</a>
                                  </p>
                                </div>
                              </div>
                            )}

                            {message && (
                              <div className="form-group">
                                <div
                                  className={
                                    successful
                                      ? "alert alert-success"
                                      : "alert alert-danger"
                                  }
                                  role="alert"
                                >
                                  {message}
                                </div>
                              </div>
                            )}
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </>
      );
}

Signup.propTypes = {
  setToken: PropTypes.func.isRequired
}
 
 
export default Signup;