import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroFilterBar from "../components/HeroFilterBar/HeroFilterBar";
import LadderFeatures from "../components/LadderFeatures";
import Footer from "../components/Footer/Footer";
import BankingPartners from "../components/bankpartners";

// ✅ SAME formatPrice from Properties/PropertyDetail
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

const Home = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch 6 featured properties
  useEffect(() => {
    fetch('http://localhost:3000/api/properties?limit=6&sort=created_at&order=desc')
      .then(res => res.json())
      .then(data => setFeaturedProperties(data.properties || data.slice(0,6)))
      .catch(err => console.error('Error fetching featured properties:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* ✅ HERO SECTION (UNCHANGED) */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/images/Heroimage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          fontFamily: "'Segoe UI', Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.50)",
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 2, padding: "0 20px" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 600,
              marginBottom: "15px",
            }}
          >
            SMART HOMES. SMARTER INVESTMENTS.
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              maxWidth: "600px",
              margin: "0 auto 25px",
              lineHeight: "1.6",
            }}
          >
            Find affordable properties that match your lifestyle and budget — all in one place.
          </p>
          <HeroFilterBar />
        </div>
      </section>

      <LadderFeatures />

      {/* ✅ NEW FEATURED PROPERTIES SECTION */}
      <section style={{ padding: "80px 20px", background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "20px"
          }}>
            <h2 style={{ 
              fontSize: "2.5rem", 
              fontWeight: 700, 
              color: "#1a1a1a", 
              margin: 0 
            }}>
              Featured Properties
            </h2>
            <Link 
              to="/properties" 
              style={{ 
                color: "#d32f2f", 
                fontWeight: 600, 
                fontSize: "16px",
                textDecoration: "none"
              }}
            >
              View All Properties →
            </Link>
          </div>

          {loading ? (
            <div style={{ 
              textAlign: "center", 
              padding: "60px 20px", 
              color: "#666", 
              fontSize: "18px" 
            }}>
              Loading featured properties...
            </div>
          ) : featuredProperties.length === 0 ? (
            <div style={{ 
              textAlign: "center", 
              padding: "60px 20px", 
              color: "#666", 
              fontSize: "16px" 
            }}>
              No properties available
            </div>
          ) : (
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", 
              gap: "30px" 
            }}>
              {featuredProperties.slice(0,9) .map((property) => (
                <Link 
                  key={property.id} 
                  to={`/properties/${property.id}`} 
                  style={{
                    background: "white",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                    textDecoration: "none",
                    color: "inherit",
                    display: "block",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
                  }}
                >
                  <div style={{ height: "220px", overflow: "hidden" }}>
                    <img 
                      src={`http://localhost:3000/images/${property.images?.split(',')[0] || 'placeholder.jpg'}`} 
                      alt={property.name}
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover" 
                      }}
                      onError={(e) => e.target.src = 'http://localhost:3000/images/placeholder.jpg'}
                    />
                  </div>
                  <div style={{ padding: "24px" }}>
                    <h3 style={{ 
                      fontSize: "20px", 
                      fontWeight: 600, 
                      margin: "0 0 8px 0",
                      color: "#1a1a1a"
                    }}>
                      {property.name}
                    </h3>
                    <p style={{ 
                      color: "#666", 
                      fontSize: "15px", 
                      margin: "0 0 12px 0" 
                    }}>
                      {property.location}, {property.locality}
                    </p>
                    <div style={{ 
                      fontSize: "24px", 
                      fontWeight: 700, 
                      color: "#d32f2f", 
                      margin: "0 0 8px 0" 
                    }}>
                      {formatPrice(property.price, property.price_type)}
                    </div>
                    <p style={{ 
                      color: "#888", 
                      fontSize: "14px", 
                      margin: 0 
                    }}>
                      {property.property_type} • {property.transaction_type || 'Rent/Buy'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ✅ COMPANY DESCRIPTION & STATS (UNCHANGED) */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "5rem auto",  
          textAlign: "center",
          padding: "0 1rem",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "4rem",
          }}
        >
          Delhi Homes Solutions PVT. LTD firmly believes in assisting clients by
          meeting their needs and coordinating financing to 100% in accordance
          with the selected property. We promise to give our clients a great
          return on their property investment. Our business has built a solid
          reputation by offering customers outstanding service, controlling our
          time effectively, improving work quality, and completing all projects on
          schedule. We understand the value of a home — for many, finding the
          right property has always been difficult, and we're here to change that.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "13rem",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              number: "5537+",
              text: "Low Budget Flats in New Delhi",
            },
            {
              number: "20273+",
              text: "Properties for Sale in New Delhi",
            },
            {
              number: "183+",
              text: "Residential Projects in New Delhi",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#004080",
                color: "#fff",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                border: "4px solid #fff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <h3 style={{ fontSize: "1.6rem", fontWeight: "700", margin: "0" }}>
                {item.number}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  marginTop: "0.5rem",
                  lineHeight: "1.4",
                  textTransform: "uppercase",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <BankingPartners />
      <Footer />
    </>
  );
};

export default Home;
