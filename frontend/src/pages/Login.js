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
  TextInput 
} from "grommet";

import {
  usePostAuthLogin,
  usePostAuthRegister
} from "../api/queries";

import { useAuth } from "../hooks/Auth";

function LoginBlock({ id, onSubmit, showEmail = true, showPassword = true, showUsername = true, buttonText }) {
  const [value, setValue] = useState({})

  return (
    <Form
      value={value}
      onChange={nextValue => setValue(nextValue)}
      onReset={() => setValue({})}
      onSubmit={({ value }) => onSubmit(value)}
      >
      {showUsername && <FormField label="Username" htmlFor={`${id}-name`}>
        <TextInput
          id={`${id}-name`}
          name="name"
          placeholder="Enter your username"
        />
      </FormField>}
      {showEmail && <FormField label="Email" htmlFor={`${id}-email`}>
        <TextInput
          id={`${id}-email`}
          name="email"
          placeholder="Enter your email"
        />
      </FormField>}
      {showPassword && <FormField label="Password" htmlFor={`${id}-password`}>
        <TextInput
          id={`${id}-password`}
          name="password"
          placeholder="Enter your password"
          type="password"
        />
      </FormField>}
      <Button type="submit" primary label={buttonText} />
    </Form>
  );
}

const Face = ({ children, initialRotation, title}) => (
  <Box
    style={{
      position: "absolute",
      transform: `rotateX(${initialRotation}deg) translateZ(75px)`,
      backfaceVisibility: "hidden",
    }} 
    pad={{ horizontal: "large", vertical: "medium" }}
    border={{ size: "xsmall" }}
    round="large"
    elevation="medium"
    fill>

    <Heading level="2">{title}</Heading>
    {children}
  </Box>
)

/*
 * @returns Component - Return a login page with a prism that rotates to show login, registration, and forgot password
 */

function Login() {
  const [rotation, setRotation] = useState(0);
  const { login } = useAuth();

  const { mutate: registerMutate  } = usePostAuthRegister(undefined, {
    onSuccess: () => {
      console.log("Success");
    }
  });

  const { mutate: loginMutate } = usePostAuthLogin(undefined, {
    onSuccess: (data, variables, context) => {
      login(data.data.token)
    }
  });

  const onSubmitRegister = (data) => {
    registerMutate({body: data});
  };

  const onSubmitLogin = (data) => {
    loginMutate({body: data});
  };

  return (
    <PageContent align="center" fill>
      <PageHeader title="Login" />
      <Box
        className="prism"
        style={{ 
          transform: `rotateX(${rotation}deg)`,
          transformStyle: "preserve-3d", /* keep the 3d effect for the children components */
          transition: "transform 0.5s ease-in-out",
        }}
        width="medium" height="500px">
        
        <Face initialRotation={0} title="Log in">
          <LoginBlock onSubmit={onSubmitLogin} id="login" showUsername={false} buttonText="Log in" />
          <Anchor onClick={() => setRotation(-90)} margin="small">
            Don't have account. SignUp
          </Anchor>
          <Anchor onClick={() => setRotation(90)} margin="small">
            Forgot Password?
          </Anchor>
        </Face>

        <Face initialRotation={90} title="Registration">
          <LoginBlock onSubmit={onSubmitRegister} id="register" buttonText="Register" />
          <Anchor onClick={() => setRotation(0)} margin="small">
            Already have an account. Login
          </Anchor>
        </Face>

        <Face initialRotation={-90} title="Forgot Password">
          <LoginBlock onSubmit={console.log} id="password" showPassword={false} showUsername={false} buttonText="Send" />
          <Anchor onClick={() => setRotation(0)} margin="small">
            Return Login
          </Anchor>
        </Face>
      </Box>
    </PageContent>
  );
}

export { Login };
