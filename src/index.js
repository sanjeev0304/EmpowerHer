import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './style.css';
import Home from './pages/home';
import Stories from './pages/stories';

const App = () => {
  useEffect(() => {
    const translateElement = document.getElementById('google_translate_element');
    if (translateElement && window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_translate_element'
      );
    }
  }, []);
  
  return (
    <>
      
      <Router>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Stories} exact path="/Stories" />
        </Switch>
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
