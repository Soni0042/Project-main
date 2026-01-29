
import React from "react";
import Footer from "../components/Footer/Footer";

const Aboutus = () => {
  return (
    <>
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/images/aboutus.png')", // change this path
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
        About Us
      </h1>


       





    </section>

{/* About Content */}
      <section style={{ maxWidth: "1100px", margin: "50px auto", padding: "0 20px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px", color: "#004080" }}>
          Who We Are
        </h2>

        <p style={{ fontSize: "17px", marginBottom: "20px" }}>
          Delhi Homes Solutions Pvt. Ltd. is your trusted partner in navigating Delhi’s dynamic and
          ever-evolving real estate landscape. Founded with a vision to redefine the home-buying
          and property investment experience, we have grown into a leading name in the Delhi real
          estate industry.
        </p>

        <p style={{ fontSize: "17px", marginBottom: "20px" }}>
          Our journey is built on passion, expertise, and a commitment to delivering excellence
          at every step. With a team of seasoned professionals, we bring unmatched knowledge,
          market insights, and customer-focused strategies to ensure every client receives
          exceptional service and stress-free property solutions.
        </p>

        <p style={{ fontSize: "17px", marginBottom: "20px" }}>
          We specialize in providing personalized guidance tailored to your goals. Whether you are
          searching for your dream home, exploring investment opportunities, looking for commercial
          spaces, or planning to sell property, our team is dedicated to helping you make confident
          and informed decisions.
        </p>

        <p style={{ fontSize: "17px", marginBottom: "20px" }}>
          Our services cover a complete range of real estate requirements — including buying,
          selling, renting, consultation, and investment advisory. Our core values of integrity,
          transparency, and customer satisfaction define who we are and how we work.
        </p>

        <p style={{ fontSize: "17px", marginBottom: "20px" }}>
          Let Delhi Homes Solutions Pvt. Ltd. be your key to unlocking the finest property
          opportunities in the heart of the capital. Together, let’s turn your real estate
          aspirations into reality. Contact us today for a complimentary consultation.
        </p>
      </section>

      {/* Mission & Vision */}
      <section style={{ maxWidth: "1100px", margin: "50px auto", padding: "0 20px" }}>

        {/* Mission */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px", color: "#004080" }}>
          Mission
        </h2>
        <p style={{ fontSize: "17px", marginBottom: "40px" }}>
          Delhi Homes Solutions Pvt. Ltd. is committed to empowering individuals and businesses to
          achieve their real estate goals through exceptional property solutions, expert guidance,
          and outstanding customer service. We strive to create long-lasting relationships built
          on trust, clarity, and a seamless service experience — transforming the way people
          interact with Delhi’s real estate market.
        </p>

        {/* Vision */}
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "20px", color: "#004080" }}>
          Vision
        </h2>
        <p style={{ fontSize: "17px", marginBottom: "40px" }}>
          Our vision is to become Delhi’s most trusted and preferred real estate partner, shaping
          the future of the city’s property landscape through innovation, integrity, and a
          customer-centric approach. We aim to create a future where every client finds their
          perfect property match with ease and confidence — making Delhi Homes Solutions
          synonymous with excellence in real estate services.
        </p>

      </section>
    


    
    <Footer/>
    </>
      );
};

export default Aboutus;