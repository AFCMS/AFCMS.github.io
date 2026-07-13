import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Games from "./components/Games";
import Projects from "./components/Projects";

export default function Home() {
	return (
		<div className="flex flex-col">
			<About />
			<Experience />
			<Projects />
			<Games />
			<Contact />
		</div>
	);
}
