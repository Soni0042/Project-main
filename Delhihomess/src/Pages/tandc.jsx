import React from "react";
import Footer from "../components/Footer/Footer";

const TermsConditions = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/images/propval.jpeg')", // you can change the image
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

        {/* Title */}
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
          Terms & Conditions
        </h1>
      </section>

      {/* CONTENT SECTION */}
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
            Terms and Conditions
          </h2>

          {/* Paragraphs */}
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            Welcome to Delhi Homes Solutions PVT. LTD! These Terms and Conditions
            outline the rules and regulations for the use of the Delhi Homes
            website and services. By accessing or using our website, you agree to
            comply with these terms. Please read them carefully.
          </p>

          {/* 1 */}
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#004080",
              marginBottom: "10px",
              marginTop: "30px",
            }}
          >
            1. Acceptance of Terms
          </h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            By accessing or using the Delhi Homes website or any services
            provided by Delhi Homes Solutions PVT. LTD, you agree to be bound by
            these Terms and Conditions. If you do not agree, please refrain from
            using the Site or Services.
          </p>

          {/* 2 */}
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#004080",
              marginBottom: "10px",
            }}
          >
            2. Use of the Site and Services
          </h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            You must be at least 18 years old to use the Site and Services. You
            agree not to use the Site for any illegal activities or any action
            that may harm our servers, networks, or operations.
          </p>

          {/* 3 */}
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#004080",
              marginBottom: "10px",
            }}
          >
            3. Intellectual Property
          </h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            All content on the Site — including text, images, graphics, and
            logos — belongs to Delhi Homes Solutions PVT. LTD or its licensors
            and is protected by law. Reproduction or distribution without written
            permission is prohibited.
          </p>

          {/* 4 */}
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#004080",
              marginBottom: "10px",
            }}
          >
            4. Privacy
          </h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            Please review our Privacy Policy to understand how we collect and use
            your data. By using our Site or Services, you consent to this
            collection and use.
          </p>

          {/* 5 */}
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#004080",
              marginBottom: "10px",
            }}
          >
            5. Limitation of Liability
          </h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            Delhi Homes Solutions PVT. LTD is not liable for indirect, incidental,
            special, or consequential damages, including loss of profits, data,
            goodwill, or other intangible losses resulting from your use or
            inability to use the Site or Services.
          </p>

          {/* 6 */}
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#004080",
              marginBottom: "10px",
            }}
          >
            6. Governing Law
          </h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            These Terms shall be governed by applicable laws. Any disputes shall
            be subject to the jurisdiction of the courts as per governing legal
            guidelines.
          </p>

          {/* 7 */}
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#004080",
              marginBottom: "10px",
            }}
          >
            7. Changes to Terms
          </h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            Delhi Homes Solutions PVT. LTD reserves the right to modify these
            Terms at any time. Continued use of the Site after updates means you
            accept the revised Terms.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsConditions;
