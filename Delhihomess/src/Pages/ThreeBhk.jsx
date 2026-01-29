import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function formatPrice(price, type) {
  if (!price) return "Price not available";
  if (!type) return `₹${price.toLocaleString()}`;

  const lowerType = type.toLowerCase();
  if (lowerType === "crore") {
    return `₹${(price / 1e7).toLocaleString()} Cr`;
  }
  if (lowerType === "lakh") {
    return `₹${(price / 1e5).toLocaleString()} Lac`;
  }
  return `₹${price.toLocaleString()}`;
}

function ThreeBhkPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/properties?bhk=3")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data.properties);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading 3 BHK properties...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>3 BHK Properties</h1>

      <div style={styles.grid}>
        {properties.map((prop) => {
          const images = prop.images ? prop.images.split(",") : [];
          const imageUrl = images.length
            ? `http://localhost:3000/images/${images[0]}`
            : "/placeholder.jpg";

          return (
            <Fragment key={prop.id}>
              <Link to={`/property/${prop.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div style={styles.card}>
                  <img
                    src={imageUrl}
                    alt={prop.name}
                    style={styles.image}
                    onError={(e) => (e.target.src = "/placeholder.jpg")}
                  />
                  <div style={styles.cardBody}>
                    <h2 style={styles.cardTitle}>{prop.name}</h2>
                    <p style={styles.location}>
                      {prop.location}, {prop.locality}
                    </p>
                    <p style={styles.price}>{formatPrice(prop.price, prop.price_type)}</p>
                    <p style={styles.type}>Property Type: {prop.property_type}</p>
                    <p style={styles.description}>
                      {prop.description || "No description available"}
                    </p>
                  </div>
                </div>
              </Link>
            </Fragment>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#003366",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  cardBody: {
    padding: "16px",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    margin: "0 0 6px 0",
    color: "#222",
  },
  location: {
    color: "#555",
    fontSize: "14px",
    marginBottom: "6px",
  },
  price: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#0078D4",
    marginBottom: "10px",
  },
  type: {
    marginBottom: "8px",
    fontSize: "14px",
  },
  description: {
    fontSize: "14px",
    color: "#444",
  },
};

export default ThreeBhkPage;
