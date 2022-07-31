import { useAuth } from "Contexts/AuthContext";
import Drawer from "Drawer/Drawer";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "routes";

export default function App() {
  const { userCookie } = useAuth();
  const [allRoutes, setAllRoutes] = useState([]);
  useEffect(() => {
    const loggedFiltered = routes.filter((route) => route.isLoggedIn);
  }, []);
  const getRoutes = () =>
    routes.map((route) => {
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });

  if (!userCookie) {
    return (
      <Routes>
        {getRoutes()}
        <Drawer />
      </Routes>
    );
  }
  return <Routes>{getRoutes()}</Routes>;
}
