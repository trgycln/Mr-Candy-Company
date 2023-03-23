import React from "react";
import UseIsLoggedIn from "../Config/Hooks";
import { Navigate, Outlet } from "react-router-dom";

const Layout = () => {
  const isLoggedIn = UseIsLoggedIn();

  if (isLoggedIn === null) return <h1>Loading...</h1>;
  else if (isLoggedIn === false) return <Navigate to="/sign-in" />;

  return <Outlet />;
};

export default Layout;
