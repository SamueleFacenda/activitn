import React, { useState } from "react";

import {
  Anchor,
  Box,
  Button,
  Form,
  FormField,
  Heading,
  PageContent,
  PageHeader,
  TextInput,
} from "grommet";

import { usePostAuthLogin, usePostAuthRegister } from "../api/queries";

import { Mail, Lock, User } from "grommet-icons";

import { useAuth } from "../hooks/Auth";

/**
 * LoginBlock component that represents the login form block
 * @param {props} param0 - id, onSubmit, showEmail, showPassword, showUsername, buttonText
 * @param {string} id - id of the form
 * @param {function} onSubmit - function to call when the form is submitted
 * @param {boolean} showEmail - show the email field
 * @param {boolean} showPassword - show the password field
 * @param {boolean} showUsername - show the username field
 * @param {string} buttonText - text of the submit button
 * @returns {JSX.Element} - LoginBlock component
 */
function LoginBlock({
  id,
  onSubmit,
  showEmail = true,
  showPassword = true,
  showUsername = true,
  buttonText,
}) {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <Form
      value={value}
      onChange={(nextValue) => setValue(nextValue)}
      onReset={() => setValue({})}
      onSubmit={({ value }) => onSubmit(value)}
    >
      {showUsername && (
        <FormField label="Username" htmlFor={`${id}-name`}>
          <TextInput
            id={`${id}-name`}
            name="name"
            placeholder="Inserisci il tuo username"
            icon={<User />}
            reverse={true}
          />
        </FormField>
      )}
      {showEmail && (
        <FormField label="Email" htmlFor={`${id}-email`}>
          <TextInput
            id={`${id}-email`}
            name="email"
            type="email"
            placeholder="Inserisci la tua email"
            icon={<Mail />}
            reverse={true}
          />
        </FormField>
      )}
      {showPassword && (
        <FormField label="Password" htmlFor={`${id}-password`}>
          <TextInput
            id={`${id}-password`}
            name="password"
            placeholder="Inserisci la tua password"
            type="password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$"
            icon={<Lock />}
            reverse={true}
          />
        </FormField>
      )}
      <Button type="submit" primary label={buttonText} />
    </Form>
  );
}

/**
 * Face component that represents a face of the prism
 * @param {props} param0 - children, initialRotation, title
 * @param {JSX.Element} children - children of the face
 * @param {number} initialRotation - initial rotation of the face
 * @param {string} title - title of the face
 * @returns {JSX.Element} - Face component
 */
const Face = ({ children, initialRotation, title }) => (
  <Box
    style={{
      position: "absolute",
      transform: `rotateX(${initialRotation}deg) translateZ(75px)`,
      backfaceVisibility: "hidden",
    }}
    background="background-contrast"
    pad={{ horizontal: "large", vertical: "medium" }}
    border={{ size: "xsmall" }}
    round="large"
    elevation="medium"
    fill
  >
    <Heading level="2">{title}</Heading>
    {children}
  </Box>
);

/*
 * @returns Component - Return a login page with a prism that rotates to show login, registration, and forgot password
 */

function Login() {
  const [rotation, setRotation] = useState(0);
  const { login } = useAuth();

  // console.log("Login " + login);
  const { mutate: registerMutate } = usePostAuthRegister(undefined, {
    onSuccess: (data) => {
      login(data.data.token, data.data.id);
      console.log("Success");
      alert("Registrazione avvenuta con successo");
    },
    onError: (error) => {
      console.log("Login error:", error);
      alert("Errore nella registrazione");
    },
  });

  const { mutate: loginMutate } = usePostAuthLogin(undefined, {
    onSuccess: (data) => {
      login(data.data.token, data.data.id);
      alert("Login avvenuto con successo");
    },
    onError: (error) => {
      console.log("Login error:", error);
      alert("Credenziali non valide");
    },
  });

  const onSubmitRegister = (data) => {
    registerMutate({ body: data });
  };

  const onSubmitLogin = (data) => {
    loginMutate({ body: data });
  };

  return (
    <PageContent align="center" fill>
      <PageHeader title="Login" />
      <Box
        className="prism"
        style={{
          transform: `rotateX(${rotation}deg)`,
          transformStyle:
            "preserve-3d" /* keep the 3d effect for the children components */,
          transition: "transform 0.5s ease-in-out",
        }}
        width="medium"
        height="500px"
      >
        <Face initialRotation={0} title="Log in">
          <LoginBlock
            onSubmit={onSubmitLogin}
            id="login"
            showUsername={false}
            buttonText="Log in"
          />
          <Anchor onClick={() => setRotation(-90)} margin="small">
            Non hai un account? Registrati
          </Anchor>
          <Anchor onClick={() => setRotation(90)} margin="small">
            Dimenticato Password?
          </Anchor>
        </Face>

        <Face initialRotation={90} title="Registration">
          <LoginBlock
            onSubmit={onSubmitRegister}
            id="register"
            buttonText="Register"
          />
          <Anchor onClick={() => setRotation(0)} margin="small">
            Hai gia' un account, fai Login
          </Anchor>
        </Face>

        <Face initialRotation={-90} title="Forgot Password">
          <LoginBlock
            onSubmit={console.log}
            id="password"
            showPassword={false}
            showUsername={false}
            buttonText="Send"
          />
          <Anchor onClick={() => setRotation(0)} margin="small">
            Ritorna al login
          </Anchor>
        </Face>
      </Box>
    </PageContent>
  );
}

export { Login };
