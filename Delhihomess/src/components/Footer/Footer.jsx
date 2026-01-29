import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const linkStyle = {
    color: "#333",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const linkHover = (e) => (e.target.style.color = "#1a4db3");
  const linkOut = (e) => (e.target.style.color = "#333");

  return (
    <footer
      style={{
        backgroundColor: "#ffffffff",
        color: "#333",
        padding: "3rem 1.5rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        borderTop: "1px solid rgba(0,0,0,0.15)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ flex: "1 1 200px", minWidth: "200px" }}>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "2rem",
              marginBottom: "1rem",
              textTransform: "capitalize",
              letterSpacing: "1px",
              color: "#111",
            }}
          >
            DelhiHomes
          </h2>
          <p style={{ color: "#555", lineHeight: "1.6" }}>
            Your trusted partner in real estate. We help you find properties that
            suit your lifestyle and investment goals.
          </p>
        </div>

        {/* Useful Links */}
        <div style={{ flex: "1 1 180px", minWidth: "160px" }}>
          <h4 style={{ marginBottom: "1rem", color: "#111", fontWeight: 600, fontSize: "1.2rem" }}>
            Useful Links
          </h4>
          <ul style={{ listStyle: "none", paddingLeft: 0, lineHeight: "2" }}>
            <li>
              <Link to="/" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Home</Link>
            </li>
            <li>
              <Link to="/properties" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Properties</Link>
            </li>
            <li>
              <Link to="/gallery" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Gallery</Link>
            </li>
            <li>
              <Link to="/contact-us" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* More Info */}
        <div style={{ flex: "1 1 180px", minWidth: "160px" }}>
          <h4 style={{ marginBottom: "1rem", color: "#111", fontWeight: 600, fontSize: "1.2rem" }}>
            More Information
          </h4>
          <ul style={{ listStyle: "none", paddingLeft: 0, lineHeight: "2" }}>
            <li>
              <Link to="/terms-and-conditions" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/privacy-policy" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>Privacy Policy</Link>
            </li>
            <li>
              <Link to="/about-us" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>About Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div style={{ flex: "1 1 260px", minWidth: "200px" }}>
          <h4 style={{ marginBottom: "1rem", color: "#111", fontWeight: 600, fontSize: "1.2rem" }}>
            Contact Us
          </h4>

          <p style={{ lineHeight: "1.8", color: "#555" }}>
            Phone:{" "}
            <a href="tel:9319774806" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>
              +91 9319774806
            </a>
          </p>

          <p style={{ lineHeight: "1.8", color: "#555" }}>
            Email:{" "}
            <a href="mailto:Support@delhihomess.com" style={linkStyle} onMouseOver={linkHover} onMouseOut={linkOut}>
              Support@delhihomess.com
            </a>
          </p>

          <p style={{ marginTop: "1rem", color: "#555", lineHeight: "1.8" }}>
            Address: E-523 Ground Floor, Near Union Bank, Ramphal Chowk, Dwarka Sector-7, New Delhi
          </p>
        </div>
      </div>

      <hr style={{ borderColor: "rgba(0,0,0,0.1)", margin: "1.5rem 0" }} />

      <p style={{ textAlign: "center", fontSize: "0.9rem", color: "#777" }}>
        © DelhiHomes.com 2025. Developed by Secure Affiliate Media Pvt. Ltd.
      </p>
    </footer>
  );
};

export default Footer;
