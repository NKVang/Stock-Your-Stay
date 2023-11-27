import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavDropdown } from 'react-bootstrap';

const EmployeeLogin = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const EmployeeLoginNav = () => {
  const { loginWithRedirect } = useAuth0();

  return (
  <NavDropdown.Item onClick={() => loginWithRedirect()}>
      Employee Login
  </NavDropdown.Item>
  );
};

export {EmployeeLogin, EmployeeLoginNav};