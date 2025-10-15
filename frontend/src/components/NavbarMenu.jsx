import React, { useEffect, useRef } from "react";
import "./NavbarMenu.css";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

const NavbarMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={menuRef} className="nb-dropdown">
      <ul>
        <li>Post Your Property</li>
        <li>Rental Agreement</li>
        <li>Painting & Cleaning</li>
        <li>Packers and Movers</li>
        <li>Refer & Earn</li>
        <li>Rent Receipts</li>
        <li>Tenant Plans</li>
        <li>Owner Plans</li>
        <li>Buyer Plans</li>
        <li>Seller Plans</li>
        <li className="dropdown-item">
          Commercial Plans <span className="arrow">⌄</span>
        </li>
        <li>Careers</li>
        <li>Corporate Enquiry</li>
        <li>Blog</li>
        <li>NoBroker Support</li>
        <li className="dropdown-item">
          Contact Us <span className="arrow">⌃</span>
        </li>
      </ul>

      <div className="contact">
        <p>Email</p>
        <a href="mailto:assist@nobroker.in">assist@nobroker.in</a>

        <div className="social">
          <div className="circle"><FaFacebookF /></div>
          <div className="circle"><FaTwitter /></div>
          <div className="circle"><FaGoogle /></div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
