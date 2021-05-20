import React, { useState } from "react";
import "./Login.css";
import signin, { signup } from "../utils.js";
import { useHistory } from "react-router-dom";
function Login(props) {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordSecond, setPasswordSecond] = useState("");

  const history = useHistory();
  return (
    <div className="login__page">
      <h2>{login ? "Sign In" : "Sign Up"}</h2>
      <div>
        <div>
          <form
            onSubmit={(e) => {
              if (login) {
                try {
                  signin(email, password);
                } catch (e) {
                  alert(e);
                }
              } else {
                signup(email, password);
              }
            }}
          >
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control input__size"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control input__size"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {!login && (
              <div className="form-group">
                <label for="exampleInputPassword1">Retype Password</label>
                <input
                  type="password"
                  className="form-control input__size"
                  id="exampleInputPassword1"
                  placeholder="Re Enter Password"
                  value={passwordSecond}
                  onChange={(e) => setPasswordSecond(e.target.value)}
                  required
                />
              </div>
            )}
            {login ? (
              <p>
                Don't Have an account?{" "}
                <span
                  className="span__text"
                  onClick={() => setLogin((prev) => !prev)}
                >
                  Sign Up
                </span>
              </p>
            ) : (
              <p>
                Already Have a account?{" "}
                <span
                  className="span__text"
                  onClick={() => setLogin((prev) => !prev)}
                >
                  Sign In
                </span>
              </p>
            )}
            <button type="submit" className="btn btn-primary">
              Lets Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
