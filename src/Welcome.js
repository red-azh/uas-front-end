/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import bulma from "bulma";
import padang from "../src/img/bb37aa515fa498361e4eb5b9611e4954.jpg";
import "./Welcome.css";
import { Card, Col, Container, NavLink, Row } from "react-bootstrap";
import imgStory from "../src/img/0df14ff6bd243a1de54b9178b9c48313.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Welcome = () => {
	return (
		<div>
			{/* hero */}
			<section class="hero layer is-large">
				<div class="hero-head">
					<Navbar />
				</div>

				<div class="hero-body">
					<div class="container has-text-centered">
						<p class="title is-size-2" style={{ color: "white" }}>
							Rumah Makan Padang <br /> <span className="onde"> Onde-Nande</span>
						</p>
						<button className="button is-warning">Explore</button>
					</div>
				</div>
			</section>
			{/* hero end */}

			<div class="container">
				<div class="columns mt-5">
					<div class="column is-one-third ">
						<img src={padang} alt="" className="img-padang" />
					</div>
					<div class="column">
						<h2 className="is-size-5 has-text-warning">About us</h2>
						<h1 className="is-size-3">
							Welcome to <br /> Rumah makan Padang
						</h1>
						<p className="">
							Halal Indonesian restaurant specializing in reasonably priced
							Minangkabau cuisine, namely Nasi Padang and Beef Rendang.
							Uncompromised flavor and quality. We also provide Halal catering
							for private and corporate functions.
						</p>
						<button class="button  is-primary is-rounded mt-3">
							Learn more
						</button>
					</div>
				</div>
			</div>

			{/* story*/}
			<div class="container">
				<div class="is-flex is-justify-content-space-between mt-5">
					<div class="left-story">
						<h1 className="is-size-3">The Ruman makan Story</h1>
						<p className="has-text-danger">Our Story</p>
						<p align="justify">
							Selamat datang di Rumah Makan Minang, di mana Anda akan menemukan
							cita rasa masakan Indonesia yang nikmat dalam suasana yang
							bersahabat dan mengundang. Manjakan diri dengan hidangan lezat
							kami, seperti Nasi Padang dan Rendang Daging Sapi, di mana setiap
							gigitan merupakan perpaduan harmonis dari bahan-bahan yang
							dibumbui dengan baik. Kami sangat bangga menggunakan komponen
							berkualitas tinggi untuk memastikan setiap hidangan benar-benar
							nikmat, seperti pelukan hangat dari seorang teman baik. Terlepas
							dari warisan lama kami dan banyaknya cabang, kami mempertahankan
							esensi dari restoran keluarga yang disayangi, terus meningkatkan
							resep kami untuk memberikan Anda pengalaman yang memancarkan
							keunggulan dan keaslian. Bergabunglah bersama kami untuk
							perjalanan bersantap yang mengesankan, yang memadukan tradisi,
							kualitas, dan keramahtamahan asli. Selain bersantap di restoran,
							kami dengan senang hati menawarkan layanan katering halal baik
							untuk acara pribadi maupun perusahaan. Baik Anda merencanakan
							perayaan mewah atau pertemuan intim, pilihan katering kami,
							termasuk katering prasmanan, katering prasmanan kecil, dan
							katering bento, dibuat dengan cermat dengan perhatian terhadap
							detail yang mendefinisikan pengalaman restoran kami. Yakinlah,
							layanan katering kami secara ketat mematuhi standar halal,
							sehingga Anda dapat menikmati masakan lezat kami dengan penuh
							percaya diri. Di Rumah Makan Minang, kami dengan tulus berharap
							dapat melayani Anda dengan hidangan yang menghangatkan hati dan
							senyuman ramah, memastikan acara spesial Anda dipenuhi dengan
							kegembiraan dan cita rasa yang tak terlupakan.
						</p>
					</div>
					<div class=" story">
						<img
							src={imgStory}
							alt="img-story"
							width={480}
							className="mt-6 img-story"
						/>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Welcome;
