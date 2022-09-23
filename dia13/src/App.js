import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />

          <Switch>
            <Route path="/home" components={Home} exact>
              {" "}
              <Home />
            </Route>
            <Route path="/projects" components={Projects} exact>
              {" "}
              <Projects />
            </Route>
            <Route path="/contact" components={Contact} exact>
              {" "}
              <Contact />
            </Route>
            <Route path="/skills" components={Skills} exact>
              {" "}
              <Skills />
            </Route>
          </Switch>
      </Router>
    </>
  );
}

export default App;
