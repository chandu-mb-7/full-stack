import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaCity,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaEdit,
  FaTrash,
  FaHome,
} from "react-icons/fa";
import "./MyProperties.css";

const MyProperties = () => {
  const [myProperties, setMyProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchMyProperties();
  }, []);

  const fetchMyProperties = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user?.phone) return;
      const res = await axios.get(
        `http://localhost:5000/api/properties?ownerId=${user.phone}`
      );
      setMyProperties(res.data.properties || []);
    } catch (err) {
      console.error("Error fetching listings:", err);
    }
  };

  const handleEdit = async (id) => {
    const newRent = prompt("Enter new rent amount:");
    if (!newRent) return;
    try {
      const res = await axios.put(
        `http://localhost:5000/api/properties/${id}`,
        { rent: newRent },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) {
        alert(" Property updated successfully");
        fetchMyProperties();
      } else {
        alert(" " + res.data.message);
      }
    } catch (err) {
      alert(
        "Failed to update property: " +
          (err.response?.data?.message || "Unknown error")
      );
    }
  };

  const confirmDelete = (property) => {
    setSelectedProperty(property);
    setShowConfirm(true);
  };

  const handleDeleteConfirmed = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/properties/${selectedProperty._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) {
        setShowConfirm(false);
        alert(" Property deleted successfully");
        fetchMyProperties();
      } else {
        alert(" " + res.data.message);
      }
    } catch (err) {
      alert(
        "Failed to delete property: " +
          (err.response?.data?.message || "Unknown error")
      );
    }
  };

  return (
    <div className="property-list-page">
   <h2 className="page-title">
  <FaHome className="title-icon" />
  My Property Listings
</h2>


      <div className="property-grid">
        {myProperties.map((p) => (
          <div key={p._id} className="property-card">
            <h3>{p.propertyType || "Property"}</h3>
            <span className="badge">{p.adType || "Rent"}</span>

            <p>
              <FaCity className="icon" /> <b>City:</b> {p.city}
            </p>
            <p>
              <FaMapMarkerAlt className="icon" /> <b>Locality:</b>{" "}
              {p.locality || "N/A"}
            </p>
            <p>
              <FaRupeeSign className="icon" /> <b>Rent:</b> ₹{p.rent || "N/A"}
            </p>
            <p>
              <FaMoneyBillWave className="icon" /> <b>Deposit:</b> ₹
              {p.deposit || "N/A"}
            </p>
            <p>
              <FaCalendarAlt className="icon" /> <b>Availability:</b>{" "}
              {p.availability || "N/A"}
            </p>

            <div className="property-actions">
              <button className="edit-btn" onClick={() => handleEdit(p._id)}>
                <FaEdit /> Edit
              </button>
              <button className="delete-btn" onClick={() => confirmDelete(p)}>
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <h3>Are you sure?</h3>
            <p>
              Do you really want to delete{" "}
              <b>{selectedProperty?.propertyType || "this property"}</b>?  
              This action cannot be undone.
            </p>
            <div className="confirm-buttons">
              <button
                className="cancel-btn"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
              <button className="confirm-btn" onClick={handleDeleteConfirmed}>
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProperties;
