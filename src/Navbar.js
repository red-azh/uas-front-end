/** @format */

import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
	return (
		<div>
			<nav
				class="navbar bg-warning"
				role="navigation"
				aria-label="main navigation">
				<div class="navbar-brand">
					<a class="navbar-item logo-nav" style={{ textDecoration: "none" }} href="/">
						<small>
							<b> OndeNande </b>
						</small>
						<i class="fa-solid fa-chart-simple"></i>
					</a>
				</div>

				<div id="navbarBasicExample" class="navbar-menu">
					<div class="navbar-start">
						<Nav>
							<NavLink
								className="text-light me-3 mt-2"
								to={"/"}
								style={{ textDecoration: "none" }}>
								Home
							</NavLink>
							<NavLink
								className="text-light me-3 mt-2"
								to={"/order"}
								style={{ textDecoration: "none" }}>
								Order
							</NavLink>
							<NavLink
								className="text-light me-3 mt-2"
								to={"/paket"}
								style={{ textDecoration: "none" }}>
								Paket
							</NavLink>
							<NavLink
								className="text-light  mt-2"
								to={"/table-paket"}
								style={{ textDecoration: "none" }}>
								CRUD Paket
							</NavLink>
						</Nav>
					</div>

					<div class="navbar-end">
						<div class="navbar-item">
							<div class="buttons"></div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
