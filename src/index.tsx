import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container as HTMLElement);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
