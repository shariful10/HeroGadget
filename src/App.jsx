import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { React } from "react";

const App = () => {
	return (
		<>
			<Header />
			<div className="md:min-h-[calc(100vh-137px)]">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default App;
