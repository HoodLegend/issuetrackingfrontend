import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../authcontext/AuthContext';
import { parseJwt, handleLogError } from '../misc/Helpers';
import { issueApi } from '../misc/issueApi';
import { Alert } from 'bootstrap';

const Signup = () => {

    // const Auth = useAuth();
    // const isLoggedIn = Auth.userIsAuthenticated()
    const { userIsAuthenticated, userLogin } = useAuth();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (e, { name, value }) => {

        if (name === 'username') {
          setUsername(value)
        } else if (name === 'password') {
          setPassword(value)
        } else if (name === 'email') {
          setEmail(value)
        }

    
      }

      const handleSubmit = async (e) => {
        e.preventDefault()
    
        if (!(username && password && email)) {
          setIsError(true)
          setErrorMessage('Please, inform all fields!')
          return
        }
    
        const user = { username, password, email }
    
        try {
          const response = await issueApi.signup(user)
          const { accessToken } = response.data
          const data = parseJwt(accessToken)
          const authenticatedUser = { data, accessToken }
    
          userLogin(authenticatedUser)
    
          setUsername('')
          setPassword('')
          setEmail('')
          setIsError(false)
          setErrorMessage('')
        } catch (error) {
          handleLogError(error)
          if (error.response && error.response.data) {
            const errorData = error.response.data
            let errorMessage = 'Invalid fields'
            if (errorData.status === 409) {
              errorMessage = errorData.message
            } else if (errorData.status === 400) {
              errorMessage = errorData.errors[0].defaultMessage
            }
            setIsError(true)
            setErrorMessage(errorMessage)
          }
        }
      }
    
      if (userIsAuthenticated()) {
        return <Navigate to="/" />;
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
                          <span className="d-none d-lg-block">Turing Foods</span>
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

                          <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>

                            <div className="col-12">
                              <label htmlFor="yourEmail" className="form-label">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="yourEmail"
                                name='email'
                                required
                                onChange={(e) => handleInputChange(e, { name: "email", value: e.target.value })}
                                value={email}
                              />
                              <div className="invalid-feedback">
                                Please enter a valid Email adddress!
                              </div>
                            </div>

                            <div className="col-12">
                              <label htmlFor="yourUsername" className="form-label">
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
                                  onChange={(e) => handleInputChange(e, { name: "username", value: e.target.value })}
                                  value={username}
                                />
                                <div className="invalid-feedback">
                                  Please choose a username.
                                </div>
                              </div>
                            </div>

                            <div className="col-12">
                              <label htmlFor="yourPassword" className="form-label">
                                Password
                              </label>
                              <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="yourPassword"
                                required
                                onChange={(e) => handleInputChange(e, { name: "password", value: e.target.value })}
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
                            { isError && <Alert className="alert alert-danger"/>}
                          </form>
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