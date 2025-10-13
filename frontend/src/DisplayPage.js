import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DisplayPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5003/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">All Registered Users</h3>

      <div className="row">
        {users.length === 0 ? (
          <p className="text-center text-muted">No users registered yet.</p>
        ) : (
          users.map((user) => (
            <div className="col-md-4 mb-4" key={user._id}>
              <div className="card shadow-sm p-3 text-center">
                <h5 className="fw-bold">{user.name}</h5>
                <p className="text-muted">{user.course}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="text-center">
        <button className="btn btn-secondary mt-3" onClick={() => navigate("/")}>
          Back to Register
        </button>
      </div>
    </div>
  );
}

export default DisplayPage;
