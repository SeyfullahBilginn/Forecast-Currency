/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useAuth } from "Contexts/AuthContext";
import Drawer from "Drawer/Drawer";

function Signup() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userType, setUserType] = useState(0);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signUp } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    signUp({
      firstName,
      lastName,
      email,
      userType,
      password,
    });
  }

  return (
    <Drawer>
      <form
        onSubmit={(event) => handleSubmit(event)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(text) => setFirstName(text.currentTarget.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(text) => setLastName(text.currentTarget.value)}
          />
        </label>
        <label>
          Designation student 1sad:
          <input
            type="number"
            value={userType}
            onChange={(text) => setUserType(text.currentTarget.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="mail"
            value={email}
            onChange={(text) => setEmail(text.currentTarget.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(text) => setPassword(text.currentTarget.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </Drawer>
  );
}

export default Signup;
