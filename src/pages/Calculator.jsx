import React, { useState } from "react";
import "./Calculator.css";
import InvestmentCalculator from "../components/FinancialCalculator/investmentcalc";
import MonthlyCalc from "../components/FinancialCalculator/monthlyprojection";
import './Calculator.css';
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

    <div className="app-container">
    <Navbar />
      <div className="calcheader">
        <h1>Financial Calculator</h1>
      </div>
      <div className="calcbutton-container">
        <button className="calcbutton" onClick={() => setSelectedComponent("initial")}>
          Initial Investment
        </button>
        <button className="calcbutton" onClick={() => setSelectedComponent("monthly")}>
          Monthly Projections
        </button>
      </div>
      <div className="component-display">{renderComponent()}</div>
    </div>
    </>
  );
}
