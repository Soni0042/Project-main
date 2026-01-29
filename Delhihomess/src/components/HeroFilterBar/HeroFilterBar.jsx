import React, { useState } from "react";
import { MapPin, Home, IndianRupee, ChevronDown, Search } from "lucide-react";

const propertyOptions = ["Rent", "Buy"];
const locations = ["Delhi", "Gurgaon", "Noida"];
const budgetOptions = [
  "₹10k - 25k", "₹25k - 50k", "₹50k - 75k", "₹75k - 1L",
  "₹1L - 1.5L", "₹1.5L - 2L", "₹2L - 3L", "₹3L - 5L",
  "₹5L - 10L", "₹10L - 25L", "₹25L - 50L", "₹50L - 1Cr",
  "₹1Cr - 2Cr", "₹2Cr - 5Cr", "₹5Cr+"
];

const HeroFilterBar = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [property, setProperty] = useState("");
  const [budget, setBudget] = useState("");

  // ✅ CLEAN DISPLAY → DB CORRECT VALUES
  const propertyTypeOptions = [
    { display: "1BHK", value: "1BHK" },
    { display: "2BHK", value: "2BHK" },
    { display: "3BHK", value: "3BHK" },
    { display: "4BHK", value: "4 Bhk" }  // Clean display, DB value
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!type || !property) {
      alert("Please select Property Type & Rent/Buy");
      return;
    }

    const filters = {
      property_type: type,
      transaction: property,
      location: location || '',
      budget: budget || ''
    };
    
    const queryString = new URLSearchParams(filters).toString();
    window.location.href = `/properties?${queryString}`;
  };

  return (
    <form onSubmit={handleSearch} style={styles.form}>
      {/* Location */}
      <div style={styles.field}>
        <MapPin size={18} color="#d32f2f" />
        <select value={location} onChange={(e) => setLocation(e.target.value)} style={styles.select}>
          <option value="">Location</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      <div style={styles.divider} />

      {/* Property Type */}
      <div style={styles.field}>
        <Home size={18} color="#d32f2f" />
        <select value={type} onChange={(e) => setType(e.target.value)} style={styles.select}>
          <option value="">Type</option>
          {propertyTypeOptions.map(({ display, value }) => (
            <option key={value} value={value}>
              {display}
            </option>
          ))}
        </select>
        <ChevronDown size={16} color="#666" style={styles.iconRight} />
      </div>

      <div style={styles.divider} />

      {/* Rent/Buy */}
      <div style={styles.field}>
        <Home size={18} color="#d32f2f" />
        <select value={property} onChange={(e) => setProperty(e.target.value)} style={styles.select}>
          <option value="">Property</option>
          {propertyOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown size={16} color="#666" style={styles.iconRight} />
      </div>

      <div style={styles.divider} />

      {/* Budget */}
      <div style={styles.field}>
        <IndianRupee size={18} color="#d32f2f" />
        <select value={budget} onChange={(e) => setBudget(e.target.value)} style={styles.select}>
          <option value="">Budget</option>
          {budgetOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown size={16} color="#666" style={styles.iconRight} />
      </div>

      <button type="submit" style={styles.button}>
        <Search size={18} style={{ marginRight: "6px" }} />
        <span>Search</span>
      </button>
    </form>
  );
};

// Your exact styles (unchanged)
const styles = {
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fff",
    borderRadius: "50px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "0.4rem 0.8rem",
    maxWidth: "1050px",
    margin: "0 auto",
    flexWrap: "nowrap",
    height: "64px",
  },
  field: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "0 1.2rem",
    flex: "1",
    position: "relative",
    height: "100%",
  },
  select: {
    border: "none",
    background: "transparent",
    outline: "none",
    fontSize: "1rem",
    color: "#333",
    width: "100%",
    cursor: "pointer",
    appearance: "none",
  },
  divider: {
    width: "1px",
    height: "40%",
    background: "#ddd",
  },
  iconRight: {
    position: "absolute",
    right: "16px",
    pointerEvents: "none",
  },
  button: {
    background: "#d32f2fff",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginLeft: "1rem",
    whiteSpace: "nowrap",
  },
};

export default HeroFilterBar;
