import ProjectItem, { ProjectItemContent } from "../ProjectItem";
import Section from "../Section";
import subway_miner from "./images/subway_miner.png";
import react_wordle from "./images/react_wordle.png";
import palamod from "./images/palamod.png";
import mineclone2 from "./images/mineclone2.png";
import mineclone2_mapart from "./images/mineclone2_mapart.png";

const ProjectsSection = (props: {
	setCurrentImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
	return (
		<Section id="projects">
			<div className="w-full px-6 pt-2">
				<h1 className="font-bold text-blue-700">My projects</h1>
				<ol className="m-2 mt-6 border-l-2 border-blue-600">
					<ProjectItem
						title="Palamod Modpack for MineClone2"
						dates={[new Date(2020, 7, 26)]}
						desc={[
							"My first real personal project was a clone of the modpack of the **Paladium** french Minecraft server.",
						]}
						setCurrentImage={props.setCurrentImage}
						content={[{ type: ProjectItemContent.image, src: palamod }]}
						links={[
							["Source Code", "https://github.com/minetest-palamod/palamod"],
							[
								"ContentDB",
								"https://content.minetest.net/packages/AFCM/palamod/",
							],
						]}
					/>
					<ProjectItem
						title="MineClone2"
						dates={[new Date(2021, 1, 18)]}
						desc={[
							"I joined the **MineClone2** team in 2021, which is a clone of the popular **Minecraft** game, based on the **Minetest** engine.",
							"I did more than 200 contributions, mostly improving modding API. I also made the barrels, the target block and the lanterns.",
						]}
						setCurrentImage={props.setCurrentImage}
						content={[{ type: ProjectItemContent.image, src: mineclone2 }]}
						links={[
							[
								"Source Code",
								"https://git.minetest.land/MineClone2/MineClone2",
							],
						]}
					/>
					<ProjectItem
						title="MapArt tool for MineClone2"
						dates={[new Date(2021, 10, 19)]}
						desc={[
							"I created a **Python CLI** to generate **MineClone2** schematics from images, used to create MapArts.",
						]}
						content={[
							{ type: ProjectItemContent.image, src: mineclone2_mapart },
						]}
						setCurrentImage={props.setCurrentImage}
						links={[
							["Source Code", "https://github.com/AFCMS/MineClone2_MapArt"],
						]}
					/>
					<ProjectItem
						title="Minetest Game Jam 2021 (Second Place)"
						dates={[new Date(2021, 11, 1), new Date(2021, 11, 25)]}
						desc={[
							"I took part into the Minetest Game Jam 2021 with my entry called **Subway Miner**",
							"It was heavily inspired by **Subway Surfers** and **Temple Run** and won the second place over 26 participants",
						]}
						content={[{ type: ProjectItemContent.image, src: subway_miner }]}
						setCurrentImage={props.setCurrentImage}
						links={[
							["Source Code", "https://github.com/AFCMS/Subway-Miner"],
							[
								"ContentDB",
								"https://content.minetest.net/packages/AFCM/subway_miner/",
							],
						]}
					/>
					<ProjectItem
						title="React Wordle"
						desc={[
							"I created a wordle game with React as a training, to try out the GitHub Codespace feature.",
						]}
						dates={[new Date(2022, 5, 7)]}
						content={[{ type: ProjectItemContent.image, src: react_wordle }]}
						setCurrentImage={props.setCurrentImage}
						links={[
							["Source Code", "https://github.com/AFCMS/react-wordle"],
							["Try Out", "https://react-wordle-afcm.vercel.app"],
						]}
					/>
					<ProjectItem
						title="Minetest Skin Server"
						desc={[
							"I created a web application serving skins to Minetest servers using **React** and **Golang** with the **Fiber** framework.",
							"Its still a WIP project.",
						]}
						dates={[new Date(2022, 11, 19)]}
						//content={[{ type: ProjectItemContent.image, src: react_wordle }]}
						setCurrentImage={props.setCurrentImage}
						links={[
							["Source Code", "https://github.com/AFCMS/minetest-skin-server"],
						]}
					/>
				</ol>
			</div>
		</Section>
	);
};

export default ProjectsSection;
