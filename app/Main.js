import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";
import Contact from "./components/Contact";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";

function Main() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("complexappToken"))
  );

  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      <Switch>
        <Route path="/" exact>
          {loggedIn ? <Home /> : <HomeGuest />}
        </Route>

        <Route path="/about-us" exact>
          <About />
        </Route>

        <Route path="/terms" exact>
          <Terms />
        </Route>

        <Route path="/contact" exact>
          <Contact />
        </Route>

        <Route path="/create-post" exact>
          <CreatePost />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<Main />, document.querySelector("#app"));
