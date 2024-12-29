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
            <h6>What your business will offer, such as a product or a service.</h6>
            <input
              type="text"
              name="product"
              placeholder="అమ్మడానికి వస్తువు/ఇవ్వాల్సిన సేవ"
              value={formData.product}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Initial Investment:</label>
            <h6>The amount of money needed to start your business</h6>
            <input
              type="text"
              name="investment"
              placeholder="ప్రారంభ పెట్టుబడి"
              value={formData.investment}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <h6>The specific group of customers your business aims to serve.</h6>
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
            <label>Target Market:</label>
            <h6>The specific group of customers your business aims to serve</h6>
            <input
              type="text"
              name="target_market"
              placeholder="టార్గెట్ కస్టమర్లు"
              value={formData.target_market}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Hours per Day:</label>
            <h6>The number of hours your business will operate each day.</h6>
            <input
              type="number"
              name="hours_per_day"
              placeholder="రోజుకు గంటలు"
              value={formData.hours_per_day}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Available Help:</label>
            <h6>The support or staff available to help run your business</h6>
            <input
              type="text"
              name="help"
              placeholder="అందుబాటులో ఉన్న సహాయం"
              value={formData.help}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Competition Level:</label>
            <h6>How many other businesses offer similar products or services</h6>
            <input
              type="text"
              name="competition"
              placeholder="పోటీ స్థాయి"
              value={formData.competition}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location Type:</label>
            <h6>The kind of location you will have, such as a storefront, office, or online.</h6>
            <input
              type="text"
              name="location_type"
              placeholder="స్థానం రకం"
              value={formData.location_type}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Target Customers:</label>
            <h6>The group of people you want to sell your product or service to</h6>
            <input
              type="text"
              name="target_customers"
              placeholder="టార్గెట్ కస్టమర్లు"
              value={formData.target_customers}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Starting Money Range:</label>
            <h6>The amount of money you plan to spend when starting the business.</h6>
            <input
              type="text"
              name="starting_money"
              placeholder="ప్రారంభ డబ్బు పరిధి"
              value={formData.starting_money}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Monthly Expenses:</label>
            <h6>The regular costs your business will need to cover every month</h6>
            <input
              type="text"
              name="monthly_expenses"
              placeholder="నెలవారీ ఖర్చులు"
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

