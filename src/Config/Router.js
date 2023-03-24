import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Components/Header";

import Home from "../Pages/Home";
import About from "../Pages/About";
import DefaultPage from "../Pages/DefaultPage";

import SignInPage from "../Pages/SignInPage";
import SignUpPage from "../Pages/SignUpPage";

import AuthLayout from "../Layouts/AuthLayout";
import Layout from "../Layouts/Layout";
import Admin from "../Pages/Admin/Admin";

import Footer from "../Components/Footer";
import CakesList from "../Pages/ProductLists/CakesList";
import TeasList from "../Pages/ProductLists/TeasList";
import CoffeesList from "../Pages/ProductLists/CoffeesList";
import FrappesList from "../Pages/ProductLists/FrappesList";
import AddCake from "../Pages/AddLists/AddCake";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/cakes-list" element={<CakesList />} />
          <Route path="/teas-list" element={<TeasList />} />
          <Route path="/coffees-list" element={<CoffeesList />} />
          <Route path="/frappes-list" element={<FrappesList />} />
          <Route path="/add-cake" element={<AddCake />} />

        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<DefaultPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
