import About from "./components/About";
import Experience from "./components/Experience";

export default function Home() {
	return (
		<div className="flex flex-col">
			<About />
			<Experience />
		</div>
	);
}
