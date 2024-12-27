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
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Main Products/Services:</label>
          <input
            type="text"
            name="products"
            value={formData.products}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Target Audience:</label>
          <input
            type="text"
            name="audience"
            value={formData.audience}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Preferred Starting Letters:</label>
          <input
            type="text"
            name="starting_letters"
            value={formData.starting_letters}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Maximum Word Length:</label>
          <input
            type="text"
            name="max_length"
            value={formData.max_length}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Include Location in Name:</label>
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
          <input
            type="text"
            name="name_style"
            value={formData.name_style}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Include Specific Words:</label>
          <input
            type="text"
            name="include_words"
            value={formData.include_words}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Words to Avoid:</label>
          <input
            type="text"
            name="avoid_words"
            value={formData.avoid_words}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Language Preference:</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Should Rhyme:</label>
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
