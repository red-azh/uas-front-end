/** @format */

import React from "react";
import Navbar from "../Navbar";
import "../Welcome.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Paket = () => {
	return (
		<div>
			<Navbar />
			<div class="container">
				<section class="hero avatar ">
					<div class="hero-body has-text-white">
						<p class="title has-text-white">Page Paket</p>
						<p class="subtitle has-text-white">Order Now</p>
					</div>
				</section>
			</div>

			{/* paket */}
			<div class="container">
				<div class="columns mt-5" style={{ gap: "8px" }}>
					<div
						class="column has-background-warning"
						style={{ borderRadius: "10px", height: "500px", color: "white" }}>
						<h1 className="is-size-1 has-text-centered has-text-weight-bold ">
							Paket A
						</h1>
						<ol className="has-text-weight-bold ms-2">
							<li>Nasi</li>
							<li>Ayam Bakar</li>
							<li>Sayur Nangka</li>
							<li>Timun</li>
							<li>Sambal</li>
						</ol>
					</div>
					<div
						class="column has-background-warning"
						style={{ borderRadius: "10px", height: "500px", color: "white" }}>
						<h1 className="is-size-1 has-text-centered has-text-weight-bold ">
							Paket B
						</h1>
						<ol className="has-text-weight-bold ms-2">
							<li>Nasi</li>
							<li>Ayam Gulai</li>
							<li>Sayur Nangka</li>
							<li>Timun</li>
							<li>Sambal</li>
						</ol>
					</div>
					<div
						class="column has-background-warning"
						style={{ borderRadius: "10px", height: "500px", color: "white" }}>
						<h1 className="is-size-1 has-text-centered has-text-weight-bold ">
							Paket C
						</h1>
						<ol className="has-text-weight-bold ms-2">
							<li>Nasi</li>
							<li>Rendang</li>
							<li> Telur Balado </li>
							<li>Sayur Nangka</li>
							<li>Timun</li>
							<li>Sambal</li>
						</ol>
					</div>
				</div>
				<Link to={"/table-paket/add"}>
					<button className="button is-dark">Beli</button>
				</Link>
			</div>
			<Footer />
		</div>
	);
};

export default Paket;
