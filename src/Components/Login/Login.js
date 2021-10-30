import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import useAuth from "../../hook/useAuth";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import initializeAuthentication from "../../Firebase/Firebase.init";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

initializeAuthentication();
const provider = new GoogleAuthProvider();

const Login = () => {
  const auth = getAuth();
  const { signInUsingGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const location = useLocation();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const redirect_url = location.state?.from || "/home";

  // for google sign in
  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        const { email, displayName } = result.user;
        const userInfo = {
          name: displayName,
          email: email,
        };
        history.push(redirect_url);
      })
      .finally(() => setIsLoading(false));
  };

  //For gettting email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // For getting password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // For login with email & password
  const handleLogin = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const { email, displayName } = result.user;
        const userInfo = {
          name: displayName,
          email: email,
        };
        setUser(userInfo);
        history.push(redirect_url);
        setError("");
      })
      .catch((error) => {
        const errorMsg = error.message;
        setError(errorMsg);
      });
    e.preventDefault();
  };

  return (
    <div className="login">
      <h2 className="title">Login</h2>
      <div className="form-container">
        <Form onSubmit={handleLogin} className="login-form">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="Your Email"
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              onChange={handlePasswordChange}
              type="password"
              placeholder="Your Password"
            />
          </Form.Group>
          <p style={{ color: "red" }}>{error}</p>
          <Button
            variant="primary"
            id="submit-btn"
            type="submit"
            value="Submit"
            className="login-btn"
          >
            Submit
          </Button>
        </Form>
        <div>
          <h4>OR</h4>
        </div>
        <button
          className="btn btn-dark"
          id="google-btn"
          onClick={handleGoogleLogin}
        >
          Google Sign In
        </button>
        <p className="mb-5">
          new here?{" "}
          <Link to="/register" style={{ color: "red" }}>
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
