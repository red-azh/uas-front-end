/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const MenuForm = () => {
	const [menuItems, setMenuItems] = useState([]);
	const [selectedPackage, setSelectedPackage] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3001/paket/fetch.php"
				);
				setMenuItems(response.data.Data || []);
			} catch (error) {
				console.error("Error fetching menu items:", error);
			}
		};

		fetchData();
	}, []);

	const axiosInstance = axios.create({
		headers: {
			"Content-Type": "application/json",
		},
	});

	const tambahMenu = async (e) => {
		e.preventDefault();
		console.log("Selected Package:", selectedPackage);
		try {
			const data = { paket: selectedPackage };
			const jsonData = JSON.stringify(data);
			await axiosInstance.post("http://localhost:3001/paket/add.php", jsonData);
			navigate("/paket");
		} catch (error) {
			console.error("Error adding menu item:", error);
		}
	};
	return (
		<div>
			<Navbar />
			<div className="container" style={{ width: "50%", marginTop: "3rem" }}>
				<form onSubmit={tambahMenu}>
					<h1 className="title">Tambah Data</h1>
					<div className="field">
						<label className="label">Nama Paket</label>
						<div className="select is-link">
							<select
								value={selectedPackage}
								onChange={(e) => setSelectedPackage(e.target.value)}>
								<option selected hidden></option>
								{menuItems.length > 0 ? (
									menuItems.map((item) => (
										<option key={item.id} value={item.paket}>
											{item.paket}
										</option>
									))
								) : (
									<option value="">Data Kosong</option>
								)}
							</select>
						</div>
					</div>
					{/* Add other form fields here if necessary */}
					<button className="button is-link" type="submit">
						Submit
					</button>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default MenuForm;
