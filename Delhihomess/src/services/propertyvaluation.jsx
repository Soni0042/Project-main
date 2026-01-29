import React from "react";
import Footer from "../components/Footer/Footer";

const PropertyValuation = () => {
  return (
    <>
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/images/propval.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Overlay (dark layer for text visibility) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.3)",
          }}
        />
        {/* Text */}
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
          Property Valuation
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
          {/* Heading */}
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#004080",
              marginBottom: "20px",
            }}
          >
            Property Valuation
          </h2>

          {/* Description */}
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            Delhi Homes offers comprehensive valuation and consultation services for all types of properties across Delhi. Whether you need a detailed appraisal report or specialized evaluation, our experienced team delivers precise, reliable, and professionally structured valuation solutions.
          </p>

          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            Different types of properties require different valuation approaches. Income-generating properties usually demand methods like the <strong>1st Year Income Capitalization Method</strong> or <strong>Discounted Cash Flow Analysis</strong>. Residential properties, land, and specialized structures are assessed using the <strong>Comparable Sales Method</strong>.
          </p>

          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            For unique or complex property types, valuation approaches like <strong>Estimated New Replacement Cost (ENRC)</strong> or <strong>Depreciated Replacement Cost (DRC)</strong> are used depending on insurance or market-value requirements.
          </p>

          {/* Subheading */}
          <h3
            style={{
              marginTop: "40px",
              fontSize: "26px",
              fontWeight: "600",
              color: "#004080",
              marginBottom: "15px",
            }}
          >
            Our Valuation Services Include:
          </h3>

          {/* List with bullet points */}
          <ul style={{ paddingLeft: "20px", fontSize: "16px", listStyleType: "disc" }}>
            <li>Market value assessments for buying and selling real estate.</li>
            <li>Market value evaluations for accounting and financial reporting.</li>
            <li>Estimated New Replacement Cost (ENRC) calculations for insurance purposes.</li>
            <li>Depreciated Replacement Value (DRV) for specialized property market analysis.</li>
            <li>Market rental assessments for lease negotiations and dispute resolution.</li>
            <li>Valuations for legal cases, arbitration, and divorce settlements.</li>
            <li>Assistance with municipal market value objections to avoid over-taxation.</li>
            <li>Estate valuations for deceased property cases, capital gains tax, and liquidation.</li>
            <li>Asset appraisal for security, bank loans, and mortgage evaluations.</li>
            <li>Valuations for alternative land use, development potential, immigration, or expropriation.</li>
            <li>Servitude valuations, land claims, merger/takeover valuations, and division of family/business property assets.</li>
          </ul>

          {/* Final Paragraph */}
          <p style={{ marginTop: "30px", fontSize: "16px" }}>
            To ensure a seamless "one-stop service" experience, we collaborate with top industry professionals specializing in various domains of property consultation. This enables us to deliver accurate, legally compliant, and client-focused valuation services tailored to your unique requirements.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PropertyValuation;
