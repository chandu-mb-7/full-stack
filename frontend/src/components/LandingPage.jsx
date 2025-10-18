// src/components/LandingPage.jsx
import React from "react";

const LandingPage = () => {
  const openPage = (msg, path) => {
    window.open(`${path}?msg=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="d-flex gap-3">
        <button
          className="btn btn-primary btn-lg"
          onClick={() => openPage("Welcome to Buy Page", "/buy")}
        >
          Buy
        </button>
        <button
          className="btn btn-success btn-lg"
          onClick={() => openPage("Welcome to Rent Page", "/rent")}
        >
          Rent
        </button>
        <button
          className="btn btn-warning btn-lg"
          onClick={() => openPage("Welcome to Commercial Page", "/commercial")}
        >
          Commercial
        </button>
      </div>
    </div>
  );
};

export default LandingPage;


