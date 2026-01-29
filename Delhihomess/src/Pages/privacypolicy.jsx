import React from "react";
import Footer from "../components/Footer/Footer";

const PrivacyPolicy = () => {
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
          Privacy Policy
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
            Privacy Policy
          </h2>

          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            At <strong>Delhi Homes Solutions PVT. LTD.</strong>, your privacy is our top priority. This policy explains in detail how we collect, handle, store, and protect your personal data when you visit our site or use our services. We are transparent about our practices so you can feel secure and informed at every step.
          </p>

          <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#003366" }}>Information We Collect</h2>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            We gather various types of information when you interact with our website or services, including:
          </p>

          <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "#0055A5" }}>Personal Information</h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            This includes details such as your name, email, phone number, postal address, and any other information you submit when creating an account, subscribing to newsletters, or contacting support. We may also collect any additional information you share voluntarily during engagement with our team or through online forms.
          </p>

          <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "#0055A5" }}>Usage Information</h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            We automatically record technical data including your IP address, browser type, operating system, device information, referring URLs, pages viewed, interaction times, and activity logs. This helps us analyze trends, improve site performance, and maintain security across all user sessions.
          </p>

          <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "#0055A5" }}>Cookies & Similar Technologies</h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            Our website uses cookies, local storage, and analytics scripts to personalize your experience and track your activity for analytics. These technologies help us remember preferences, deliver targeted services, and evaluate use patterns. You can manage cookie settings in your browser, but disabling them may affect certain site features.
          </p>

          <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#003366" }}>How We Use Your Information</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "20px", fontSize: "16px" }}>
            <li>
              <strong>Service Delivery:</strong> Facilitate property searches, enable listings, process transactions, and provide seamless user account management across our platform.
            </li>
            <li>
              <strong>Site Improvement:</strong> Analyze visitor interactions and feedback to enhance our features, optimize performance, and continually refine user interface and workflows.
            </li>
            <li>
              <strong>Communications:</strong> Respond to inquiries, send transactional notifications, deliver newsletters and promotions, and provide personalized support.
            </li>
            <li>
              <strong>Legal & Compliance:</strong> Satisfy legal obligations, help prevent fraud or abuse, investigate suspicious activity, and protect our company’s rights and interests.
            </li>
          </ul>

          <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#003366" }}>Information Sharing & Disclosure</h2>

          <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "#0055A5" }}>Service Providers</h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            We work with trusted vendors (e.g., for hosting, analytics, payment processing, marketing) who help deliver or support our services. These providers are contractually bound to respect confidentiality and use data only as instructed.
          </p>

          <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "#0055A5" }}>Business Partners</h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            Select information may be shared with affiliated or partner companies to provide additional services, bundled promotions, or value-added experiences. We require partners to uphold strong data protection standards.
          </p>

          <h3 style={{ fontSize: "20px", marginBottom: "10px", color: "#0055A5" }}>Legal Requirements</h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            Your data may be disclosed to government agencies, courts, or legal representatives in response to lawful requests, or when required to comply with legal obligations and protect our rights and safety.
          </p>

          <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#003366" }}>Data Security</h2>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            We implement robust security measures including SSL encryption, restricted system access, and routine security audits. Despite rigorous safeguards, no online transmission or storage system is entirely secure. We encourage you to exercise caution and report any suspicious activity.
          </p>

          <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#003366" }}>International Data Transfers</h2>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            If your information is transferred or processed outside of your country, we ensure all international transfers comply with relevant data protection regulations and maintain stringent protective measures.
          </p>

          <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#003366" }}>Changes to this Policy</h2>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            This policy may be updated as our services evolve or regulations change. All amendments are effective upon posting. Please review this page regularly to stay informed about our practices.
          </p>

          <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#003366" }}>Your Rights & Choices</h2>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            Depending on your location, you may have rights to access, correct, restrict, or delete your personal data, withdraw consent where applicable, or object to certain uses. To exercise these rights or for privacy-related questions, contact us as below.
          </p>

          <h2 style={{ fontSize: "24px", marginBottom: "15px", color: "#003366" }}>Contact Us</h2>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            For any privacy concerns, data requests, or questions about this policy, reach our support team at <a href="mailto:Support@delhihomess.com">Support@delhihomess.com</a>.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
