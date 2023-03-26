import React from "react";
import "../styles/sign.css";

function Sign({ user }) {
  const google = () => {
    window.open("http://localhost:3001/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:3001/auth/github", "_self");
  };
  const facebook = () => {
    window.open("http://localhost:3001/auth/facebook", "_self");
  };

  return (
    <>
      <h1 className="heading">Login</h1>
      <div className=" container mt-5 login sign-container">
        <div className="row">
          <div className="col card">
            <div className="card-body">
              {/* <!-- Makes POST request to /login route --> */}
              <form action="/signin" method="POST">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  Login
                </button>
              </form>
            </div>
          </div>

          <div className="col card-v2 mt-3">
            <div
              className="btn btn-block btn-social btn-google row button"
              onClick={google}
            >
              <i className="fab fa-google"></i>
              Sign In with Google
            </div>

            <div
              className="btn btn-block btn-social btn-facebook row button"
              onClick={facebook}
            >
              <i className="fab fa-facebook"></i>
              Sign In with Facebook
            </div>

            <div
              className="btn btn-block btn-social btn-github row button"
              onClick={github}
            >
              <i className="fab fa-github"></i>
              Sign In with github
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sign;
