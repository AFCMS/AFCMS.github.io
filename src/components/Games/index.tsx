import { SiNamemc, SiSteam, SiTwitch } from "react-icons/si";
import Caroussel from "../Caroussel";
import GridCard from "../GridCard";
import links from "../../utils/links";

import logo_spotify from "../Experience/assets/spotify.svg";

const warthunder_cover = "https://steamcdn-a.akamaihd.net/steam/apps/236390/library_600x900.jpg";
const tlou_cover = "https://steamcdn-a.akamaihd.net/steam/apps/1888930/library_600x900.jpg";
const metro_exodus_cover = "https://steamcdn-a.akamaihd.net/steam/apps/412020/library_600x900.jpg";
const sotr_cover = "https://steamcdn-a.akamaihd.net/steam/apps/750920/library_600x900.jpg";
const minecraft_cover = "https://cdn2.steamgriddb.com/grid/a73027901f88055aaa0fd1a9e25d36c7.png";

export default function Games() {
	return (
		<section id="games" class="text-header mx-auto mb-4 flex w-full max-w-4xl flex-col gap-4">
			<div class="border-t-2 border-t-indigo-950"></div>
			<h2 class="text-left text-lg font-semibold">Wanna game?</h2>
			<GridCard class="">
				<p>Video games are what brought me to programming and take a huge part in my life</p>
			</GridCard>
			<Caroussel>
				{[
					{
						image: warthunder_cover,
						alt: "War Thunder",
						content: (
							<>
								<h3 class="text-xl font-bold">War Thunder</h3>
								<p>Military vehicle combat MMO, from World War II to modern combat.</p>
								<p>
									I have been enjoying the high quality graphics and amount of vehicles of this well optimised and Linux
									native game for a long time.
								</p>
							</>
						),
					},
					{
						image: tlou_cover,
						alt: "The Last of Us Part I",
						content: (
							<>
								<h3 class="text-xl font-bold">The Last of Us Part I</h3>
								<p>Story driven linear post-apocaliptic adventure game.</p>
								<p>Top tier graphics, acting, story, music and gameplay.</p>
								<p>Part I was an amazing experience that I can definitly recommend to anyone.</p>
							</>
						),
					},

					{
						image: metro_exodus_cover,
						alt: "Metro Exodus",
						content: (
							<>
								<h3 class="text-xl font-bold">Metro Exodus</h3>
								<p>First-person post-apocalyptic adventure game.</p>
								<p>
									Stunning raytraced graphics, immersive environments, nice music, a story full of emotion, warm
									relationships between the characters.
								</p>
								<p>It's a must play for anyone who likes post-apocalyptic worlds.</p>
							</>
						),
					},
					{
						image: sotr_cover,
						alt: "Shadow of the Tomb Raider",
						content: (
							<>
								<h3 class="text-xl font-bold">Shadow of the Tomb Raider</h3>
								<p>Solid adventure game.</p>
								<p>Amazing looking environments, nice combat system.</p>
								<p>It's a long and fun game that I can recommend.</p>
							</>
						),
					},
					{
						image: minecraft_cover,
						alt: "Minecraft",
						content: (
							<>
								<h3 class="text-xl font-bold">Minecraft</h3>
								<p>The classic, universal game.</p>
								<p>
									This game is truly what brought me to programming, by getting involved in <strong>Luanti</strong> and{" "}
									<strong>VoxeLibre</strong>.
								</p>
							</>
						),
					},
				]}
			</Caroussel>
			<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
				<GridCard class="my-auto w-full" class2="flex-col" bgImage={logo_spotify}>
					<h2 class="mb-3 font-medium">What about music?</h2>
					<p class="mb-2">
						I mostly listen to <strong>Electronic</strong> and <strong>Epicore</strong> music.
					</p>
					<p class="">
						Checkout my{" "}
						<a class="underline-static font-bold" href={links.SPOTIFY}>
							Spotify
						</a>{" "}
						profile.
					</p>
					<div class="absolute top-0 right-0 m-4 flex aspect-square items-center justify-center">
						<img class="h-10 w-10 rounded" title="Luanti" src={logo_spotify} alt="Spotify Logo" />
					</div>
				</GridCard>
				<GridCard class="flex-col">
					<div class="">
						<ul class="flex flex-col gap-2">
							<li class="flex gap-2 align-baseline">
								<span class="glass-effect inline-flex h-[26px] w-[26px] flex-row items-center gap-1 p-1">
									<SiSteam />
								</span>
								<a class="underline-static" href={links.STEAM}>
									AFCMS
								</a>
							</li>
							<li class="flex gap-2 align-baseline">
								<span class="glass-effect inline-flex h-[26px] w-[26px] flex-row items-center gap-1 p-1">
									<SiNamemc />
								</span>
								<a class="underline-static" href={links.NAMEMC}>
									AFCMS
								</a>
							</li>
							<li class="flex gap-2 align-baseline">
								<span class="glass-effect inline-flex h-[26px] w-[26px] flex-row items-center gap-1 p-1">
									<SiTwitch />
								</span>
								<a class="underline-static" href={links.TWITCH}>
									afcms
								</a>
							</li>
						</ul>
					</div>
				</GridCard>
			</div>
		</section>
	);
}
