import "./App.scss";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import { useLocation } from "react-router";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import { useEffect } from "react/cjs/react.development";

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
      {page !== "" ? <Navigation pageNum={page} /> : null}
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
    </div>
  );
}

export default App;
