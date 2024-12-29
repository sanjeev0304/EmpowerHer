import React, { useState } from "react";
import Navbar from "../components/Home/navbar8";
import './name.css';
const API_URL = process.env.REACT_APP_API_URL;

const NameGenerator = () => {
  const [formData, setFormData] = useState({
    industry: "",
    products: "",
    audience: "",
    location: "",
    starting_letters: "",
    max_length: "",
    include_location: "",
    name_style: "",
    include_words: "",
    avoid_words: "",
    language: "",
    rhyme: "",
  });

  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/aimodels/generate-name`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setResult(result.names);
      } else {
        setError(result.error || "Failed to generate names");
      }
    } catch (err) {
      setError("Error connecting to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="container1">
      <h1>Business Name Generator</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Industry:</label>
          <h6> The type of business or field you are entering (e.g., fashion, technology)</h6>
          <input
            type="text"
            name="industry"
            placeholder="పరిశ్రమ"
            value={formData.industry}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Main Products/Services:</label>
          <h6>The primary items or services your business will offer.</h6>
          <input
            type="text"
            name="products"
            placeholder="అమ్మడానికి వస్తువు/ఇవ్వాల్సిన సేవ"
            value={formData.products}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Target Audience:</label>
          <h6>The group of people who are most likely to buy your products or use your services</h6>
          <input
            type="text"
            name="audience"
            placeholder="టార్గెట్ కస్టమర్లు"
            value={formData.audience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <h6>The geographical area where your business will operate or be focused.</h6>
          <input
            type="text"
            name="location"
            placeholder="ప్రదేశం"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Preferred Starting Letters:</label>
          <h6>The first letters you prefer for your business name.</h6>
          <input
            type="text"
            name="starting_letters"
            placeholder="ఇష్టమైన ప్రారంభ అక్షరాలు"
            value={formData.starting_letters}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Maximum Word Length:</label>
          <h6>The maximum number of words or characters allowed in your business name.</h6>
          <input
            type="text"
            name="max_length"
            placeholder="మొత్తం పదం పొడవు"
            value={formData.max_length}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Include Location in Name:</label>
          <h6>Whether you want to include the name of your location or area in your business name.</h6>
          <select
            name="include_location"
            value={formData.include_location}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Name Style:</label>
          <h6>The type of name you're aiming for (e.g., modern, professional, playful).</h6>
          <input
            type="text"
            name="name_style"
            value={formData.name_style}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Include Specific Words:</label>
          <h6>Words you want to appear in your business name</h6>
          <input
            type="text"
            name="include_words"
            placeholder="ప్రత్యేక పదాలు"
            value={formData.include_words}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Words to Avoid:</label>
          <h6>Words you do not want to be in your business name.</h6>
          <input
            type="text"
            name="avoid_words"
            placeholder="వాడకూడని పదాలు"
            value={formData.avoid_words}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Language Preference:</label>
          <h6>The language you want the business name to be in.</h6>
          <input
            type="text"
            name="language"
            placeholder="భాషా ప్రాధాన్యం"
            value={formData.language}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Should Rhyme:</label>
          <h6>Whether you want the name to have a rhyming or catchy sound.</h6>
          <select name="rhyme" value={formData.rhyme} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate Names"}
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {result && (
        <div>
          <h2>Generated Business Names</h2>
          <pre style={{ textAlign: "left", whiteSpace: "pre-wrap" }}>
            {result}
          </pre>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
    </>
  );
};

export default NameGenerator;
