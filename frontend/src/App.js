import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import DisplayPage from "./DisplayPage";

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm setUserData={setUserData} />} />
        <Route path="/display" element={<DisplayPage userData={userData} />} />
      </Routes>
    </Router>
  );
}

export default App;
