import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  // ✅ FIXED useEffect - Handles ALL backend formats
  useEffect(() => {
    console.log('🔍 Loading property ID:', id);
    fetch(`http://localhost:3000/api/properties/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Property not found");
        return res.json();
      })
      .then((data) => {
        console.log('🔍 Raw API response:', data);
        // ✅ CRITICAL FIX: Handles data.property OR data directly
        setProperty(data.property || data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('❌ PropertyDetail error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p style={styles.loading}>Loading property...</p>;
  if (error) return <p style={styles.error}>Error: {error} (ID: {id})</p>;
  if (!property) return <p style={styles.error}>Property not found (ID: {id})</p>;

  const images = property.images ? property.images.split(",") : [];
  const mainImage =
    images.length > 0
      ? `http://localhost:3000/images/${images[0]}`
      : "http://localhost:3000/images/placeholder.jpg";  // ✅ FIXED placeholder

  const openImage = (src) => setExpandedImage(src);
  const closeImage = () => setExpandedImage(null);

  return (
    <div style={styles.page}>
      {/* HERO SECTION */}
      <div style={styles.hero}>
        <img
          src={mainImage}
          alt="Property"
          style={{ ...styles.heroImage, cursor: "pointer" }}
          onClick={() => openImage(mainImage)}
          onError={(e) => (e.target.src = "http://localhost:3000/images/placeholder.jpg")}  // ✅ FIXED
        />
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>{property.name}</h1>
          <p style={styles.heroLocation}>
            {property.location}, {property.locality}
          </p>
          <div style={styles.heroPriceBox}>
            <span style={styles.heroPrice}>{formatPrice(property.price, property.price_type)}</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={styles.container}>
        <div style={styles.layout}>
          {/* LEFT: DETAILS */}
          <div style={styles.leftColumn}>
            <h2 style={styles.sectionTitle}>Property Overview</h2>
            <p style={styles.description}>{property.description}</p>

            {property.features && (
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Features</h3>
                <p style={styles.cardText}>{property.features}</p>
              </div>
            )}

            {property.additional_amenities && (
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Amenities</h3>
                <p style={styles.cardText}>{property.additional_amenities}</p>
              </div>
            )}
          </div>

          {/* RIGHT: INFO CARD */}
          <div style={styles.rightColumn}>
            <div style={styles.infoCard}>
              <h3 style={styles.infoCardTitle}>Property Details</h3>
              <p style={styles.infoItem}>
                <strong>Type:</strong> {property.property_type}
              </p>
              <p style={styles.infoItem}>
                <strong>Location:</strong> {property.location}
              </p>
              <p style={styles.infoItem}>
                <strong>Locality:</strong> {property.locality}
              </p>
              <p style={styles.infoItem}>
                <strong>Price:</strong> {formatPrice(property.price, property.price_type)}
              </p>
            </div>
          </div>
        </div>

        {/* GALLERY */}
        {images.length > 1 && (
          <div style={styles.gallerySection}>
            <h2 style={styles.sectionTitle}>Gallery</h2>
            <div style={styles.galleryGrid}>
              {images.slice(1).map((img, idx) => {
                const src = `http://localhost:3000/images/${img}`;
                return (
                  <img
                    key={idx}
                    src={src}
                    alt="Gallery"
                    style={{ ...styles.galleryImage, cursor: "pointer" }}
                    onClick={() => openImage(src)}
                    onError={(e) => (e.target.src = "http://localhost:3000/images/placeholder.jpg")}  // ✅ FIXED
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* IMAGE MODAL */}
      {expandedImage && (
        <div style={styles.modalOverlay} onClick={closeImage}>
          <img
            src={expandedImage}
            alt="Expanded"
            style={styles.modalImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Inter, Arial, sans-serif",
    backgroundColor: "#fafafa",
  },
  loading: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 18,
  },
  error: { color: "red", textAlign: "center", padding: "40px" },
  hero: {
    position: "relative",
    width: "100%",
    height: 420,
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(70%)",
  },
  heroOverlay: {
    position: "absolute",
    bottom: 40,
    left: 50,
    color: "#fff",
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: 700,
    marginBottom: 5,
  },
  heroLocation: {
    fontSize: 18,
    marginBottom: 12,
    opacity: 0.9,
  },
  heroPriceBox: {
    background: "rgba(255,255,255,0.15)",
    padding: "8px 16px",
    borderRadius: 10,
    display: "inline-block",
  },
  heroPrice: { fontSize: 28, fontWeight: 700 },
  heroPriceType: { marginLeft: 6, fontSize: 14 },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "30px 20px",
  },
  layout: {
    display: "flex",
    gap: 30,
    alignItems: "flex-start",
  },
  leftColumn: { flex: 2 },
  rightColumn: { flex: 1 },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 700,
    marginBottom: 12,
    color: "#003366",
  },
  description: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "#444",
    marginBottom: 25,
  },
  card: {
    background: "#fff",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
    marginBottom: 20,
  },
  cardTitle: { fontSize: 20, fontWeight: 600, marginBottom: 10 },
  cardText: { fontSize: 15, color: "#444", lineHeight: 1.5 },
  infoCard: {
    background: "#fff",
    padding: 22,
    borderRadius: 12,
    boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 120,
  },
  infoCardTitle: { fontSize: 22, fontWeight: 600, marginBottom: 12 },
  infoItem: { fontSize: 15, marginBottom: 8, color: "#333" },
  gallerySection: { marginTop: 40 },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: 14,
  },
  galleryImage: {
    width: "100%",
    height: 170,
    objectFit: "cover",
    borderRadius: 10,
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    cursor: "pointer",
  },
  modalImage: {
    maxWidth: "90%",
    maxHeight: "90%",
    borderRadius: 10,
    boxShadow: "0 3px 15px rgba(0,0,0,0.5)",
  },
};

export default PropertyDetail;
