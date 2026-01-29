import React from "react";

const features = [
  {
    img: "/images/prop.jpg",
    title: "Properties",
    desc: "Discover your dream home or investment opportunity with Delhi Homes Solutions PVT LTD. We offer a curated selection of Flats, Residences, and Apartments in Delhi, Gurgaon, and Noida.",
  },
  {
    img: "/images/proj.jpg",
    title: "Projects",
    desc: "Delhi Homes has many projects, setting a new standard of luxury living in the heart of Delhi. Our meticulously designed residences offer unparalleled comfort and style, surrounded by world-class amenities.",
  },
  {
    img: "/images/rtm.jpg",
    title: "Ready-to-Move Homes",
    desc: "Move into your dream home today! Our ready-to-move-in properties offer luxurious living spaces, world-class amenities, and a convenient location. Experience the joy of immediate possession and hassle-free living.",
  },
];

const LadderFeatures = () => (
  <section style={{ maxWidth: 1200, margin: "4rem auto", padding: "0 20px  ", borderRadius: "12px" }}>
    <h2
      style={{
        textAlign: "center",
        fontSize: "2.5rem",
        fontWeight: 600,
        marginBottom: "4rem",
        color: "#004080",
        
      }}
    >
      Dream Delhi Homes Tour Starts from Here
    </h2>

    {features.map(({ img, title, desc }, index) => {
      const isEven = index % 2 === 0;
      return (
        <div
          key={title}
          style={{
            display: "flex",
            flexDirection: isEven ? "row" : "row-reverse",
            alignItems: "center",
            gap: "2.5rem",
            marginBottom: "4rem",
            flexWrap: "wrap",
            padding: "2.5rem",
            borderRadius: "12px",
            background: "#",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            transition: "transform 0.3s ease",
          }}
          className="feature-card"
        >
          <img
            src={img}
            alt={title}
            style={{
              width: "400px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "12px",
              flexShrink: 0,
              boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
            }}
          />
          <div style={{ maxWidth: "600px" }}>
            <h3
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                color: "#111",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.7,
                color: "#555",
              }}
            >
              {desc}
            </p>
          </div>
        </div>
      );
    })}
  </section>
);

export default LadderFeatures;
