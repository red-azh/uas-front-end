/** @format */

import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";
import Footer from "../Footer";

const Table = () => {
	const [paket, setPaket] = useState([0]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get("http://localhost:3001/paket/fetch.php");
			setPaket(response.data.Data);
			// console.log(response.data);
		} catch (error) {
			console.log("erorr here", error);
		}
	};
	// logika delete
	 const deletePaket = async (id) => {
			try {
				// Lakukan permintaan delete ke server dengan menggunakan paket yang dipilih
				await axios.delete(
					`http://localhost:3001/paket/delete.php?id=${id}`
				);
				console.log("Paket berhasil dihapus.");
				// Lakukan pengambilan data kembali untuk mengupdate daftar paket setelah penghapusan
				fetchData();
			} catch (error) {
				console.error("Error deleting paket:", error);
			}
		};


	return (
		<div>
			<Navbar />
			<div class="container mt-5">
				<h1 className="title">Table CRUD Paket</h1>
				<p class="subtitle">Memanipulasi data paket</p>
				<button className="button is-black my-2">
					<NavLink
						to={"/table-paket/add"}
						style={{ textDecoration: "none", color: "white" }}>
						Tambah
					</NavLink>
				</button>
				<table className="table">
					<thead>
						<tr>
							<th className="has-background-link has-text-light">#</th>
							<th className="has-background-link has-text-light">Nama Paket</th>
							<th className="has-background-link has-text-light">Action</th>
						</tr>
					</thead>
					{paket.length > 0 &&
						paket.map((data, index) => {
							return (
								<tbody key={index}>
									<tr>
										<td>{index + 1}</td>
										<td>{data.paket}</td>
										<td>
											<Link to={`/table-paket/edit/${data.id}`}>
											
											<button className="button is-success">Edit</button>
										</Link>

											<button
												className="button is-danger mx-2"
												onClick={() => {
													if (window.confirm("apakah pengen hapus?")) {
														deletePaket(data.id);
													} else {
														console.log("gak bisa dihapus");
													}
												}}>
												Hapus
											</button>
										</td>
									</tr>
								</tbody>
							);
						})}
				</table>
			</div>
			<Footer/>
		</div>
	);
};

export default Table;
