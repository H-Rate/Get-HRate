import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Privacy from "./Privacy";
import Terms from "./Terms";
import logo from "../src/logo.svg";
import { useState } from "react";
import HTMLAttributes from "./index.d";

export default function BasicExample() {
  const [withLoveAnimating, setWithLoveAnimating] = useState("false")

  const withLoveAnimation = () => {
    if (withLoveAnimating === "true") return

    setWithLoveAnimating("true")
    setTimeout(() => {
      setWithLoveAnimating("false")
    }, 1000);
  };

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="App-header-content">
            <Link to="/hrate" className="App-branding">
              <img src={logo} className="App-logo" />
              <h2 className="App-title">HRate</h2>
            </Link>
          </div>
        </header>
        <Switch>
          <Route exact path="/hrate">
            <Home />
          </Route>
          <Route exact path="/hrate/terms">
            <Terms />
          </Route>
          <Route exact path="/hrate/privacy">
            <Privacy />
          </Route>
        </Switch>
        <footer className="App-footer">
          <div className="App-footer-content">
            <p style={{position: 'relative'}}>
              <a onClick={withLoveAnimation}>Made with Love! ♥️</a>
              <div className="With-love" animating={withLoveAnimating}>
                <div>♥️</div>
              </div>
            </p>
            <p>
              <a href="https://an23lm.me">Hire Me! 👨‍💻</a>
            </p>
            <div className="Footer-fill" />
            <p>
              <Link to="/hrate/privacy">Privacy Policy 🔒</Link>
            </p>
            <p>
              <Link to="/hrate/terms">Terms & Conditions 📃</Link>
            </p>
          </div>
        </footer>
      </Router>
    </div>
  );
}
