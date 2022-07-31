/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useAuth } from "Contexts/AuthContext";
import Drawer from "Drawer/Drawer";
import React, { useState } from "react";

function Login() {
  const { signUp, logout, userCookie } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    signUp({
      email,
      password,
    });
  }

  return (
    <Drawer>
      {userCookie?.user?.firstName && <div>{userCookie.user.firstName}</div>}
      <button onClick={() => console.log(userCookie.used)}>see user cookie</button>
      <button onClick={() => logout()}>Logout</button>
      <form
        onSubmit={(event) => handleSubmit(event)}
        style={{ display: "flex", flexDirection: "column" }}
      >
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

export default Login;
