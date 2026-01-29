import React from "react";
import Footer from "../components/Footer/Footer";
import { Calculator } from "lucide-react";
import Emic from "../components/calc";


const EmiCalculator = () => {
  return (
    <>
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: "url('/images/emi.jpg')", // update with suitable image
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
          EMI Calculator
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
            Understanding EMI Calculator
          </h2>

          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            This home loan EMI calculator helps you determine your EMI (Equated Monthly Installment) and the total interest you will pay over the course of the loan. Remember, the longer the loan term, the more interest you will pay.
          </p>

          <h3
            style={{
              fontSize: "26px",
              fontWeight: "600",
              color: "#004080",
              marginTop: "40px",
              marginBottom: "15px",
            }}
          >
            How Does the Home Loan EMI Calculator Work?
          </h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            You can calculate your home loan EMI using this tool, which estimates monthly payments when planning to buy or build a new home. The calculator also shows the total interest payable over your loan tenure, where:
          </p>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            Loan Amount + Total Interest = Total Amount to Repay Your Loan.
          </p>

          <h3
            style={{
              fontSize: "26px",
              fontWeight: "600",
              color: "#004080",
              marginTop: "40px",
              marginBottom: "15px",
            }}
          >
            How Are Home Loan EMIs Calculated?
          </h3>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            The calculation involves the interest rate, the remaining tenure in months, and the outstanding principal loan amount. Excel's PMT function reflects this calculation, where the interest rate is divided by 100 to get monthly interest.
          </p>
          <p style={{ marginBottom: "20px", fontSize: "16px" }}>
            Your EMI consists of two parts: principal repayment and interest payment. Initially, interest dominates your EMI, but over time the principal portion increases as interest decreases.
          </p>

          <h3
            style={{
              fontSize: "26px",
              fontWeight: "600",
              color: "#004080",
              marginTop: "40px",
              marginBottom: "15px",
            }}
          >
            Parts of a Loan EMI
          </h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", listStyleType: "disc" }}>
            <li>Principal Amount - starts low but grows over time.</li>
            <li>Interest Amount - starts high and gradually declines.</li>
            <li>You pay the majority of interest during the first half of the loan tenure.</li>
          </ul>

         
        </div>
      </section>
      <Emic/>

      <Footer />
    </>
  );
};

export default EmiCalculator;
