/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer";

const Addreservation = () => {
	const [orders, setOrders] = useState([]); // Ganti nama state dari fetch menjadi orders
	const [orders1, setOrders1] = useState([]); // Ganti nama state dari fetch menjadi orders
	const [orders2, setOrders2] = useState([]); // Ganti nama state dari fetch menjadi orders
	const [lokasi, setLokasi] = useState("");
	const [tmpt_duduk, setTmptDuduk] = useState("");
	const [jam, setJam] = useState("");
	const [bulan, setBulan] = useState("");
	const navigate = useNavigate();
	// buat nampilin data
	useEffect(() => {
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

		fetchData();
	}, []);
	// buat nampilin data
	useEffect(() => {
		const fetchData1 = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3001/reservation/fetch.php"
				);
				setOrders1(response.data.Data); // Akses properti Data dari respons
				console.log(response.data);
			} catch (error) {
				console.error("Error fetching orders:", error);
			}
		};

		fetchData1();
	}, []);
	// buat nampilin data
	useEffect(() => {
		const fetchData2 = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3001/reservation/fetch.php"
				);
				setOrders2(response.data.Data); // Akses properti Data dari respons
				console.log(response.data);
			} catch (error) {
				console.error("Error fetching orders:", error);
			}
		};

		fetchData2();
	}, []);

	// logika tambah data
	const StoreReservation = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:3001/reservation/add.php", {
				lokasi: lokasi,
				tmpt_duduk: tmpt_duduk,
				bulan: bulan,
				jam: jam
				
			});
			navigate("/reservation-data");
		} catch (error) {
			console.log("error:", error);
		}
	};

	return (
		<div>
			<Navbar />
			<div className="container container-add-order">
				<h1 className="title" style={{ marginTop: "4rem" }}>
					Form Reservation
				</h1>
				<p className="subtitle">Order Tempat</p>
				<form style={{ width: "50%" }} onSubmit={StoreReservation}>
					<div class="columns">
						<div class="column">
							<div className="field">
								<label className="label">Lokasi</label>
								<div className="select is-link">
									<select
										onChange={(e) => setLokasi(e.target.value)}>
										<option value="" selected hidden>
											Select dropdown
										</option>
										{orders.map((data) => {
											// Ganti fetch menjadi orders di sini juga
											return (
												<option key={data.id} value={data.lokasi}>
													{data.lokasi}
												</option>
											);
										})}
									</select>
								</div>
							</div>
						</div>
						<div class="column">
							<div className="field">
								<label className="label">Tempat Duduk</label>
								<div className="select is-link">
									<select onChange={(e) => setTmptDuduk(e.target.value)}>
										<option value="" selected hidden>
											Select dropdown
										</option>
										{orders1.map((data) => {
											// Ganti fetch menjadi orders di sini juga
											return (
												<option key={data.id} value={data.tmpt_duduk}>
													{data.tmpt_duduk}
												</option>
											);
										})}
									</select>
								</div>
							</div>
						</div>
						<div class="column">
							<div className="field">
								<label className="label">Jam</label>
								<div className="select is-link">
									<select onChange={(e) => setJam(e.target.value)}>
										<option value="" selected hidden>
											Select dropdown
										</option>
										{orders2.map((data) => {
											// Ganti fetch menjadi orders di sini juga
											return (
												<option key={data.id} value={data.jam}>
													{data.jam}
												</option>
											);
										})}
									</select>
								</div>
							</div>
						</div>
						<div class="column">
							<div class="field">
								<label class="label">Bulan</label>
								<input type="date" onChange={(e) => setBulan(e.target.value)} />
							</div>
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

export default Addreservation;
