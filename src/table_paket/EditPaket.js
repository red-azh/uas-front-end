/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";

const EditPaket = () => {
	const [selectedPaket, setSelectedPaket] = useState("");
	const [fetching, setFetching] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get("http://localhost:3001/paket/fetch.php");
			setFetching(response.data.Data || []);
		} catch (error) {
			console.error("Error fetching orders:", error);
		}
	};

	const editMenu = async (e) => {
		e.preventDefault();
		const id = e.target.dataset.id;
		try {
			const response = await axios.post(
				`http://localhost:3001/paket/edit.php?id=:id`,
				{
					paket: selectedPaket,
				}
			);
			if (response.data.Response === 201) {
				console.log("Edit successfully");
				navigate("/table-order");
			} else {
				console.log("Edit failed:", response.data.Message);
			}
		} catch (error) {
			console.log("Error:", error);
		}
	};

	return (
		<div>
			<Navbar />
			<div className="container" style={{ width: "50%", marginTop: "3rem" }}>
				<form onSubmit={editMenu}>
					<div className="field">
						<label className="label">Nama Paket</label>
						<div className="select is-link">
							<select
								onChange={(e) => setSelectedPaket(e.target.value)}
								value={selectedPaket}>
								{fetching.length > 0 ? (
									fetching.map((order) => (
										<option key={order.id} value={order.paket}>
											{order.paket}
										</option>
									))
								) : (
									<option value="">Data Kosong</option>
								)}
							</select>
						</div>
					</div>
					<div className="field is-grouped">
						<div className="control">
							<button type="submit" className="button is-link">
								Submit
							</button>
						</div>
						<div className="control">
							<Link to={"/table-paket"}>
								<button type="button" className="button is-link is-light">
									Cancel
								</button>
							</Link>
						</div>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default EditPaket;
