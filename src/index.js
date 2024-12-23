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

const App = () => {
  useEffect(() => {
    const translateElement = document.getElementById(
      "google_translate_element"
    );
    if (translateElement && window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    }
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route component={Home} exact path="/" />

          <Route component={SignUpForm} exact path="/SignUp" />

          <Route component={SuccessStories} exact path="/Stories" />
          <Route component={learning} exact path="/Learning" />
          <Route component={govtSchemes} exact path="/GovernmentSchemes" />
          <Route component={Calculator} exact path="/FinancialCalculator" />
        </Switch>
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
