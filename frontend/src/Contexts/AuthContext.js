import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useCookies } from "react-cookie";
import axios from "axios";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  // const [currentUser, setCurrentUser] = useState();
  // const navigate = useNavigate();
  const [userCookie, setUserCookie, removeUserCookie] = useCookies(["user"]);

  function signUp(user) {
    axios
      .post("http://localhost:3001/users", user)
      .then((res) => {
        console.log(res);
        const { password, ...userData } = res.data;
        console.log(userData);
        setUserCookie("user", userData);
      })
      .catch((err) => console.log(err));
  }

  // function signIn(email, password) {
  //   console.log("signIn", email, password);
  // }

  // function updateUserCookie(userDetail) {
  //   console.log("updateUserCookie", userDetail);
  // }

  async function logout() {
    await removeUserCookie("user");
    // navigate("/authentication/sign-in");
  }

  // async function fetchUserToCookie() {
  //   console.log("fetchUserToCookie");
  // }
  // useEffect(() => { }, [currentUser]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    // currentUser,
    // signIn,
    signUp,
    logout,
    userCookie,
    // updateUserCookie,
    // fetchUserToCookie,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
