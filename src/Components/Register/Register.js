import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider,
    signInWithPopup} from "firebase/auth";
import initializeAuthentication from "../../Firebase/Firebase.init";
import useAuth from "../../hook/useAuth";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Form } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
initializeAuthentication();
const provider = new GoogleAuthProvider();

const Register = () => {
  const { signInUsingGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || '/home';

  //For gettting email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // For getting password
  const handlePasswordChange = (e) => {
    if (e.target.value.length < 6) {
      setError("Please type a password of more than 6 length")
    }
    else {
      setPassword(e.target.value);
    }
  };

  // For registering with email & password
  const handleRegister = (e) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const { email, displayName } = result.user;
      const userInfo = {
        name: displayName,
        email: email,
      };
      setUser(userInfo);
      history.push(redirect_url);
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message; 
});
    
    e.preventDefault();
   
  };
// for google sign in
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      const { email, displayName } = result.user;
      const userInfo = {
        name: displayName,
        email: email,
      };
      history.push(redirect_url);
    });
  };
  return (
    <div className="login">
      <div className="form-container">
        <h2 className="mt-5">Register</h2>

        <Form onSubmit={handleRegister} className="login-form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="Your Email"
            onChange={handleEmailChange}
            />
            
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control onChange={handlePasswordChange} type="password"
            placeholder="Your Password" />
          </Form.Group>
          <p style={{color: "red"}}>{error}</p>
            <Button variant="primary" id="submit-btn" type="submit" value="Submit" className="login-btn" >
              Register
            </Button>
        </Form>
        <div><h4>OR</h4></div>
        <button className="btn btn-dark" id="google-btn" onClick={handleGoogleLogin}>
          Google Sign In
        </button>
        <p className="mb-5">
        Already have an account?<Link to="/login" style={{ color: "red"}}>Login</Link>
        </p>

        
        {/* <form onSubmit={handleRegister}>
          <input  
            onChange={handleEmailChange}
            type="email"
            name=""
            id=""
            placeholder="Your Email"
            required
          />
          <br />
          <input
            onChange={handlePasswordChange}
            type="password"
            name=""
            id=""
            placeholder="Your Password"
            required
          />
          <br />
          <br />
          <input type="submit" value="Register" className="submit-btn"/>
        </form> */}
        {/* <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <div>----------or-------------</div>
        <button onClick={handleGoogleLogin} className="login-btn">Google Sign In</button> */}
      </div>
    </div>
  );
};

export default Register;
