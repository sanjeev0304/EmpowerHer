import React, { useState } from "react";
import Navbar from "../components/Home/navbar8";
import './Form.css'

const API_URL = process.env.REACT_APP_API_URL;

const MarketingStrategyForm = () => {
  const [formData, setFormData] = useState({
    
    product_service: "",
    budget: "",
    time_per_week: "",
    age_group: "",
    income_level: "",
    location: "",
    social_media: "",
    local_marketing: "",
    online_presence: "",
    
  });

  const [strategy, setStrategy] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true on submit
    try {
      const response = await fetch(
        `${API_URL}/api/aimodels/generate-strategy`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      console.log(result);
      if (result.success) {
        setStrategy(result.strategy);
        setError("");
      } else {
        setError(result.error || "Failed to generate strategy");
      }
    } catch (err) {
      console.log(err);
      setError("Error connecting to the server in Express +" ,err );
    } finally {
      setLoading(false); // Set loading to false after response
    }
  };

  return (
    <>
    <Navbar />
    <div className="container1">
      <h1>Marketing Strategy Generator</h1>
      <form onSubmit={handleSubmit}>
        <h3>Basic Detsils</h3>
        <label>Products/Services:</label>
        <h6>What your business will sell or offer to customers</h6>
        <input
          type="text"
          name="product_service"
          placeholder="అమ్మడానికి వస్తువు/ఇవ్వాల్సిన సేవ"
          value={formData.product_service}
          onChange={handleChange}
        />
         <label>Budget:</label>
         <h6>The number of hours you can dedicate to your business each week.</h6>
        <input
          type="text"
          name="budget"
          placeholder="బడ్జెట్"
          value={formData.budget}
          onChange={handleChange}
        />
        <label>Time Available per week:</label>
        <h6>The number of hours you can dedicate to your business each week.</h6>
        <input
          type="text"
          name="time_per_week"
          placeholder="వారానికీ అందుబాటులో ఉన్న సమయం"
          value={formData.time_per_week}
          onChange={handleChange}
        />
        <h3>Target Customers</h3>
        <label>Target Age Group:</label>
        <h6> The age range of people you want to target as your customers. </h6>
        <input
          type="text"
          name="age_group"
          placeholder="లక్ష్య వయసు"
          value={formData.age_group}
          onChange={handleChange}
        />
        <label>Target income level:</label>
        <h6>The income range of people who can afford your product or service</h6>
        <input
          type="text"
          name="income_level"
          placeholder="లక్ష్య ఆదాయం"
          value={formData.income_level}
          onChange={handleChange}
        />
        <label>Target location:</label>
        <h6>The area or region where you want to focus your business.</h6>
        <input
          type="text"
          name="location"
          placeholder="లక్ష్య ప్రాంతం"
          value={formData.location}
          onChange={handleChange}
        />
        <h3>Social media and marketing</h3>
        <label>Preferred Social Media Platforms:</label>
        <h6>The social media sites you plan to use for marketing.</h6>
        <input
          type="text"
          name="social_media"
          placeholder="ఇష్టమైన సోషల్ మీడియా ప్లాట్‌ఫారములు"
          value={formData.social_media}
          onChange={handleChange}
        />
        <label>Local Marketing Methods:</label>
        <h6>Strategies to advertise your business within your local area</h6>
        <input
          type="text"
          name="local_marketing"
          placeholder="ప్రాంతీయ మార్కెటింగ్ పద్ధతులు"
          value={formData.local_marketing}
          onChange={handleChange}
        />
        <label>Online Presence:</label>
        <h6>How your business will appear on the internet, such as a website or social media profiles.</h6>
        <input
          type="text"
          name="online_presence"
          placeholder="ఆన్‌లైన్ ప్రస్థానం"
          value={formData.online_presence}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {" "}
          {/* Disable button if loading */}
          {loading ? "Generating..." : "Generate Strategy"}{" "}
          {/* Button text changes */}
        </button>
      </form>
      {loading && <p>Generating your marketing strategy. Please wait...</p>}{" "}
      {/* Loading indicator */}
      {strategy && (
        <div>
          <h2>Generated Marketing Strategy</h2>
          <pre>{strategy}</pre>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
    </>
  );
};

export default MarketingStrategyForm;
