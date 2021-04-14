import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3" id="funnavbar">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">?</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
