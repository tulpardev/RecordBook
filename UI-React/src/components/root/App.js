import React from "react";
import "./App.css";
import Footer from "../commonPages/Footer";
import Navbar from "../commonPages/Navbar";
import RecordPage from "../recordPage/RecordPage";
import ListRecordedPage from "../listRecordedPage/ListRecordedPage";
import HomePage from "../../components/homePage/HomePage";
import { Route, Router, Switch } from "react-router-dom";
import NotFound from "../commonPages/NotFound";
import { history } from "../../utils/history";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <div className="container">
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/listuser" component={ListRecordedPage} />
              <Route path="/adduser" component={RecordPage} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
