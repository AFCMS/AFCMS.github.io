import { useMemo, useState } from "react";
import ImagePopup from "./components/ImagePopup";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import SocialSection from "./components/SocialSection";
import "./App.css";

function App() {
	const [currentImage, setCurrentImage] = useState<string | undefined>(
		undefined
	);

	return (
		<div className="flex flex-col">
			<ImagePopup
				currentImage={currentImage}
				setCurrentImage={setCurrentImage}
			/>
			<NavBar />
			<AboutSection />
			<SkillsSection />
			<ProjectsSection setCurrentImage={setCurrentImage} />
			<SocialSection />
		</div>
	);
}

export default App;
