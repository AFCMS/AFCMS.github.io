import { useMemo } from "react";
import Section from "../Section";
import logo from "./logo.png";

const AboutSection = (): JSX.Element => {
	const myAge = useMemo<number>(() => {
		const birthDate = new Date(2006, 10, 24);
		const today = new Date();
		let age = today.getFullYear() - birthDate.getFullYear();
		const month = today.getMonth() - birthDate.getMonth();
		if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	}, []);

	return (
		<Section id="about">
			<div className="flex flex-col">
				<div className="flex flex-row items-center gap-6 p-6">
					<img src={logo} alt="logo" className="h-20 w-auto" />
					<h1 className="title-font text-3xl font-medium text-black sm:text-4xl">
						Hi, I'm AFCM.
					</h1>
				</div>
				<div className="px-6 pb-6">
					<p className="text-xl leading-relaxed">
						I am a {myAge} years old french student who spend his time
						developping stuff.
					</p>
				</div>
			</div>
		</Section>
	);
};

export default AboutSection;
