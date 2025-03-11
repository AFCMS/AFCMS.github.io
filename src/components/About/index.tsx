import { SiLinkedin } from "react-icons/si";

import GlassButton from "../GlassButton";

import links from "../../utils/links";

export default function About() {
	return (
		<section class="text-header font-inter relative m-auto w-full max-w-4xl px-4 py-10 lg:py-14">
			<div class="flex flex-row items-center gap-2">
				<img class="h-16 w-16 rounded-full shadow" src="/favicon.svg" alt="AFCMS' logo" />
				<h1 class="font-inter text-header text-2xl font-bold">AFCMS</h1>
				<span class="grow"></span>
				<ul class="flex flex-row items-center gap-2">
					<li>
						<GlassButton href={links.LINKEDIN} title="LinkedIn" icon={SiLinkedin} />
					</li>
					{/*<li>
						<GlassButton href={links.GITHUB} title="GitHub" icon={SiGithub} />
					</li>*/}
				</ul>
			</div>
			<h1 class="mt-4 text-3xl italic">
				<strong class="underline-anim">Developer</strong> & <strong class="underline-anim">Gamer</strong>
			</h1>
			<p class="mt-6 text-lg leading-8">
				I'm a <strong>Computer Science</strong> student at <strong class="underline-anim">École Hexagone</strong>. I'm
				currently working on and learning about web development, software development, and game development.
			</p>
		</section>
	);
}
