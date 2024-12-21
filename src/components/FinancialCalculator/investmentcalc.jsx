"use client";

import React, { useState, useEffect } from "react";
import "./investmentcalc.css"; // Import the CSS file

const investmentcalc = () => {
  const [costs, setCosts] = useState({
    equipmentCosts: 0,
    locationDeposit: 0,
    licensesCosts: 0,
    initialInventory: 0,
    interiorWork: 0,
    monthlyFixedCosts: 0,
  });

  const [totals, setTotals] = useState({
    setupCosts: 0,
    workingCapital: 0,
    emergencyFund: 0,
    totalInvestment: 0,
  });

  useEffect(() => {
    const setupCosts = Object.keys(costs)
      .filter((key) => key !== "monthlyFixedCosts")
      .reduce((acc, key) => acc + costs[key], 0);

    const workingCapital = costs.monthlyFixedCosts * 3;
    const emergencyFund = setupCosts * 0.1;
    const totalInvestment = setupCosts + workingCapital + emergencyFund;

    setTotals({
      setupCosts,
      workingCapital,
      emergencyFund,
      totalInvestment,
    });
  }, [costs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCosts((prevCosts) => ({
      ...prevCosts,
      [name]: parseFloat(value) || 0,
    }));
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Initial Investment Calculator</h1>
      <div className="calculator-grid">
        <div className="calculator-section">
          <h3 className="section-title">Setup Costs</h3>
          {Object.keys(costs).map(
            (key) =>
              key !== "monthlyFixedCosts" && (
                <div key={key} className="input-group">
                  <label htmlFor={key} className="input-label">
                    {key.replace(/([A-Z])/g, " $1").trim()}:
                  </label>
                  <input
                    type="number"
                    id={key}
                    name={key}
                    value={costs[key] || ""}
                    onChange={handleInputChange}
                    placeholder="₹0"
                    className="input-field"
                  />
                </div>
              )
          )}
          <div className="input-group">
            <label htmlFor="monthlyFixedCosts" className="input-label">
              Monthly Fixed Costs:
            </label>
            <input
              type="number"
              id="monthlyFixedCosts"
              name="monthlyFixedCosts"
              value={costs.monthlyFixedCosts || ""}
              onChange={handleInputChange}
              placeholder="₹0"
              className="input-field"
            />
          </div>
        </div>
        <div className="calculator-section">
          <h3 className="section-title">Calculations</h3>
          <div className="calculations">
            <p>Total Setup Costs: {formatCurrency(totals.setupCosts)}</p>
            <p>
              Working Capital Needed: {formatCurrency(totals.workingCapital)}
            </p>
            <p>Emergency Fund: {formatCurrency(totals.emergencyFund)}</p>
            <p className="total-investment">
              Total Initial Investment: {formatCurrency(totals.totalInvestment)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default investmentcalc;
