import React from "react";

const AboutUs = () => {
  const sectionStyle = {
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    color: "#333",
    fontSize: "3rem",
    marginTop: "2rem",
    // marginBottom: "3rem",
    fontWeight: "bold",
  };

  const subheadingStyle = {
    color: "#555",
    fontSize: "2rem",
    // marginTop: "2rem",
    marginBottom: "2rem",
    fontWeight: "600",
  };

  const textStyle = {
    color: "#555",
    fontSize: "1.5rem",
    lineHeight: "1.8",
    marginBottom: "4rem",
    marginTop: "0rem",
  };

  const listStyle = {
    paddingLeft: "2rem",
    
    marginBottom: "3rem",
  };

  const listItemStyle = {
    marginBottom: "1rem",
    fontSize: "1.5rem",
    // textStyle:"center",

  };

  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={textStyle}>
        <strong>What Are We:</strong> To make business opportunities accessible and achievable for rural women through an AI-powered platform that provides tools, guidance, and resources for entrepreneurial success.
      </p>
      <h2 style={subheadingStyle}>Features We Provide:</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Business Plan Generator:</strong> Creates complete business plans based on your inputs about industry and goals. Useful for loan applications, investor pitches, and strategic planning.
        </li>
        <li style={listItemStyle}>
          <strong>Marketing Strategy Planner:</strong> Develops targeted marketing plans considering your budget and audience. Helps identify best channels and tactics for reaching potential customers.
        </li>
        <li style={listItemStyle}>
          <strong>Timeline Generator:</strong> Creates realistic project schedules with key milestones for business launch. Helps track progress and manage deadlines effectively.
        </li>
        <li style={listItemStyle}>
          <strong>Financial Calculator:</strong> Calculates startup costs, revenue projections, and break-even points. Critical for budgeting and financial planning decisions.
        </li>
        <li style={listItemStyle}>
          <strong>Business Name Generator:</strong> Creates unique, relevant business names that align with your brand values. Checks domain availability and suggests memorable options.
        </li>
      </ul>
      <h2 style={subheadingStyle}>Learning Resources:</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <strong>Success Stories:</strong> Inspires and motivates women by showcasing the achievements of other famous women, helping them stay motivated throughout their journey.
        </li>
        <li style={listItemStyle}>
          <strong>Government Schemes:</strong> A curated list of the best government schemes that benefit women entrepreneurs, ensuring they can access valuable support and resources.
        </li>
      </ul>
    </section>
  );
};

export default AboutUs;
