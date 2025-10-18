import React from "react";
import { useLocation } from "react-router-dom";

const RentPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const msg = queryParams.get("msg");

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "150px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h1>Welcome to {msg || "Service Page"} 👋</h1>
    </div>
  );
};

export default RentPage;
