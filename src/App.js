import "./App.scss";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { AnimatePresence } from "framer-motion";
import { HashRouter as Router } from "react-router-dom";

function App() {
  const location = useLocation();
  const [page, setPage] = useState("");

  useEffect(() => {
    pageHandler(location.pathname);
  }, [location]);

  const pageHandler = (path) => {
    switch (path) {
      case "/":
        setPage("");
        break;

      case "/about":
        setPage("");
        break;

      case "/skills":
        setPage("01");
        break;

      case "/projects":
        setPage("02");
        break;

      case "/contact":
        setPage("03");
        break;

      default:
        break;
    }
  };

  return (
    <div className="overlay">
      <Router basename={process.env.PUBLIC_URL || ""}>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
