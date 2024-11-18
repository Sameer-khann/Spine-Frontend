import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import DocsPage from "./pages/DocsPage"; // Import the DocsPage
import { useDispatch } from "react-redux";
import { performUserDetails } from "./redux/slices/authSlice"; // Make sure you import performUserDetails
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS file

const App = () => {
  const dispatch = useDispatch(); // Fixed 'const' declaration

  useEffect(() => {
    dispatch(performUserDetails()); // Dispatch to fetch user details
  }, [dispatch]); // Make sure to add dispatch as a dependency to avoid missing updates

  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<DocsPage />} /> {/* Docs Route */}
        <Route path="/cars/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
