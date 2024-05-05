/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";

const AddOrder = () => {
	const [nama, setNama] = useState("");
	const [selectedOrder, setSelectedOrder] = useState(""); // Menyimpan order yang dipilih
	const [orders, setOrders] = useState([]); // Menyimpan daftar order
	const navigate = useNavigate();

	// Untuk menampilkan daftar order
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3001/order/fetch.php"
				);
				setOrders(response.data.data);
			} catch (error) {
				console.error("Error fetching orders:", error);
			}
		};

		fetchData();
	}, []);

	const saveOrder = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:3001/pesan/add.php", {
				nama: nama,
				order_id: selectedOrder, // Mengirim hanya order yang dipilih
			});
			navigate("/order"); // Menggunakan navigate dari useNavigate
		} catch (error) {
			console.log("Error:", error);
		}
	};

	return (
		<div>
			<Navbar />
			<div className="container container-add-order">
				<h1 className="title" style={{ marginTop: "4rem" }}>
					Form Pemesanan
				</h1>
				<p className="subtitle">Order Menu</p>
				<form style={{ width: "50%" }} onSubmit={saveOrder}>
					<div className="field">
						<label className="label">Name</label>
						<div className="control">
							<input
								className="input"
								type="text"
								placeholder="Text input"
								value={nama}
								onChange={(e) => setNama(e.target.value)}
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Menu List</label>
						<div className="select is-link">
							<select
								value={selectedOrder}
								onChange={(e) => setSelectedOrder(e.target.value)}>
								<option value="">Select dropdown</option>
								{orders.map((order) => (
									<option key={order.id} value={order.id}>
										{order.nama}
									</option>
								))}
							</select>
						</div>
					</div>
					{/* button */}
					<div className="field is-grouped">
						<div className="control">
							<button type="submit" className="button is-link">
								Submit
							</button>
						</div>
						<div className="control">
							<button
								className="button is-link is-light"
								onClick={() => navigate("/order")}>
								Cancel
							</button>
						</div>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default AddOrder;
