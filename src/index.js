import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./style.css";

import Home from "./pages/home";
import SignUpForm from "./components/Home/SignUpForm";
import SuccessStories from "./pages/SuccessStories";
import learning from "./pages/learning";
import govtSchemes from "./pages/govtSchems";
import Calculator from "./pages/Calculator";
import MarketingStrategyForm from "./pages/MarketingStrategyForm";
import BusinessPlan from "./pages/BusinessPlan";
import NameGenerator from "./pages/NameGenerator";
import TimelineGenerator from "./pages/TimelineGenerator";
import LogoMaker from "./pages/LogoMaker";
import { AuthProvider } from "./pages/AuthContext";
import Navbar from "./components/Home/navbar8";
import DashBoard from "./pages/DashBoard";
import AboutUs from "./pages/AboutUs";


const App = () => {
  useEffect(() => {
    // Initialize Google Translate Widget after a delay
    const initGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    // Ensure it initializes only after the rest of the page has rendered
    const interval = setInterval(() => {
      if (window.google && window.google.translate) {
        initGoogleTranslate();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AuthProvider>
    <>
      {/* Main content renders immediately */}
     
      <div>
        <div id="google_translate_element" style={{ marginBottom: "20px" }}></div>
        <Router>
        
          <Switch>
          <Route component={Home} exact path="/" />
            <Route component={Home} exact path="/Home" />
            <Route component={SignUpForm} exact path="/SignUp" />
            <Route component={SuccessStories} exact path="/Stories" />
            <Route component={learning} exact path="/Learning" />
            <Route component={govtSchemes} exact path="/GovernmentSchemes" />
            <Route component={Calculator} exact path="/FinancialCalculator" />
            <Route component={MarketingStrategyForm} exact path="/Strategy" />
            <Route component={BusinessPlan} exact path="/BusinessPlan" />
            <Route component={NameGenerator} exact path="/GenerateName" />
            <Route component={TimelineGenerator} exact path="/TimelinePlanner" />
            <Route component={LogoMaker} exact path="/LogoMaker" />
            <Route component={DashBoard} exact path="/DashBoard" />
            <Route component={AboutUs} exact path="/AboutUs" />
            

          </Switch>
        </Router>
      </div>
      
    </>
    </AuthProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
