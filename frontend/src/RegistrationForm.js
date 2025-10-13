import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5003/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, course }),
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      navigate("/display");
    } catch (err) {
      console.error("Error registering user:", err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h3 className="text-center mb-4">Registration Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Course:</label>
            <input
              type="text"
              className="form-control"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
