import logo from '../images/logo.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import 'remixicon/fonts/remixicon.css';
import 'simple-datatables/src/css/style.css'
import '../css/style.css';
import { useRef, useState} from 'react'; 
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/authservice';
import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";



function Login () {

  
    const navigate = useNavigate();
  
    const form = useRef();
    const checkBtn = useRef();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
  
    const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      setMessage("");
      setLoading(true);
  
      form.current.validateAll();
  
      if (checkBtn.current.context._errors.length === 0) {
        AuthService.login(email, password)
        .then(
          () => {
            navigate("/dashboard");
            window.location.reload();
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            setLoading(false);
            setMessage(resMessage);
          }
        );
      
      } else {
        setLoading(false);
      }
    };


    return (
      <div>
        <main>
          <div className="container">
            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex justify-content-center py-4">
                      <a
                        href="/"
                        className="logo d-flex align-items-center w-auto"
                      >
                        <img src={logo} alt="company-logo" />
                        <h4>Turing Foods</h4>
                      </a>
                    </div>
                    {/* End Logo */}

                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            Sign In
                          </h5>
                        </div>

                        <Form
                          className="row g-3 needs-validation"
                          noValidate
                          onSubmit={handleLogin}
                          ref={form}
                        >
                          <div className="col-12">
                            <label className="form-label">Email</label>
                            <div className="input-group has-validation">
                              <span
                                className="input-group-text"
                                id="inputGroupPrepend"
                              >
                                @
                              </span>
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="yourEmail"
                                required
                                placeholder="Enter Email.."
                                onChange={onChangeEmail}
                                value={email}
                              />
                              <div className="invalid-feedback">
                                Please enter your email
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <label className="form-label">Password</label>
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              id="yourPassword"
                              required
                              placeholder="Enter Password"
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
                                type="checkbox"
                                name="remember"
                                value="true"
                                id="rememberMe"
                              />
                              <label className="form-check-label">
                                Remember me
                              </label>
                            </div>
                          </div>
                          {/* <div className="col-12">
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                            >
                              Login
                            </button>
                          </div> */}

                          <div className="form-group">
                            <button
                              className="btn btn-primary btn-block"
                              disabled={loading}
                            >
                              {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                              )}
                              <span>Login</span>
                            </button>
                          </div>

                          <div className="col-12">
                            <p className="small mb-0">
                              Don't have account?{" "}
                              <a href="/signup">Create an account</a>
                            </p>
                          </div>
                          {message && (
                            <p className="alert alert-danger">{message}</p>
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
        {/* End #main */}

        <a
          href="/login"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </div>
    );
}
 
export default Login;