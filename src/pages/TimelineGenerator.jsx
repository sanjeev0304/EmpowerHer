import React, { useState } from "react";
import Navbar from "../components/Home/navbar8";
import "./TimelineGenerator.css";
const API_URL = process.env.REACT_APP_API_URL;

const TimelineGenerator = () => {
  const [businessIdea, setBusinessIdea] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/api/aimodels/generate-timeline`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ business_idea: businessIdea }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setResult(data);
      } else {
        setError(data.error || "Failed to generate timeline");
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
<div className="test">
    <div className="timeline-generator-container">
      <h1 className="heading">Business Timeline Generator</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label className="label" htmlFor="businessIdea">Business Idea:</label>
          <textarea 
          className="textarea"
            id="businessIdea"
            name="businessIdea"
            value={businessIdea}
            onChange={(e) => setBusinessIdea(e.target.value)}
            placeholder="Describe your business idea..."
            required
          />
        </div>
        <button className="button"  type="submit" disabled={loading}>
          {loading ? "Generating..." : "Generate Timeline"}
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {result && (
        <div>
          <h2>Generated Timeline</h2>
          <ul>
            {Object.entries(result).map(([milestone, targetDate], index) => (
              <li key={index}>
                <strong>{milestone}:</strong> {targetDate}
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
    </div>
    </>
  );
};

export default TimelineGenerator;
