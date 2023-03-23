import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import DefaultPage from "../Pages/DefaultPage";
import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";
import AuthLayout from "../Layouts/AuthLayout";
import Layout from "../Layouts/Layout";
import Admin from "../Pages/Admin";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CakesList from "../Pages/ProductLists/CakesList";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="/cakes-list" element={<CakesList/>} />
        <Route path="*" element={<DefaultPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
