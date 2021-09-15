import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import Page1 from "./Page1";
//import Page2 from "./Page2";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/page1" component={Page1} />
      {/* <Route path="/page2" component={Page2} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
