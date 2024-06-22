import React, { useEffect } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthService from "./AuthService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Profile from "./pages/Profile";

import Loader from "./components/Loader";
import { baseurl } from "./setupEnv";
import { useLoader } from "./context/LoaderContext";
import { useLogin } from "./context/LoginContext";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Charts from "./pages/Charts";
import Footer from "./components/Footer";
import Products from "./components/products/Products";
import ProductCard from "./components/productCard/ProductCard";
import ProductDetails from "./components/productDeatils/ProductDetails";
import PageWrapper from "./components/PageWrapper"; // Import the wrapper component
import Cart from "./components/cart/Cart";

function App() {
  const { login, setLogin } = useLogin();
  const { loader } = useLoader();
  const navigate = useNavigate();
  useEffect(() => {
    if (AuthService.isTokenExpired()) {
      setLogin(false);
      // navigate("/")
    }
  }, [loader]);

  return (
    <GoogleOAuthProvider clientId="73387578779-c9ibjk7f0urhrsm8kqgks4633s7ovljb.apps.googleusercontent.com">
      <>
        <Navbar />
        <Loader />
        <PageWrapper> {/* Wrap the Routes with PageWrapper */}
          <Routes>
            <Route path="/" element={<Main />} />
            {login && (
              <>
                <Route path="/profile" element={<Profile />} />
              </>
            )}

            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/loader" element={<Loader />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productCard" element={<ProductCard />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />


          </Routes>
        </PageWrapper>
        <Footer />
      </>
    </GoogleOAuthProvider>
  );
}

export default App;
