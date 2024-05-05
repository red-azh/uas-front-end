/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Reservation = () => {
	// fetching
	const [orders, setOrders] = useState([]);
	const fetchData = async () => {
		try {
			const response = await axios.get(
				"http://localhost:3001/reservation/fetch.php"
			);
			setOrders(response.data.Data);
			console.log(response.data);
		} catch (error) {
			console.error("Error fetching orders:", error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<Navbar />
			<div className="container">
				<h1 className="title mt-5">List Reservation</h1>
				<p className="subtitle">Result All of Order</p>
				<table className="table is-flex is-flex-wrap-wrap gap-5">
					{orders.map((order) => {
						return (
							<div>
								<tr>
									<th class="is-danger">Lokasi :</th>
									<td className="is-danger">{order.lokasi}</td>
								</tr>
								<tr>
									<th>Tempat Duduk : </th>
									<td>{order.tmpt_duduk}</td>
								</tr>
								<tr>
									<th>Bulan : </th>
									<td>{order.bulan}</td>
								</tr>

								<tr>
									<th>Jam : </th>
									<td>{order.jam}</td>
								</tr>
								<br />
								<br />
							</div>
						);
					})}
				</table>
			</div>
			<Footer />
		</div>
	);
};

export default Reservation;
