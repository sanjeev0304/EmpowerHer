// import React, { useState } from "react";
// import Navbar from "../components/Home/navbar8";
// import "./BusinessPlan.css";

// const API_URL = process.env.REACT_APP_API_URL;


// const BusinessPlan = () => {
//   const [formData, setFormData] = useState({
//     product: "",
//     investment: "",
//     location: "",
//     target_market: "",
//     hours_per_day: "",
//     help: "",
//     competition: "",
//     location_type: "",
//     target_customers: "",
//     starting_money: "",
//     monthly_expenses: "",
//   });

//   const [result, setResult] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false); // Loading state

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setResult("");
//     setError("");
//     setLoading(true); // Set loading to true when form is submitted

//     try {
//       const response = await fetch(`${API_URL}/api/aimodels/businessplan`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       if (result.success) {
//         setResult(result.plan);
//       } else {
//         setError(result.message || result.error || "Failed to generate plan");
//       }
//     } catch (err) {
//       setError("Error connecting to the server.");
//     } finally {
//       setLoading(false); // Set loading to false after the request is completed
//     }
//   };

//   return (
//     <>
//    <Navbar />
//     <div className="container1">
//       <h1>Business Plan Generator</h1>
//       <form onSubmit={handleSubmit}>
//           <label>Product/Service:</label>
//           <input
//             type="text"
//             name="product"
//             value={formData.product}
//             onChange={handleChange}
//             required
//           />
//           <label>Initial Investment:</label>
//           <input
//             type="text"
//             name="investment"
//             value={formData.investment}
//             onChange={handleChange}
//             required
//           />
      
//           <label>Location:</label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             required
//           />
       
//           <label>Target Market:</label>
//           <input
//             type="text"
//             name="target_market"
//             value={formData.target_market}
//             onChange={handleChange}
//             required
//           />
        
//           <label>Hours per Day:</label>
//           <input
//             type="number"
//             name="hours_per_day"
//             value={formData.hours_per_day}
//             onChange={handleChange}
//             required
//           />


//           <label>Available Help:</label>
//           <input
//             type="text"
//             name="help"
//             value={formData.help}
//             onChange={handleChange}
//             required
//           />
//  =
        
//           <label>Competition Level:</label>
//           <input
//             type="text"
//             name="competition"
//             value={formData.competition}
//             onChange={handleChange}
//             required
//           />
//           <label>Location Type:</label>
//           <input
//             type="text"
//             name="location_type"
//             value={formData.location_type}
//             onChange={handleChange}
//             required
//           />
       
//           <label>Target Customers:</label>
//           <input
//             type="text"
//             name="target_customers"
//             value={formData.target_customers}
//             onChange={handleChange}
//             required
//           />
        
//           <label>Starting Money Range:</label>
//           <input
//             type="text"
//             name="starting_money"
//             value={formData.starting_money}
//             onChange={handleChange}
//             required
//           />
//           <label>Monthly Expenses:</label>
//           <input
//             type="text"
//             name="monthly_expenses"
//             value={formData.monthly_expenses}
//             onChange={handleChange}
//             required
//           />
//         <button type="submit" disabled={loading}>
//           {loading ? "Generating..." : "Generate Plan"}
//         </button>
//       </form>
//       {loading && <p>Loading...</p>} {/* Loading indicator */}
//       {result && (
//         <div>
//           <h2>Generated Business Plan</h2>
//           <pre style={{ textAlign: "left", whiteSpace: "pre-wrap" }}>
//             {result}
//           </pre>
//         </div>
//       )}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//     </>
//   );
// };

// export default BusinessPlan;




import React, { useState } from "react";
import Navbar from "../components/Home/navbar8";


const API_URL = process.env.REACT_APP_API_URL;

const BusinessPlan = () => {
  const [formData, setFormData] = useState({
    product: "",
    investment: "",
    location: "",
    target_market: "",
    hours_per_day: "",
    help: "",
    competition: "",
    location_type: "",
    target_customers: "",
    starting_money: "",
    monthly_expenses: "",
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
      const response = await fetch(`${API_URL}/api/aimodels/businessplan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setResult(result.plan);
      } else {
        setError(result.message || result.error || "Failed to generate plan");
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
        <h1>Business Plan Generator</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Product/Service:</label>
            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Initial Investment:</label>
            <input
              type="text"
              name="investment"
              value={formData.investment}
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
            <label>Target Market:</label>
            <input
              type="text"
              name="target_market"
              value={formData.target_market}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Hours per Day:</label>
            <input
              type="number"
              name="hours_per_day"
              value={formData.hours_per_day}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Available Help:</label>
            <input
              type="text"
              name="help"
              value={formData.help}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Competition Level:</label>
            <input
              type="text"
              name="competition"
              value={formData.competition}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location Type:</label>
            <input
              type="text"
              name="location_type"
              value={formData.location_type}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Target Customers:</label>
            <input
              type="text"
              name="target_customers"
              value={formData.target_customers}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Starting Money Range:</label>
            <input
              type="text"
              name="starting_money"
              value={formData.starting_money}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Monthly Expenses:</label>
            <input
              type="text"
              name="monthly_expenses"
              value={formData.monthly_expenses}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Generating..." : "Generate Plan"}
          </button>
        </form>
        {loading && <p>Loading...</p>}
        {result && (
          <div>
            <h2>Generated Business Plan</h2>
            <pre>{result}</pre>
          </div>
        )}
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
};

export default BusinessPlan;

