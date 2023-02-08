import Section from "../Section";
import SkillItem, { SkillItemLevel } from "../SkillItem";
import {
	SiGithub,
	SiGithubactions,
	SiGo,
	SiJavascript,
	SiLua,
	SiMinetest,
	SiPython,
	SiReact,
} from "react-icons/si";

const SkillsSection = () => {
	return (
		<Section id="skills">
			<div className="w-full px-6 pt-2 pb-6">
				<h1 className="font-bold text-blue-700">My skills</h1>
				<h2 className="font-bold text-blue-700">Languages</h2>
				<div className="row-auto grid w-full grid-cols-1 items-center gap-4 p-2 md:grid-cols-2">
					<SkillItem
						name="Lua"
						icon={SiLua}
						alt="Lua Icon"
						color="#2C2D72"
						desc="Lua is the first language I used, mostly with the Minetest voxel game engine"
						level={SkillItemLevel.expert}
					/>
					<SkillItem
						name="Python"
						icon={SiPython}
						alt="Python Icon"
						color="#3776AB"
						desc="I often use Python to automate things"
						level={SkillItemLevel.advanced}
					/>
					<SkillItem
						name="Javascript"
						icon={SiJavascript}
						alt="Javascript Icon"
						color="#BA3F"
						desc="I created Discord bots and several web apps"
						level={SkillItemLevel.advanced}
					/>
					<SkillItem
						name="Golang"
						icon={SiGo}
						alt="Golang Icon"
						color="#00ADD8"
						desc="I created web servers with Golang"
						level={SkillItemLevel.beginner}
					/>
				</div>
				<h2>Frameworks / Engines</h2>
				<div className="row-auto grid w-full grid-cols-1 items-center gap-4 p-2 md:grid-cols-2">
					<SkillItem
						name="Minetest"
						icon={SiMinetest}
						alt="Minetest Icon"
						color="#53AC56"
						desc="I worked on several mods and games for the Minetest Voxel game engine"
						level={SkillItemLevel.expert}
					/>
					<SkillItem
						name="React"
						icon={SiReact}
						alt="React Icon"
						color="#3776AB"
						desc="React is my go-to frontend library, I used it in litterally all my web projects"
						level={SkillItemLevel.advanced}
					/>
				</div>
				<h2>Tools</h2>
				<div className="row-auto grid w-full grid-cols-1 items-center gap-4 p-2 md:grid-cols-2">
					<SkillItem
						name="GitHub"
						icon={SiGithub}
						alt="GitHub Icon"
						color="#181717"
						desc="I often use React to automate things"
						level={SkillItemLevel.expert}
					/>
					<SkillItem
						name="GitHub Actions"
						icon={SiGithubactions}
						alt="GitHub Actions Icon"
						color="#2088FF"
						desc="I often use React to automate things"
						level={SkillItemLevel.advanced}
					/>
				</div>
			</div>
		</Section>
	);
};

export default SkillsSection;
