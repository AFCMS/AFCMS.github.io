import { SiGithub, SiMinetest } from "react-icons/si";
import CardImage from "../CardImage";
import GlassButton from "../GlassButton";
import GridCard from "../GridCard";

import picture_devpet from "../../assets/project_devpet.jpg?aspect=16:9&w=384&imagetools";
import picture_subway_miner from "../../assets/project_subway_miner.png?aspect=16:9&w=384&imagetools";

export default function Projects() {
	return (
		<section id="projects" class="text-header mx-auto mb-4 flex w-full max-w-4xl flex-col gap-4">
			<div class="border-t-2 border-t-indigo-950"></div>
			<h2 class="text-left text-lg font-semibold">Featured projects</h2>
			<GridCard
				bgImage={picture_devpet}
				bgTransparency={0.3}
				class="relative flex flex-row items-center justify-center md:flex-col"
				class2="md:flex-row flex-col md:min-h-[250px]"
			>
				<div class="my-auto flex grow flex-col">
					<h2 class="mb-3 font-medium">
						Malley <span class="text-header/80 font-normal">- 2025</span>
					</h2>
					<p>A X-like social media platform project, currently in developpement.</p>
					<p>
						It's a project made during my studies at <strong>École Hexagone</strong>.
					</p>
				</div>
				{/*<CardImage class="hidden aspect-[16/9] w-96 md:block" alt="Mallay" src={picture_devpet} />*/}
				<ul class="bottom-0 left-0 mt-4 flex flex-row gap-2 md:absolute md:m-4">
					<li class="glass-effect px-1 py-0.5 text-sm">React</li>
					<li class="glass-effect px-1 py-0.5 text-sm">TailwindCSS</li>
					<li class="glass-effect px-1 py-0.5 text-sm">Supabase</li>
					<li class="glass-effect px-1 py-0.5 text-sm">Vercel</li>
				</ul>
				<GlassButton
					class="absolute top-0 right-0 m-4 md:right-auto md:left-0"
					href="https://github.com/AFCMS/malley"
					label="GitHub Repository"
					icon={SiGithub}
				/>
			</GridCard>
			<GridCard
				bgImage={picture_devpet}
				bgTransparency={0.3}
				class="relative flex flex-row items-center justify-center md:flex-col"
				class2="md:flex-row flex-col"
			>
				<div class="my-auto flex grow flex-col">
					<h2 class="mb-3 font-medium">
						DevPet <span class="text-header/80 font-normal">- 2024</span>
					</h2>
					<p>
						A virtual pet for developers made with during my studies at <strong>École Hexagone</strong>. It's integrated
						with your <strong>GitHub</strong> and <strong>Spotify</strong> account.
					</p>
				</div>
				<CardImage class="hidden aspect-[16/9] w-96 md:block" alt="DevPet" src={picture_devpet} />
				<ul class="bottom-0 left-0 mt-4 flex flex-row gap-2 md:absolute md:m-4">
					<li class="glass-effect px-1 py-0.5 text-sm">PlatformIO</li>
					<li class="glass-effect px-1 py-0.5 text-sm">C++</li>
					<li class="glass-effect px-1 py-0.5 text-sm">NodeJS</li>
					<li class="glass-effect px-1 py-0.5 text-sm">GraphQL</li>
					<li class="glass-effect px-1 py-0.5 text-sm">Fusion360</li>
				</ul>
				<GlassButton
					class="absolute top-0 right-0 m-4 md:right-auto md:left-0"
					href="https://github.com/AFCMS/devpet_meta"
					label="GitHub Repository"
					icon={SiGithub}
				/>
			</GridCard>
			<GridCard
				bgImage={picture_subway_miner}
				bgTransparency={0.3}
				class="relative flex flex-row items-center justify-center md:flex-col"
				class2="md:flex-row flex-col"
			>
				<div class="my-auto flex grow flex-col">
					<h2 class="mb-3 font-medium">
						Subway Miner <span class="text-header/80 font-normal">- 2021</span>
					</h2>
					<p>
						Second place winner of the first annual <strong>Luanti</strong> Game Jam.
					</p>
					<p>
						Endless runner inspired by <strong>Subway Surfers</strong> and <strong>Temple Run</strong>.
					</p>
				</div>
				<CardImage class="hidden aspect-[16/9] w-96 md:block" alt="Suwbway Miner" src={picture_subway_miner} />
				<ul class="bottom-0 left-0 mt-4 flex flex-row gap-2 md:absolute md:m-4">
					<li class="glass-effect px-1 py-0.5 text-sm">Luanti</li>
					<li class="glass-effect px-1 py-0.5 text-sm">Lua</li>
					<li class="glass-effect px-1 py-0.5 text-sm">Blender</li>
				</ul>
				<GlassButton
					class="absolute top-0 right-0 m-4 md:right-auto md:left-0"
					href="https://content.luanti.org/packages/AFCM/subway_miner"
					label="ContentDB Page"
					icon={SiMinetest}
				/>
			</GridCard>
		</section>
	);
}
