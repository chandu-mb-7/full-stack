import React, { useEffect, useRef } from "react";
import "./NavbarMenu.css";
import { Link } from "react-router-dom";
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
        <li><Link to="/owner" onClick={onClose}>Post Your Property</Link></li>
        <li><Link to="/rental-agreement" onClick={onClose}>Rental Agreement</Link></li>
        <li><Link to="/home-painting" onClick={onClose}>Painting & Cleaning</Link></li>
        <li><Link to="/packers-movers" onClick={onClose}>Packers and Movers</Link></li>
        <li><Link to="/click-earn" onClick={onClose}>Refer & Earn</Link></li>
        <li><Link to="/pay-rent-online" onClick={onClose}>Rent Receipts</Link></li>
        <li><Link to="/rent" onClick={onClose}>Tenant Plans</Link></li>
        <li><Link to="/owner" onClick={onClose}>Owner Plans</Link></li>
        <li><Link to="/buy" onClick={onClose}>Buyer Plans</Link></li>
        <li><Link to="/commercial" onClick={onClose}>Seller Plans</Link></li>

        <li className="dropdown-item">
          <Link to="/commercial" onClick={onClose}>Commercial Plans</Link>
          <span className="arrow">⌄</span>
        </li>

        <li><Link to="/careers" onClick={onClose}>Careers</Link></li>
        <li><Link to="/corporate-enquiry" onClick={onClose}>Corporate Enquiry</Link></li>
        <li><Link to="/blog" onClick={onClose}>Blog</Link></li>
        <li><Link to="/support" onClick={onClose}>NoBroker Support</Link></li>

        <li className="dropdown-item">
          <Link to="/contact" onClick={onClose}>Contact Us</Link>
          <span className="arrow">⌃</span>
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
