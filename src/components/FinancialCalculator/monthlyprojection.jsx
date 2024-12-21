"use client";

import React, { useState, useEffect } from "react";
import "./investmentcalc.css"; // Reuse the CSS file

const MonthlyCalc = () => {
  const [costs, setCosts] = useState({
    // Fixed Costs
    rent: 0,
    utilities: 0,
    staffSalaries: 0,
    loanEMI: 0,
    insurance: 0,

    // Variable Costs
    rawMaterials: 0,
    packaging: 0,
    marketing: 0,
    transportation: 0,

    // Revenue
    averageDailySales: 0,
    workingDays: 0,
  });

  const [totals, setTotals] = useState({
    fixedCosts: 0,
    variableCosts: 0,
    expectedRevenue: 0,
    projectedProfit: 0,
    dailySalesNeeded: 0,
    monthlySalesTarget: 0,
  });

  useEffect(() => {
    const fixedCosts =
      costs.rent +
      costs.utilities +
      costs.staffSalaries +
      costs.loanEMI +
      costs.insurance;

    const variableCosts =
      costs.rawMaterials +
      costs.packaging +
      costs.marketing +
      costs.transportation;

    const expectedRevenue = costs.averageDailySales * costs.workingDays;

    const projectedProfit = expectedRevenue - (fixedCosts + variableCosts);

    const dailySalesNeeded =
      costs.workingDays > 0
        ? (fixedCosts + variableCosts) / costs.workingDays
        : 0;

    const monthlySalesTarget = dailySalesNeeded * costs.workingDays;

    setTotals({
      fixedCosts,
      variableCosts,
      expectedRevenue,
      projectedProfit,
      dailySalesNeeded,
      monthlySalesTarget,
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
      <h1 className="calculator-title">Monthly Projections Calculator</h1>
      <div className="calculator-grid">
        <div className="calculator-section">
          <h3 className="section-title">Fixed Costs</h3>
          <div className="input-group">
            <label className="input-label">Rent:</label>
            <input
              type="number"
              name="rent"
              value={costs.rent || ""}
              onChange={handleInputChange}
              placeholder="₹0"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label className="input-label">Utilities:</label>
            <input
              type="number"
              name="utilities"
              value={costs.utilities || ""}
              onChange={handleInputChange}
              placeholder="₹0"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label className="input-label">Staff Salaries:</label>
            <input
              type="number"
              name="staffSalaries"
              value={costs.staffSalaries || ""}
              onChange={handleInputChange}
              placeholder="₹0"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label className="input-label">Loan EMI:</label>
            <input
              type="number"
              name="loanEMI"
              value={costs.loanEMI || ""}
              onChange={handleInputChange}
              placeholder="₹0"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label className="input-label">Insurance:</label>
            <input
              type="number"
              name="insurance"
              value={costs.insurance || ""}
              onChange={handleInputChange}
              placeholder="₹0"
              className="input-field"
            />
          </div>
        </div>

        <div className="calculator-section">
          <h3 className="section-title">Variable Costs</h3>
          <div className="input-group">
            <label className="input-label">Raw Materials:</label>
            <input
              type="number"
              name="rawMaterials"
              value={costs.rawMaterials || ""}
              onChange={handleInputChange}
              placeholder="₹0"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label className="input-label">Packaging:</label>
            <input
              type="number"
              name="packaging"
              value={costs.packaging || ""}
              onChange={handleInputChange}
              placeholder="₹0"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label className="input-label">Marketing:</label>
            <input
              type="number"
              name="marketing"
              value={costs.marketing || ""}
              onChange={handleInputChange}
              placeholder="₹0"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label className="input-label">Transportation:</label>
            <input
              type="number"
              name="transportation"
              value={costs.transportation || ""}
              onChange={handleInputChange}
              placeholder="₹0"
              className="input-field"
            />
          </div>
        </div>

        <div className="calculator-section">
          <h3 className="section-title">Revenue</h3>
          <div className="input-group">
            <label className="input-label">Average Daily Sales:</label>
            <input
              type="number"
              name="averageDailySales"
              value={costs.averageDailySales || ""}
              onChange={handleInputChange}
              placeholder="₹0"
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label className="input-label">Number of Working Days:</label>
            <input
              type="number"
              name="workingDays"
              value={costs.workingDays || ""}
              onChange={handleInputChange}
              placeholder="0"
              className="input-field"
            />
          </div>
        </div>

        <div className="calculator-section">
          <h3 className="section-title">Calculations</h3>
          <div className="calculations">
            <p>Total Fixed Costs: {formatCurrency(totals.fixedCosts)}</p>
            <p>Total Variable Costs: {formatCurrency(totals.variableCosts)}</p>
            <p>Expected Revenue: {formatCurrency(totals.expectedRevenue)}</p>
            <p>Projected Profit: {formatCurrency(totals.projectedProfit)}</p>
            <p>Daily Sales Needed: {formatCurrency(totals.dailySalesNeeded)}</p>
            <p>
              Monthly Sales Target: {formatCurrency(totals.monthlySalesTarget)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyCalc;
