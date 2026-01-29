import React from "react";
import Footer from "../components/Footer/Footer";

const RatesAndTrends = () => {
  return (
    <>
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/images/randt.jpg')", // Update with relevant image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.3)",
          }}
        />
        {/* Heading */}
        <h1
          style={{
            position: "relative",
            color: "#fff",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: "500",
            textAlign: "center",
            zIndex: 2,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Rates & Trends
        </h1>
      </section>

      <section
        style={{
          padding: "60px 20px",
          background: "#ffffff",
          fontFamily: "'Segoe UI', Tahoma, sans-serif",
          lineHeight: 1.7,
          color: "#333",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#004080",
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            Understanding Rates & Trends
          </h2>

          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            A database called Rates & Trends provides pricing patterns for residential and commercial properties in neighborhoods across Indian cities. These trends are available from both sale and rent perspectives and can be viewed as tables or graphs tailored to each community.
          </p>

          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            This resource offers detailed information on standard prices and quarterly price fluctuations specific to your community, making it a valuable tool when selecting a home.
          </p>

          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            Furthermore, it allows comparison of data for Delhi and Delhi-NCR cities, showing average prices alongside the highest and lowest prices in the area to give a comprehensive market overview.
          </p>

          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            This information helps buyers, renters, and investors make informed decisions by understanding local market trends and price behavior over time.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default RatesAndTrends;
