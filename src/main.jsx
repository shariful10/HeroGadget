import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import CartItem from "./components/Cards/CartItem";
import ErrorPage from "./components/ErrorPage";
import Shop from "./components/Shop";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/shop",
				element: <Shop />,
				loader: () => fetch("products.json"),
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
