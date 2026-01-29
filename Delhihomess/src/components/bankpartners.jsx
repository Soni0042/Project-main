import React from "react";

const BankingPartners = () => {
  const partners = [
    {
      name: "LIC",
      logo: "/images/lic.png",
    },
    {
      name: "Tata Capital",
      logo: "/images/tata.jpg",
    },
    {
      name: "Union Bank",
      logo: "/images/union.png",
    },
  ];

  return (
    <section
      style={{
        padding: "60px 20px",
        background: "#f8f9fb",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "700",
          color: "#004080",
          marginBottom: "10px",
        }}
      >
        Our Banking Partners
      </h2>

      <p style={{ color: "#666", marginBottom: "40px", fontSize: "16px" }}>
        We collaborate with trusted banking institutions to provide smooth and secure property transactions.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "60px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {partners.map((bank, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              height: "120px",
              background: "#fff",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={bank.logo}
              alt={bank.name}
              style={{ maxWidth: "100%", maxHeight: "80px", objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BankingPartners;
