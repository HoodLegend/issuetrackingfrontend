import { useState, useRef } from 'react';
import AuthService from '../services/authservice';
import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";


const Signup = () => {  
  
    const form = useRef();
    const checkBtn = useRef();
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
  
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
  
    const handleRegister = (e) => {
      e.preventDefault();
  
      setMessage("");
      setSuccessful(false);
  
      form.current.validateAll();
      console.log(form.current)
  
      if (checkBtn.current.context._errors.length === 0) {
        AuthService.register(name, email, password).then(
          (response) => {
            setMessage(response.data.message);
            setSuccessful(true);
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            setMessage(resMessage);
            setSuccessful(false);
          }
        );
      }
    };


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
                            onSubmit={handleRegister}
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

                                <div className="col-12">
                                  <label
                                    htmlFor="yourUsername"
                                    className="form-label"
                                  >
                                    Username
                                  </label>
                                  <div className="input-group has-validation">
                                    <span
                                      className="input-group-text"
                                      id="inputGroupPrepend"
                                    >
                                      @
                                    </span>
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
                                    <a href="/login">Log in</a>
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

                            <CheckButton
                              style={{ display: "none" }}
                              ref={checkBtn}
                            />
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
 
export default Signup;