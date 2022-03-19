import logo from "./logo.png";
import "./App.css";
import LinkEntry from "./components/LinkEntry";
import InfoEntry from "./components/InfoEntry";
import CopyEntry from "./components/CopyEntry";
//import Popup from "./Popup";
//import TextPopup from "./components/TextPopup";
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
	SiGo,
} from "react-icons/si";
import ReactCountryFlag from "react-country-flag";
import MarkdownFile from "./components/MarkdownFile";
import mainText from "./Biography.md";

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
					<InfoEntry
						type={"Age:"}
						data={[
							(() => {
								let bdate = new Date(2006, 6, 24);
								let month_diff = Date.now() - bdate.getTime();
								let age_dt = new Date(month_diff);
								let year = age_dt.getUTCFullYear();
								let age = Math.abs(year - 1970);
								return age;
							})(),
						]}
					/>
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
							<SiGo
								className="link_icon"
								title="Golang"
								style={{ color: "#00ADD8" }}
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
					<MarkdownFile file={mainText} />
				</div>
				<div className="card basis-1/6">
					<h1 className="card_title">Links:</h1>
					<LinkEntry
						icon={[SiGmail, "#EA4335"]}
						link={"mailto:afcm.contact@gmail.com"}
						stitle={"Mail"}
						title={"afcm.contact@gmail.com"}
					/>
					<LinkEntry
						icon={[SiGithub, "#181717"]}
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
						icon={[SiYoutube, "#FF0000"]}
						link={"https://www.youtube.com/channel/UCK0mMW2SlIb7X5pKi00ZcYw"}
						stitle={"YouTube"}
						title={"AFCM"}
					/>
					<LinkEntry
						icon={[SiReddit, "#FF4500"]}
						link={"https://www.reddit.com/user/AFCMS"}
						stitle={"Reddit"}
						title={"u/AFCMS"}
					/>
					<LinkEntry
						icon={[SiMastodon, "#3088D4"]}
						link={"https://mastodon.social/web/@AFCM"}
						stitle={"Mastodon"}
						title={"@AFCM@mastodon.social"}
					/>
					<LinkEntry
						icon={[SiSketchfab, "#1CAAD9"]}
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
