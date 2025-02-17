import GridCard from "../GridCard";
import links from "../../utils/links";

import logo_hexagone from "./assets/ecole_hexagone.svg";
import logo_luanti from "./assets/luanti.svg";
import logo_react from "./assets/react.svg";
import logo_tailwind from "./assets/tailwind.svg";
import logo_vite from "./assets/vite.svg";
import logo_supabase from "./assets/supabase.svg";
import logo_golang from "./assets/golang_aqua.svg";
import logo_docker from "./assets/docker.svg";
import logo_kubernetes from "./assets/kubernetes.svg";
import logo_node from "./assets/node.svg";
import logo_discord from "./assets/discord.svg";
import logo_git from "./assets/git.svg";
import logo_github from "./assets/github.svg";

export default function Experience() {
	return (
		<section class="text-header mx-auto mb-4 grid w-full max-w-4xl grid-cols-1 gap-4 md:auto-rows-[16rem] md:grid-cols-2">
			<GridCard bgImage={logo_luanti}>
				<h2 class="mb-3 font-medium">Luanti</h2>
				<div class="grid-text-paragraph">
					<p class="mr-12">
						I worked on multiple projects based on the open source <a href={links.LUANTI}>Luanti</a> game engine.
					</p>
					<p>
						I notably worked within the <a href={links.VOXELIBRE}>VoxeLibre</a> team with{" "}
						<strong class="font-medium">500+</strong> commits total.
					</p>
					<p>I also made several fixes and improvements to the engine itself.</p>
				</div>
				<div class="absolute top-0 right-0 m-4 flex aspect-square items-center justify-center">
					<img class="h-10 w-10 rounded" title="Luanti" src={logo_luanti} alt="Luanti Logo" />
				</div>
			</GridCard>
			<GridCard>
				<h2 class="mb-3 font-medium">Experience</h2>
				<ul class="flex flex-col gap-2">
					<li class="glass-effect flex w-full flex-row items-center gap-2 rounded-lg p-2">
						<div class="flex aspect-square h-full items-center justify-center">
							<img class="h-10 w-10 rounded" src={logo_hexagone} alt="Ecole Hexagone Logo" />
						</div>
						<div>
							<h3 class="font-medium">École Hexagone</h3>
							<p>Bachelor</p>
						</div>
						<div class="grow"></div>
						<span>2023 - present</span>
					</li>
				</ul>
			</GridCard>
			<GridCard bgImage={logo_react} class="md:col-span-2">
				<h2 class="mb-3 font-medium">Frontend</h2>
				<div class="grid-text-paragraph">
					<p class="mr-12">I worked on many web based projects on various tech stacks.</p>
					<p>
						It includes a lot of personal projects of various size, contributions to open-source full stack apps,
						unreleased apps for private use.
					</p>
					<p>
						For frontend I primarily use <a href={links.VITE}>Vite</a>, <a href={links.REACT}>React</a> and{" "}
						<a href={links.TAILWINDCSS}>TailwindCSS</a> but I also use <a href={links.PREACT}>Preact</a> and{" "}
						<a href={links.BOOTSTRAP}>Bootstrap</a>.
					</p>
				</div>
				<div class="absolute top-0 right-0 m-4 flex flex-row gap-2">
					<img class="h-10 w-10 rounded" title="Vite" src={logo_vite} alt="Vite Logo" />
					<img class="h-10 w-10 rounded" title="TailwindCSS" src={logo_tailwind} alt="TailwindCSS Logo" />
					<img class="h-10 w-10 rounded" title="React" src={logo_react} alt="React Logo" />
				</div>
			</GridCard>
			<GridCard bgImage={logo_supabase} class="">
				<h2 class="mb-3 font-medium">Backend</h2>
				<div class="grid-text-paragraph">
					<p class="mr-24">
						For most of my full stack projects I used <a href={links.SUPABASE}>Supabase</a> or custom{" "}
						<a href={links.GOLANG}>Golang</a> servers.
					</p>
					<p>
						I also have contributed to projects using <a href={links.SYMFONY}>Symfony</a>,{" "}
						<a href={links.FLASK}>Flask</a> and <a href={links.DJANGO}>Django</a>.
					</p>
				</div>
				<div class="absolute top-0 right-0 m-4 flex flex-row gap-2">
					<img class="h-10 w-10 rounded" title="Golang" src={logo_golang} alt="Golang Logo" />
					<img class="h-10 w-10 rounded" title="Supabase" src={logo_supabase} alt="Supabase Logo" />
				</div>
			</GridCard>
			<GridCard bgImage={logo_docker} class="">
				<h2 class="mb-3 font-medium">Containerisation</h2>
				<div class="grid-text-paragraph">
					<p class="mr-24">
						I have experience with image crafting leveraging advanced <a href={links.DOCKER}>Docker</a> features like
						cache and cross-compilation.
					</p>
					<p>
						I have used <strong>Docker Compose</strong> extensively and have already worked with{" "}
						<a href={links.KUBERNETES}>Kubernetes</a>.
					</p>
				</div>
				<div class="absolute top-0 right-0 m-4 flex flex-row gap-2">
					<img class="h-10 w-10 rounded" title="Kubernetes" src={logo_kubernetes} alt="Kubernetes Logo" />
					<img class="h-10 w-10 rounded" title="Docker" src={logo_docker} alt="Docker Logo" />
				</div>
			</GridCard>
			<GridCard bgImage={logo_discord} class="">
				<h2 class="mb-3 font-medium">Discord Bots</h2>
				<div class="grid-text-paragraph">
					<p class="mr-24">
						I leveraged <a href={links.DISCORDJS}>Discord.js</a>, <a href={links.NODE}>NodeJS</a> and{" "}
						<a href={links.DENO}>Deno</a> to create or update multiple bots for various servers.
					</p>
					<p>This includes database management, bot containerisation, etc.</p>
				</div>
				<div class="absolute top-0 right-0 m-4 flex flex-row gap-2">
					<img class="h-10 w-10 rounded" title="Discord" src={logo_discord} alt="Discord Logo" />
					<img class="h-10 w-10 rounded" title="NodeJS" src={logo_node} alt="NodeJS Logo" />
				</div>
			</GridCard>
			<GridCard bgImage={logo_github} class="">
				<h2 class="mb-3 font-medium">Git & GitHub</h2>
				<div class="grid-text-paragraph">
					<p class="mr-24">
						I'm experienced with <strong>Git</strong> and <strong>GitHub</strong> for version control and collaboration.
					</p>
					<p>
						I use <strong>GitHub Actions</strong> and <strong>GitHub Projects</strong> regularly.
					</p>
					<p>
						I'm also familiar with <strong>GitLab</strong> and <strong>Gitea/Forgejo</strong>.
					</p>
				</div>
				<div class="absolute top-0 right-0 m-4 flex flex-row gap-2">
					<img class="h-10 w-10 rounded" title="Git" src={logo_git} alt="Git Logo" />
					<img class="h-10 w-10 rounded" title="GitHub" src={logo_github} alt="GitHub Logo" />
				</div>
			</GridCard>
		</section>
	);
}
