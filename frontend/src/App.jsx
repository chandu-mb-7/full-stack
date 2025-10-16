import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import OwnerForm from "./components/OwnerForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/owner" element={<OwnerForm />} />
        <Route path="/buy" element={<h1>Buy Page</h1>} />
        <Route path="/rent" element={<h1>Rent Page</h1>} />
        <Route path="/commercial" element={<h1>Commercial Page</h1>} />
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/signup" element={<h1>Signup Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
