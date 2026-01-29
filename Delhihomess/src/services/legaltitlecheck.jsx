import React from "react";
import Footer from "../components/Footer/Footer";

const LegalTitleCheck = () => {
  return (
    <>
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/images/ltc.jpg')",
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
        {/* Heading Text */}
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
          Legal Title Check
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
          {/* Page Heading */}
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#004080",
              marginBottom: "20px",
              textAlign: "left",
            }}
          >
            Legal Title Check
          </h2>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            Ensuring the authenticity and legality of property documents is a
            crucial step when buying or selling real estate. Delhi Homes Solutions
            PVT. LTD protects buyers by verifying documents, identifying risks,
            and ensuring complete legal transparency.
          </p>

          {/* Section 1 */}
          <h3
            style={{
              fontSize: "26px",
              fontWeight: "600",
              color: "#004080",
              marginTop: "40px",
              marginBottom: "15px",
            }}
          >
            Why Legal Verification is Essential
          </h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            In regions like Delhi and Delhi-NCR where transparency is often
            lacking, it is critical to physically verify all documents before
            purchasing any property. Our experts strongly recommend consulting a
            legal professional who can guide you through this complex process and
            ensure your interests are protected.
          </p>

          {/* Section 2 */}
          <h3
            style={{
              fontSize: "26px",
              fontWeight: "600",
              color: "#004080",
              marginTop: "40px",
              marginBottom: "15px",
            }}
          >
            Key Documents &amp; Verification Checklist
          </h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            According to our legal experts, the following key verification points
            must be carefully reviewed and incorporated into the agreement:
          </p>
          <ul
            style={{
              paddingLeft: "20px",
              fontSize: "16px",
              color: "#333",
              listStyleType: "disc",
            }}
          >
            <li style={{ marginBottom: "12px" }}>
              <strong>Identifying Details:</strong> The agreement
              must include seller details such as name, father's name, address,
              PAN, Aadhaar, and bank information. Land record details must also
              match municipal or tehsil records. Two witnesses—one from buyer and
              seller—must sign the agreement.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong>Date of Possession:</strong> The buyer must be aware of the
              exact possession date. If delayed beyond the agreed date, legal
              action may be pursued.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong>Time of Essence Clause:</strong> Defines deadlines by which
              parties must fulfill their responsibilities.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong>Payment Schedule:</strong> Specifies total amount, payment
              deadlines, and installment breakdown if applicable.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong>Termination Clause:</strong> Covers penalties for breach and
              may include a “termination for convenience” option.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong>Amenities Clause:</strong> Details extra benefits and
              associated maintenance costs. Missing amenities count as a contract
              violation.
            </li>
            <li>
              <strong>Penalty Clause:</strong> Defines consequences if either party
              fails to meet agreed milestones.
            </li>
          </ul>

          {/* Final Section */}
          <h3
            style={{
              fontSize: "26px",
              fontWeight: "600",
              color: "#004080",
              marginTop: "40px",
              marginBottom: "15px",
            }}
          >
            Importance of a Registered Agreement
          </h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            A legally executed and registered purchase agreement protects the buyer
            against disputes and ensures the property ownership is clearly
            established. Once registered, it cannot be altered.
          </p>
          <p style={{ fontSize: "16px" }}>
            Any changes required later must be made through a formal amendment
            process with full consent of the buyer.
          </p>
        </div>
      </section>
      <Footer/>
    </>
    
  );
};

export default LegalTitleCheck;
