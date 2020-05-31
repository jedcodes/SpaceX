import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/LandingPage/Home";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</div>
	);
}

export default App;
