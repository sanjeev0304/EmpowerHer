import React, { useState } from "react";
import Navbar from "../components/Home/navbar8";
import './Form.css'

const API_URL = process.env.REACT_APP_API_URL;

const MarketingStrategyForm = () => {
  const [formData, setFormData] = useState({
    business_name: "",
    product_service: "",
    budget: "",
    time_per_week: "",
    age_group: "",
    income_level: "",
    location: "",
    social_media: "",
    local_marketing: "",
    online_presence: "",
    post_photos: "",
    share_reviews: "",
    announce_offers: "",
    respond_messages: "",
    online_advertising: "",
    printed_materials: "",
    local_marketing_budget: "",
    customer_offers_budget: "",
  });

  const [strategy, setStrategy] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      if (result.success) {
        setStrategy(result.strategy);
        setError("");
      } else {
        setError(result.error || "Failed to generate strategy");
      }
    } catch (err) {
      setError("Error connecting to the server");
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
        <h3>Basic Business Details</h3>
        <input
          type="text"
          name="business_name"
          placeholder="Business Name"
          value={formData.business_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="product_service"
          placeholder="Product/Service"
          value={formData.product_service}
          onChange={handleChange}
        />
        <input
          type="text"
          name="budget"
          placeholder="Budget (Monthly)"
          value={formData.budget}
          onChange={handleChange}
        />
        <input
          type="text"
          name="time_per_week"
          placeholder="Time Available Per Week"
          value={formData.time_per_week}
          onChange={handleChange}
        />
        <h3>Target Customers</h3>
        <input
          type="text"
          name="age_group"
          placeholder="Target Age Group"
          value={formData.age_group}
          onChange={handleChange}
        />
        <input
          type="text"
          name="income_level"
          placeholder="Target Income Level"
          value={formData.income_level}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Target Location"
          value={formData.location}
          onChange={handleChange}
        />
        <h3>Social media and marketing</h3>
        <input
          type="text"
          name="social_media"
          placeholder="Preferred Social Media Platforms"
          value={formData.social_media}
          onChange={handleChange}
        />
        <input
          type="text"
          name="local_marketing"
          placeholder="Local Marketing Methods"
          value={formData.local_marketing}
          onChange={handleChange}
        />
        <input
          type="text"
          name="online_presence"
          placeholder="Online Presence"
          value={formData.online_presence}
          onChange={handleChange}
        />
        <input
          type="text"
          name="post_photos"
          placeholder="Post Photos of Products/Services"
          value={formData.post_photos}
          onChange={handleChange}
        />
        <input
          type="text"
          name="share_reviews"
          placeholder="Share Customer Reviews"
          value={formData.share_reviews}
          onChange={handleChange}
        />
        <input
          type="text"
          name="announce_offers"
          placeholder="Announce Offers/Updates"
          value={formData.announce_offers}
          onChange={handleChange}
        />
        <input
          type="text"
          name="respond_messages"
          placeholder="Respond to Customer Messages"
          value={formData.respond_messages}
          onChange={handleChange}
        />
        <input
          type="text"
          name="online_advertising"
          placeholder="Online Advertising Budget (%)"
          value={formData.online_advertising}
          onChange={handleChange}
        />
        <input
          type="text"
          name="printed_materials"
          placeholder="Printed Materials Budget (%)"
          value={formData.printed_materials}
          onChange={handleChange}
        />
        <h3>Budget for Marketing</h3>
        <input
          type="text"
          name="local_marketing_budget"
          placeholder="Local Marketing Budget (%)"
          value={formData.local_marketing_budget}
          onChange={handleChange}
        />
        <input
          type="text"
          name="customer_offers_budget"
          placeholder="Customer Offers Budget (%)"
          value={formData.customer_offers_budget}
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
