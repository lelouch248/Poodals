import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
// css imports 
import "./styles/Loaders/Loader.css";
// all page imports
import ContactUs from "./pages/ContactUs";
import PetService from "./pages/PetService";
import Sign from "./pages/Sign";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Poodals from "./pages/Poodals";
import AboutUsPage from "./pages/Aboutus";
import Signup from "./pages/Signup";

function App() {

  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [user, setUser] = React.useState(null);
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3001/auth/signin/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("failed to authenticate user");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUser();
  }, []);
  console.log(user);

  return (
    <>
      {loading ? (
        <div className="loader">
          <span className="loader-text">loading</span>
          <span className="load"></span>
        </div>
      ) : (
        <>
          <BrowserRouter>
            <Navbar user={user} />
            <Routes>
              <Route
                path="/"
                element={
                  user ? <Home user={user} /> : <Navigate to="/signin" />
                }
              />
              <Route
                path="/signin"
                element={user ? <Navigate to="/" /> : <Sign user={user} />}
              />
              <Route
                path="/signup"
                element={user ? <Navigate to="/" /> : <Signup user={user} />}
              />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/services" element={<PetService />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/poodals" element={user?<Poodals />:<Navigate to="/signin"/>} />
              <Route path="/aboutus" element={<AboutUsPage/>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export { App };
