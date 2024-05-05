/** @format */

import React, { useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

const AddMenu = () => {
	const [nama, setNama] = useState("");
	const [harga, setHarga] = useState("");
	const [deskripsi, setDeskripsi] = useState("");
	const [img, setImg] = useState("");
	const navigate = useNavigate();

	const tambahMenu = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:3001/order/add.php", {
				nama: nama,
				deskripsi: deskripsi,
				harga: harga,
				img: img

			});
			navigate("/order");
		} catch (error) {
			console.log("error:", error);
		}
	};

	return (
		<div>
			<Navbar />
			<div className="container" style={{ width: "50%" }}>
				<form onSubmit={tambahMenu}>
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
						<label className="label">Harga</label>
						<div className="control">
							<input
								className="input"
								type="number"
								placeholder="Text input"
								value={harga}
								onChange={(e) => setHarga(e.target.value)}
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Description</label>
						<div className="control">
							<textarea
								className="textarea"
								placeholder="Textarea"
								value={deskripsi}
								onChange={(e) => setDeskripsi(e.target.value)}></textarea>
						</div>
					</div>
					<div className="field">
						<label className="label">Img</label>
						<div className="control">
							<input
								className="input"
								type="text"
								placeholder="Text input"
								onChange={(e) => setImg(e.target.value)}
							/>
						</div>
					</div>
					<div className="field is-grouped">
						<div className="control">
							<button type="submit" className="button is-link">
								Submit
							</button>
						</div>
						<div className="control">
							<button type="button" className="button is-link is-light">
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

export default AddMenu;
