import React, { useContext, useLayoutEffect } from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const [{ user }, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();
  // useLayoutEffect(() => {
  //   if (user) {
  //     navigate("/client");
  //   }
  // });
  const authenticateUser = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const _user = result.user;
        // loginUser = user;
        console.log(_user);
        dispatch({ type: "SET_USER", user: _user });
        navigate("/");
        console.log(`user set successfully ${user}`);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          className="login__logo"
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
        />
        <div className="login__text">
          <h1>Sign in to Coders Buzz</h1>
          <p className="login__text_domain">coders.slack.com</p>
        </div>
        <Button
          variant="contained"
          color="success"
          className="login__button"
          onClick={authenticateUser}
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
