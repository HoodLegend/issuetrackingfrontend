import logo from '../images/logo.jpeg';
import { Main } from '../assets/js/main.js'
import { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import 'remixicon/fonts/remixicon.css';
import 'simple-datatables/src/css/style.css'
import '../css/style.css';
import { parseJwt, handleLogError } from '../misc/Helpers';
import { Navigate } from 'react-router-dom';
import { Alert } from 'bootstrap';
import { issueApi } from '../misc/issueApi'
import { useAuth } from '../authcontext/AuthContext.js';



function Login () {


  const { userIsAuthenticated, userLogin } = useAuth();
  

  useEffect(() => {
    Main();
    return () => {
        // This is an empty function since we have no specific cleanup tasks
      };
});

  const [username, setUsername] = useState('');
  const [password, setPassword ] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e, { name, value}) => {
    if (name === 'username') {
      setUsername(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    

    if (!(username && password)) {
      setIsError(true)
      return
    }

    try {
      const response = await issueApi.authenticate(username, password)
      const { accessToken } = response.data
      const data = parseJwt(accessToken)
      const authenticatedUser = { data, accessToken }

      userLogin(authenticatedUser)

      setUsername('')
      setPassword('')
      setIsError(false)
    } catch (error) {
      handleLogError(error)
      setIsError(true)
    }
  }

  if (userIsAuthenticated()) {
    return <Navigate to={'/'} />
  }


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

                        <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                          <div className="col-12">
                            <label className="form-label">
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
                                name="username"
                                className="form-control"
                                id="yourUsername"
                                required
                                placeholder="Enter Email.."
                                onChange={handleInputChange}
                                value={username}
                              />
                              <div className="invalid-feedback">
                                Please enter your username
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <label className="form-label">
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              id="yourPassword"
                              required
                              placeholder="Enter Password"
                              onChange={handleInputChange}
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
                              <label
                                className="form-check-label"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                            >
                              Login
                            </button>
                          </div>
                          <div className="col-12">
                            <p className="small mb-0">
                              Don't have account?{" "}
                              <a href="/signup">
                                Create an account
                              </a>
                              {isError && <Alert />}
                            </p>
                          </div>
                        </form>
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
          href="/"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </div>
    );
}
 
export default Login;