import { render } from "preact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";

import "./index.css";

const element = document.getElementById("app")!;

render(
	<div class="bg-background px-4">
		<div class="relative min-h-full overflow-x-hidden">
			<Header />
			<div class="h-20"></div>
			<Home />
			<Footer />
		</div>
	</div>,
	element,
);
