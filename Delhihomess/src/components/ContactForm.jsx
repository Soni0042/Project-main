import React from "react";

const ContactForm = () => {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#ffffff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "750px",
          background: "#ffffff",
          padding: "50px 40px",
          borderRadius: "16px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.05)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "34px",
            marginBottom: "10px",
            color: "#003eaa",
            fontWeight: "700",
            letterSpacing: "0.5px",
          }}
        >
          Send Us a Message
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "40px",
            fontSize: "16px",
          }}
        >
          We’d love to hear from you. Please fill out the form below.
        </p>

        <form style={{ width: "100%" }}>

          {/* --- First + Last Name Row --- */}
          <div style={{ display: "flex", gap: "20px", marginBottom: "25px" }}>
            
            {/* First Name */}
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>First Name</label>
              <input type="text" placeholder="Enter your first name" style={inputStyle} />
            </div>

            {/* Last Name */}
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Last Name</label>
              <input type="text" placeholder="Enter your last name" style={inputStyle} />
            </div>
          </div>

          {/* Email + Phone Row */}
          <div style={{ display: "flex", gap: "20px", marginBottom: "25px" }}>
            
            {/* Email */}
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Email Address</label>
              <input type="email" placeholder="Enter your email" style={inputStyle} />
            </div>

            {/* Phone */}
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Phone Number</label>
              <input type="text" placeholder="Enter your phone number" style={inputStyle} />
            </div>
          </div>

          {/* Subject */}
          <div style={{ marginBottom: "25px" }}>
            <label style={labelStyle}>Subject</label>
            <input type="text" placeholder="Enter subject" style={inputStyle} />
          </div>

          {/* Message */}
          <div style={{ marginBottom: "30px" }}>
            <label style={labelStyle}>Message</label>
            <textarea
              placeholder="Write your message..."
              style={{
                ...inputStyle,
                minHeight: "170px",
                resize: "none",
              }}
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "18px",
              background: "#003eaa",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "600",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.background = "#002a7a")}
            onMouseOut={(e) => (e.target.style.background = "#003eaa")}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

/* Reusable inline styles */
const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "600",
  color: "#333",
  fontSize: "15px",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  fontSize: "15px",
  borderRadius: "10px",
  border: "1px solid #dcdcdc",
  outline: "none",
  background: "#fff",
  transition: "all 0.3s ease",
};

export default ContactForm;
