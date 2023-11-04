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
            <div class="container">
              <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                      <div class="d-flex justify-content-center py-4">
                        <a
                          href="index.html"
                          class="logo d-flex align-items-center w-auto"
                        >
                          <img src="assets/img/logo.png" alt="" />
                          <span class="d-none d-lg-block">Turing Foods</span>
                        </a>
                      </div>

                      <div class="card mb-3">
                        <div class="card-body">
                          <div class="pt-4 pb-2">
                            <h5 class="card-title text-center pb-0 fs-4">
                              Create an Account
                            </h5>
                            <p class="text-center small">
                              Enter your personal details to create account
                            </p>
                          </div>

                          <form class="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>

                            <div class="col-12">
                              <label for="yourEmail" class="form-label">
                                Email
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="yourEmail"
                                required
                                onChange={handleInputChange}
                                value={email}
                              />
                              <div class="invalid-feedback">
                                Please enter a valid Email adddress!
                              </div>
                            </div>

                            <div class="col-12">
                              <label for="yourUsername" class="form-label">
                                Username
                              </label>
                              <div class="input-group has-validation">
                                <span
                                  class="input-group-text"
                                  id="inputGroupPrepend"
                                >
                                  @
                                </span>
                                <input
                                  type="text"
                                  name="username"
                                  class="form-control"
                                  id="yourUsername"
                                  required
                                  onChange={handleInputChange}
                                  value={username}
                                />
                                <div class="invalid-feedback">
                                  Please choose a username.
                                </div>
                              </div>
                            </div>

                            <div class="col-12">
                              <label for="yourPassword" class="form-label">
                                Password
                              </label>
                              <input
                                type="password"
                                name="password"
                                class="form-control"
                                id="yourPassword"
                                required
                                onChange={handleInputChange}
                                value={password}
                              />
                              <div class="invalid-feedback">
                                Please enter your password!
                              </div>
                            </div>

                            <div class="col-12">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  name="terms"
                                  type="checkbox"
                                  value=""
                                  id="acceptTerms"
                                  required
                                />
                                <label
                                  class="form-check-label"
                                  for="acceptTerms"
                                >
                                  I agree and accept the{" "}
                                  <a href="/">terms and conditions</a>
                                </label>
                                <div class="invalid-feedback">
                                  You must agree before submitting.
                                </div>
                              </div>
                            </div>
                            <div class="col-12">
                              <button
                                class="btn btn-primary w-100"
                                type="submit"
                              >
                                Create Account
                              </button>
                            </div>
                            <div class="col-12">
                              <p class="small mb-0">
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