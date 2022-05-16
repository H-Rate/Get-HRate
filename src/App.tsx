import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import logo from "../src/logo.svg";
import "./App.css";
import Home from "./Home";
import Privacy from "./Privacy";
import Terms from "./Terms";
import Troubles from "./Troubles";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import HTMLAttributes from "./index.d";

export default function BasicExample() {
	const [withLoveAnimating, setWithLoveAnimating] = useState("false");

	const withLoveAnimation = () => {
		if (withLoveAnimating === "true") return;

		setWithLoveAnimating("true");
		setTimeout(() => {
			setWithLoveAnimating("false");
		}, 1000);
	};

	return (
		<div className="App">
			<Router basename={"/hrate"}>
				<header className="App-header">
					<div className="App-header-content">
						<Link to="/" className="App-branding">
							<img src={logo} className="App-logo" />
							<h2 className="App-title">HRate</h2>
						</Link>
					</div>
				</header>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/terms">
						<Terms />
					</Route>
					<Route exact path="/privacy">
						<Privacy />
					</Route>
					<Route exact path="/troubleshoot">
						<Troubles />
					</Route>
				</Switch>
				<footer className="App-footer">
					<div className="App-footer-content">
						<p style={{ position: "relative" }}>
							<a onClick={withLoveAnimation}>Made with Love! ♥️</a>
							<div className="With-love" animating={withLoveAnimating}>
								<div>♥️</div>
							</div>
						</p>
						<p>
							<a href="https://an23lm.me" target="_blank" rel="noreferrer">Hire Me! 👨‍💻</a>
						</p>
						<div className="Footer-fill" />
						<p>
							<Link to="troubleshoot">Troubleshoot 🔧</Link>
						</p>
						<p>
							<Link to="privacy">Privacy Policy 🔒</Link>
						</p>
						<p>
							<Link to="terms">Terms & Conditions 📃</Link>
						</p>
            <p>
              <a href="https://github.com/h-rate" target="_blank" rel="noreferrer">GitHub ❬/❭</a>
						</p>
					</div>
				</footer>
			</Router>
		</div>
	);
}
