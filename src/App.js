import logo from "./logo.png";
import "./App.css";
import LinkEntry from "./LinkEntry";
import InfoEntry from "./InfoEntry";
import CopyEntry from "./CopyEntry";
//import Gist from 'react-gist';
import {
	SiGmail,
	SiGithub,
	SiDiscord,
	SiYoutube,
	SiReddit,
	SiMastodon,
	SiSketchfab,
	SiLua,
	SiPython,
	SiJavascript,
	SiUbuntu,
	SiWindows,
	SiVisualstudiocode,
	SiPycharm,
	SiIntellijidea,
	SiHtml5,
	SiCss3,
} from "react-icons/si";
import ReactCountryFlag from "react-country-flag";

function App() {
	return (
		<div className="App">
			<div className="flex items-center justify-between bg-blue-300 p-3 shadow-md">
				<div className="flex min-w-min">
					<img
						src={logo}
						alt="logo"
						className="relative m-1 mr-2 ml-2 flex h-8 w-8 items-center justify-center"
					/>
					<p className="text-4xl font-bold text-blue-500">AFCM</p>
				</div>
			</div>
			<div className="mt-1 flex flex-col md:flex-row">
				<div className="card basis-1/6">
					<h1 className="card_title">Informations:</h1>
					<InfoEntry type={"Age:"} data={[15]} />
					<InfoEntry
						type={"Country:"}
						data={[
							<ReactCountryFlag
								className="link_icon m-1"
								countryCode="FR"
								title="France"
								svg
							/>,
						]}
					/>
					<InfoEntry
						type={"Languages:"}
						data={[
							<SiLua
								className="link_icon"
								title="Lua"
								style={{ color: "#2C2D72" }}
							/>,
							<SiPython
								className="link_icon"
								title="Python"
								style={{ color: "#3776AB" }}
							/>,
							<SiJavascript
								className="link_icon"
								title="Javascript"
								style={{ color: "#F7DF1E" }}
							/>,
							<SiHtml5
								className="link_icon"
								title="HTML5"
								style={{ color: "#E34F26" }}
							/>,
							<SiCss3
								className="link_icon"
								title="CSS3"
								style={{ color: "#1572B6" }}
							/>,
						]}
					/>
					<InfoEntry
						type={"Tools:"}
						data={[
							<SiVisualstudiocode
								className="link_icon"
								title="Visual Studio Code"
								style={{ color: "#007ACC" }}
							/>,
							<SiPycharm
								className="link_icon"
								title="Pycharm"
								style={{ color: "#000000" }}
							/>,
							<SiIntellijidea
								className="link_icon"
								title="Intellijidea"
								style={{ color: "#000000" }}
							/>,
						]}
					/>
					<InfoEntry
						type={"Systems:"}
						data={[
							<SiUbuntu
								className="link_icon"
								title="Ubuntu (Good)"
								style={{ color: "#E95420" }}
							/>,
							<SiWindows
								className="link_icon"
								title="Windows (Bad)"
								style={{ color: "#0078D6" }}
							/>,
						]}
					/>
				</div>
				<div className="card basis-4/6">
					<h1 className="card_title">Hi everyone!</h1>
					<h2 className="card_title2">The Begining</h2>
					<p className="card_text">
						I have a passion for computers. I especially like to play games with
						my friends and program things.
						<br />
						I started programming about 3 years ago and learned more and more
						programing languages with the time.
						<br />I now know <strong>Lua</strong>, <strong>Python</strong>,{" "}
						<strong>Javascript</strong> and started exploring the possibilities
						of all the web technologies.
						<br />
						<br />I also make 3d Models, Renders and VFX with{" "}
						<strong>Blender</strong>.<br />I even made short action films (up to
						30mn) with friends (scenario, recording, video editing, vfx, etc)
					</p>
					<h2 className="card_title2">Minetest</h2>
					<p className="card_text">
						I discovered the{" "}
						<a className="link_text" href="https://www.minetest.net">
							Minetest
						</a>{" "}
						project by looking for "Minecraft" in my Software Center and tried
						it... by launching the Windows version with Wine!!! Since that
						moment, I used to play it every single day, gradually increasing my
						personal mods collection.
						<br />
						Around six months later, I made my first mod, which was adding a
						jetpack to the game (this thing never worked properly btw).
						<br />
						Then, I discovered the <strong>MineClone2</strong> subgame, and I
						quickly started to contribute to it.
						<br />
						I am now one of the active developpers of the project and have also
						created a bunch of mods for it.
						<br />
						<br />
						At the end of 2021, I also won the second place of the{" "}
						<a
							className="link_text"
							href="https://forum.minetest.net/viewtopic.php?t=27512"
						>
							Minetest Game Jam
						</a>{" "}
						by creating{" "}
						<a
							className="link_text"
							href="https://github.com/AFCMS/Subway-Miner"
						>
							Subway Miner
						</a>
						, a game inspired by both <em>Subway Surfers</em> and{" "}
						<em>Temple Run</em>.<br />
						<br />
						My secret hope is to create a minigame <strong>
							MineClone2
						</strong>{" "}
						server, similar to Minecraft <em>Hypixel</em> ;) If you are
						interested or own a dedicaced server, feel free to contact me.
					</p>
					<h2 className="card_title2">Discord</h2>
					<p className="card_text">
						Who doesn't like Discord??
						<br />I am a huge fan of it. I made some Discord bots using{" "}
						<strong>Discord.js</strong> (nothing public for now).
						<br />I am currently planing to make a bot for team management and
						hope I will get the needed inspiration to release it soon ;)
					</p>
					<h2 className="card_title2">Artistic Work</h2>
					<p className="card_text">
						Before I started to programm, I used to spend most of my free time
						creating 3D work using <strong>Blender</strong>.<br />
						With my one of my best friend, I made 3D models and animations,
						renders, and even games using the{" "}
						<strong>Blender Game Engine</strong>.<br />
						At the same time, we also made short action films (up to 30mn),
						based on stories we made ourself. This was a pretty intresting
						activity as it allowed me to learn video editing and VFX.
					</p>
				</div>
				<div className="card basis-1/6">
					<h1 className="card_title">Links:</h1>
					<LinkEntry
						icon={
							<SiGmail className="link_icon" style={{ color: "#EA4335" }} />
						}
						link={"mailto:afcm.contact@gmail.com"}
						stitle={"Mail"}
						title={"afcm.contact@gmail.com"}
					/>
					<LinkEntry
						icon={
							<SiGithub className="link_icon" style={{ color: "#181717" }} />
						}
						link={"https://github.com/AFCMS"}
						stitle={"GitHub"}
						title={"AFCMS"}
					/>
					<CopyEntry
						icon={
							<SiDiscord className="link_icon" style={{ color: "#5865F2" }} />
						}
						stitle={"Discord"}
						title={"AFCM#9333"}
					/>
					<LinkEntry
						icon={
							<SiYoutube className="link_icon" style={{ color: "#FF0000" }} />
						}
						link={"https://www.youtube.com/channel/UCK0mMW2SlIb7X5pKi00ZcYw"}
						stitle={"YouTube"}
						title={"AFCM"}
					/>
					<LinkEntry
						icon={
							<SiReddit className="link_icon" style={{ color: "#FF4500" }} />
						}
						link={"https://www.reddit.com/user/AFCMS"}
						stitle={"Reddit"}
						title={"u/AFCMS"}
					/>
					<LinkEntry
						icon={
							<SiMastodon className="link_icon" style={{ color: "#3088D4" }} />
						}
						link={"https://mastodon.social/web/@AFCM"}
						stitle={"Mastodon"}
						title={"@AFCM@mastodon.social"}
					/>
					<LinkEntry
						icon={
							<SiSketchfab className="link_icon" style={{ color: "#1CAAD9" }} />
						}
						link={"https://sketchfab.com/afcm.contact"}
						stitle={"Sketchfab"}
						title={"afcm.contact"}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
