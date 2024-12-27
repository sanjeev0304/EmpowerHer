import React, { useState } from "react";
import "./Calculator.css";
import InvestmentCalculator from "../components/FinancialCalculator/investmentcalc";
import MonthlyCalc from "../components/FinancialCalculator/monthlyprojection";
import Navbar from "../components/Home/navbar8";
export default function Calculator() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = () => {
    switch (selectedComponent) {
      case "initial":
        return <InvestmentCalculator />;
      case "monthly":
        return <MonthlyCalc />;
      default:
        return <p>Select an option to display the calculator</p>;
    }
  };

  return (
    <>
    <Navbar />
    <div className="app-container">
      <div className="header">
        <h1>Financial Calculator</h1>
      </div>
      <div className="button-container">
        <button onClick={() => setSelectedComponent("initial")}>
          Initial Investment
        </button>
        <button onClick={() => setSelectedComponent("monthly")}>
          Monthly Projections
        </button>
      </div>
      <div className="component-display">{renderComponent()}</div>
    </div>
    </>
  );
}
