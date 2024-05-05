/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";
import Order from "./order/Order";
import AddOrder from "./order/AddOrder";
import AddMenu from "./order/AddMenu";
import Addreservation from "./reservation/Addreservation";
import Paket from "./paket/Paket";
import Table from "./table_paket/Table";
import AddPaket from "./table_paket/CreateTable";
import EditPaket from "./table_paket/EditPaket";
import Reservation from "./reservation/Reservation";

function App() {
	return (
		<div className="App">
			
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="/order" element={<Order />} />
					<Route path="/order/add" element={<AddOrder />} />
					<Route path="/order/add/menu" element={<AddMenu />} />
					<Route path="/reservation" element={<Addreservation />} />
					<Route path="/paket" element={<Paket />} />
					<Route path="/table-paket" element={<Table />} />
					<Route path="/table-paket/add" element={<AddPaket />} />
					<Route path="/table-paket/:id" element={<AddPaket />} />
					<Route path="/table-paket/edit/:id" element={<EditPaket />} />
					<Route path="/reservation-data" element={<Reservation />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
