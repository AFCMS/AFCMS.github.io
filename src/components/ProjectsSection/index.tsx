import ProjectItem, { ProjectItemContent } from "../ProjectItem";
import Section from "../Section";
import subway_miner from "./images/subway_miner.png";
import react_wordle from "./images/react_wordle.png";

const ProjectsSection = (props: {
	setCurrentImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
	return (
		<Section id="projects">
			<div className="w-full px-6 pt-2">
				<h1 className="font-bold text-blue-700">My projects</h1>
				<ol className="m-2 mt-6 border-l-2 border-blue-600">
					<ProjectItem
						title="Title of section 1"
						dates={[new Date(2020, 10, 21)]}
						desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat."
						links={[
							["Source Code", "https://github.com/AFCMS/zoom-link-server"],
							["Preview", "https://vercel.app"],
						]}
					/>
					<ProjectItem
						title="Title of section 2"
						desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat."
					/>
					<ProjectItem
						title="Title of section 3"
						desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
						minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat."
					/>
					<ProjectItem
						title="MineClone2"
						dates={[new Date(2021, 1, 18)]}
						desc={
							<>
								I joined <strong>MineClone2</strong> team in 2021
								<br />
								Its a clone of the famous <strong>Minecraft</strong> game, based
								on the <strong>Minetest</strong> voxel game engine
								<br />I did more than 200 contributions, mostly improving
								modding API.
								<br />I also made the barrels, the target block and the lanterns
							</>
						}
						links={[
							[
								"Source Code",
								"https://git.minetest.land/MineClone2/MineClone2",
							],
						]}
					/>
					<ProjectItem
						title="Minetest Game Jam 2021 (Second Place)"
						dates={[new Date(2021, 11, 1), new Date(2021, 11, 25)]}
						desc={
							<>
								I took part into the Minetest Game Jam 2021 with my entry called{" "}
								<strong>Subway Miner</strong>
								<br />
								It was heavily inspired by <strong>
									Subway Surfers
								</strong> and <strong>Temple Run</strong> and won the second
								place over 26 participants
							</>
						}
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
						desc="I created a wordle game with React as a training, to try out the GitHub Codespace feature"
						dates={[new Date(2022, 5, 7)]}
						content={[{ type: ProjectItemContent.image, src: react_wordle }]}
						setCurrentImage={props.setCurrentImage}
						links={[
							["Source Code", "https://github.com/AFCMS/react-wordle"],
							["Try Out", "https://react-wordle-afcm.vercel.app"],
						]}
					/>
				</ol>
			</div>
		</Section>
	);
};

export default ProjectsSection;
