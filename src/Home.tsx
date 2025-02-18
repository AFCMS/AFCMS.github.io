import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Games from "./components/Games";
import Contact from "./components/Contact";

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
