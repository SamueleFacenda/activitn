import React, { useState } from "react";
import "./Login.css";

import {
  PageContent, 
  PageHeader, 
} from 'grommet';

import LoginComponentTextBar from "../components/LoginInputTextBar";
import SubmitBtn from "../components/SubmitBtn";

/*
 * @returns Component - Return a login page with a prism that rotates to show login, registration, and forgot password 
 */

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const theme = false; // true for dark and false for light 
  // TODO: pass it as props from the parent component

  /* functions that return jsx code */
  const UsernamePasswordBlock = () => {
    // return the username and password input bars
    // TODO: Add a Google login button maybe
    return (
      <>
        <LoginComponentTextBar
          typeInput="text"
          setText={setUserName}
          value={userName}
          placeHolder="Username"
        />
        <LoginComponentTextBar
          typeInput="password"
          setText={setPassword}
          value={password}
          placeHolder="Password"
        />
      </>
    );
  }

  const EmailInputBar = () => {
    // return the email input bar
    return (
      <LoginComponentTextBar
        typeInput="email"
        value={email}
        setText={setEmail}
        placeHolder="Email"
      />
    )
  }

  /* functions for animations */
  const resetInput = () => {
    // method to reset these states (useful when the prism rotates, the input fields should be empty --> start again)
    setUserName("");
    setPassword("");
    setEmail("");
  };

  const rotate = (newOrientation) => {
    // TODO: need to rest 
    // method to rotate the prism
    const rotation = newOrientation === 0 ? 0 : newOrientation === 1 ? -90 : 90;
    const prism = document.querySelector(".prism");
    prism.style.transform = `rotateX(${rotation}deg)`; // rotate the prism
  };

  /* functions for form submission --> invoke backend function */

  const handleLoginSubmit = (event) => {
    event.preventDefault(); // Prevent the default behavior of the form
    console.log("Login:", { userName, password });
    // TODO: Send the data to the server
  };

  const handleRegistrationSubmit = (event) => {
    event.preventDefault(); // Prevent the default behavior of the form
    console.log("Registration:", { userName, password, email });
    // TODO: Send the data to the server
  };

  const handleForgotPasswordSubmit = (event) => {
    event.preventDefault(); // Prevent the default behavior of the form
    console.log("EMAIL FORGOT:", { email });
    // TODO: Send the data to the server
    // check if the email exists in the database
  };

  return (
    <PageContent>       
      <PageHeader title="Login"/>  
      <div className={theme ? "dark" : "light"}>
        <div>
          <div className="prism">

            <div className="face login">
              <h1>Login</h1>
              <form onSubmit={handleLoginSubmit}> 
                { UsernamePasswordBlock() }
                <SubmitBtn text="Login" />
              </form>
              <button className="link-button" onClick={() => rotate(1)}>
                Don't have account. SignUp
              </button>
              <button className="link-button" onClick={() => rotate(-1)}>
                Forgot Password?
              </button>
            </div>
            
            <div className="face registration">
              <h1>Registration</h1>
              <form onSubmit={handleRegistrationSubmit}>
                { EmailInputBar() }
                { UsernamePasswordBlock() }
                <SubmitBtn text="Sign up" />
              </form>
              <button className="link-button" onClick={() => rotate(0)}>
                Already have an account. Login
              </button>
            </div>

            <div className="face forgot-password">
              <h1>Forgot Password</h1>
              <form onSubmit={handleForgotPasswordSubmit}>
                { EmailInputBar() }
                <SubmitBtn text="Send" />
              </form>
              <button className="link-button" onClick={() => rotate(0)}>
                Return Login
              </button>
            </div>

          </div>
        </div>
      </div>
    </PageContent>
  );
}

export { Login }