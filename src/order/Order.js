/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import { Breadcrumb, Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Welcome.css";
import foto from "../img/nasipadang.jpg";
import Footer from "../Footer";

const Order = () => {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);


	const fetchData = async () => {
		try {
			const response = await axios.get("http://localhost:3001/order/fetch.php");
			setOrders(response.data.data);
		} catch (error) {
			console.error("Error fetching orders:", error);
		}
	};

	// logika delete
	const deletePaket = async (id) => {
		try {
			// Lakukan permintaan delete ke server dengan menggunakan paket yang dipilih
			await axios.delete(`http://localhost:3001/order/delete.php?id=${id}`);
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
			<div class="container-order">
				<h1 className="container-order-text">Menu</h1>
				<Breadcrumb className="container-order-breadcumb">
					<Breadcrumb.Item>
						<NavLink to={"/"}>Home</NavLink>
					</Breadcrumb.Item>

					<Breadcrumb.Item active>Order</Breadcrumb.Item>
					<Breadcrumb.Item>
						<NavLink to={"/reservation"}>Reservation</NavLink>
					</Breadcrumb.Item>
				</Breadcrumb>
			</div>
			<button
				class="button is-warning "
				style={{ marginLeft: "8%", marginBottom: "10px" }}>
				<NavLink
					style={{ textDecoration: "none", color: "black" }}
					to={"/order/add/menu"}>
					Add Menu
				</NavLink>
			</button>
			<Container>
				<div className="parent">
					{orders.map((order) => {
						return (
							<div className="child">
								<Card
									className="pb-3"
									style={{ width: "20rem", height: "max-content" }}>
									<Card.Img variant="top" src={foto} />
									<Card.Body style={{ height: "200px" }}>
										<Card.Title>{order.nama}</Card.Title>
										<Card.Text>
											{order.deskripsi.split(" ").length > 20
												? order.deskripsi.split(" ").slice(0, 20).join(" ") +
												  "..."
												: order.deskripsi}
										</Card.Text>
										<b>
											<i>Harga : {order.harga}</i>
										</b>
									</Card.Body>
									<div class="is-flex is-justify-content-space-around">
										<NavLink
											className="text-light text-decoration-none button is-info"
											to={"/order/add"}>
											Beli
										</NavLink>
										<button
											className="text-light text-decoration-none button is-danger"
											onClick={() => {
												if (window.confirm("apakah pengen hapus?")) {
													deletePaket(order.id);
												} else {
													console.log("gak bisa dihapus");
												}
											}}>
											Hapus
										</button>
									</div>
								</Card>
							</div>
						);
					})}
				</div>
			</Container>
			<Footer />
		</div>
	);
};

export default Order;
