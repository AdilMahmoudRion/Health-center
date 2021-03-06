import React from "react";
import useAuth from "../../../hooks/useAuth";
import './Login.css'
import logo from "../logo/g-logo.png";


const Login = () => {
  const {
    signInUsingGoogle,
    handleRegistration,
    isLogin,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    toggleLogin,
    handleResetPassword,
    error
  } = useAuth();
  return (
    <div id="log">
      <h1>log in</h1>

      <div>
        <form className="login-form p-4" onSubmit={handleRegistration}>
          <h1 className="pt-1 pb-4">Please {isLogin ? "Login" : "Register"}</h1>

          {!isLogin && (
            <div className="row mb-3">
              <label
                htmlFor="inputName"
                className="col-sm-2 col-form-label input-field mt-2"
              >
                Name:
              </label>

              <div className="col-sm-10 input-field">
                <input
                  type="text"
                  onBlur={handleNameChange}
                  className="form-control"
                  id="inputName"
                  placeholder="Your Name"
                />
              </div>
            </div>
          )}

          <div className="row mb-3">
            <label
              htmlFor="inputEmail3"
              className="col-sm-2 col-form-label input-field mt-2"
            >
              Email:
            </label>
            <div className="col-sm-10 input-field">
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                id="inputEmail3"
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <label
              htmlFor="inputPassword3"
              className="col-sm-2 col-form-label input-field mt-2"
            >
              Password:
            </label>
            <div className="col-sm-10 input-field">
              <input
                type="password"
                onBlur={handlePasswordChange}
                className="form-control"
                id="inputPassword3"
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input
                  onChange={toggleLogin}
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Already Registered?
                </label>
              </div>
            </div>
          </div>

          <div className="row mb-3 text-danger">{error}</div>
          <div className="action">
            <button className="button-grp" type="submit">
              {isLogin ? "Login" : "Register"}
            </button>
            <button
              type="button"
              onClick={handleResetPassword}
              className="button-grp rst-btn"
            >
              Reset Password
            </button>
          </div>
          <div className="action">
            <button className="button-grp" onClick={signInUsingGoogle}>
              <img className="logo" src={logo} alt="logo" />
              Continue With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
