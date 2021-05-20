import "./App.css";
import Navbar from "./pages/Navbar";
import SearchPage from "./pages/SearchPage";
import Login from "./pages/Login";
import SearchResult from "./pages/SearchResult";
import ListingDetail from "./pages/ListingDetail.js";
import CreateListing from "./pages/CreateListing.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const tokenItem = window.localStorage.getItem("Bearer");
  const [token, setToken] = useState(tokenItem);

  const logout = (e) => (e) => {
    console.log(e);
  };

  const login = (e) => (e) => {
    console.log("HERE");
    console.log(e);
  };

  return (
    <Router>
      <Switch>
        <>
          <Navbar onLogOut={setToken} />
          {!token ? (
            <Route path="/" exact component={Login} />
          ) : (
            <Route path="/" exact component={SearchPage} />
          )}
          <Route path="/result" component={SearchResult} />
          <Route path="/ListingDetail" component={ListingDetail} />
          <Route path="/createListing" component={CreateListing} />
        </>
      </Switch>
    </Router>
  );
}

export default App;
