import "./assets/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";
function App() {
	return (
		<BrowserRouter>
			
			<div className="bg-[#F0F4F8]">
				<Navbar />
			</div>
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</main>
			<div className="bg-[#F0F4F8]">
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
