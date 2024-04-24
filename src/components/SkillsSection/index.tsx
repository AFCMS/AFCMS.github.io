import Section from "../Section";
import SkillItem, { SkillItemLevel } from "../SkillItem";
import {
	SiBlender,
	SiDiscord,
	SiDocker,
	SiGimp,
	SiGit,
	SiGithub,
	SiGo,
	SiJavascript,
	SiLua,
	SiMinetest,
	SiPython,
	SiReact,
	SiUnrealengine,
	SiVisualstudiocode,
} from "react-icons/si";
import "./SkillsSection.css";

const SkillsSection = () => {
	return (
		<Section id="skills">
			<div className="w-full px-6 pb-6 pt-2">
				<h1 className="font-bold text-blue-700">My skills</h1>
				<h2 className="font-bold text-blue-700">Programming Languages</h2>
				<div className="skills-section-grid">
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
				<div className="skills-section-grid">
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
					<SkillItem
						name="DiscordJS"
						icon={SiDiscord}
						alt="DiscordJS Icon"
						color="#3776AB"
						desc="I use DiscordJS when it comes to Discord bots"
						level={SkillItemLevel.advanced}
					/>
					<SkillItem
						name="Unreal Engine"
						icon={SiUnrealengine}
						alt="Unreal Engine Icon"
						color="#0E1128"
						desc="I am currently learning this engine, with a secret project in mind :)"
						level={SkillItemLevel.beginner}
					/>
				</div>
				<h2>Development Tools</h2>
				<div className="skills-section-grid">
					<SkillItem
						name="GitHub"
						icon={SiGithub}
						alt="GitHub Icon"
						color="#181717"
						desc="I host 99% of my projects on GitHub, managing several organisations"
						level={SkillItemLevel.expert}
					/>
					<SkillItem
						name="Git"
						icon={SiGit}
						alt="Git Icon"
						color="#F05032"
						desc={`Who uses SVN in ${new Date().getFullYear()}?`}
						level={SkillItemLevel.advanced}
					/>
					<SkillItem
						name="Visual Studio Code"
						icon={SiVisualstudiocode}
						alt="Visual Studio Code Icon"
						color="#007ACC"
						desc="VSCode is my prefered editor, I already worked with the extension API"
						level={SkillItemLevel.advanced}
					/>
					<SkillItem
						name="Docker"
						icon={SiDocker}
						alt="Docker Icon"
						color="#2496ED"
						desc="I used it in several projects including advanced topics like cross-platform builds"
						level={SkillItemLevel.advanced}
					/>
				</div>
				<h2>Other Tools</h2>
				<div className="skills-section-grid">
					<SkillItem
						name="Blender"
						icon={SiBlender}
						alt="Blender Icon"
						color="#F5792A"
						desc="I make 3D models and videos using Blender"
						level={SkillItemLevel.advanced}
					/>
					<SkillItem
						name="GIMP"
						icon={SiGimp}
						alt="Gimp Icon"
						color="#000000"
						desc="I make pixel art for video games"
						level={SkillItemLevel.advanced}
					/>
				</div>
			</div>
		</Section>
	);
};

export default SkillsSection;
