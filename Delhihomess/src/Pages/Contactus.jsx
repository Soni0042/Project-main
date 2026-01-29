// ContactHero.jsx
import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer/Footer";


const Contactus = () => {
  return (
    <>
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/images/cont.jpg')", // change this path
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
        Contact Us
      </h1>


       





    </section>
{/* Google Maps Section unchanged */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Our Office <span className=""> Location </span>
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2458391956993!2d77.084111!3d28.5022504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f547d4da333%3A0x18377a48c79bf137!2sSecure%20Affiliate%20Media%20Pvt%20Ltd%20%7C%20Best%20Affiliate%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1755857554546!5m2!1sen!2sin"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[450px] rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer/>
</>
  );
};

export default Contactus;
