import logo from './logo.png';
import './App.css';
import LinkEntry from './LinkEntry';
import InfoEntry from './InfoEntry';
import CopyEntry from './CopyEntry';
import { SiGithub, SiDiscord, SiYoutube, SiReddit, SiMastodon, SiSketchfab, SiLua, SiPython, SiJavascript, SiUbuntu, SiWindows } from "react-icons/si";
import ReactCountryFlag from "react-country-flag";

function App() {
	return (
		<div className="App">
			<div className="flex items-center justify-between bg-blue-300 shadow-md p-3">
				<div className="flex min-w-min">
					<img src={logo} alt="logo" className="relative flex items-center justify-center h-8 w-8 mt-1 mb-1 mr-2 ml-2"/>
					<p className="text-blue-500 text-4xl font-bold">AFCM</p>
				</div>
			</div>
			<div className="flex flex-row ms:flex-col mt-5">
				<div className="basis-1/4 card">
					<h1 className="card_title">Informations:</h1>
					<InfoEntry type={"Age:"} data={[15]}/>
					<InfoEntry type={"Country:"} data={[<ReactCountryFlag className="link_icon m-1" countryCode="FR" title="France" svg/>]}/>
					<InfoEntry type={"Languages:"} data={[
						<SiLua className="link_icon" style={{color: "#2C2D72"}}/>,
						<SiPython className="link_icon" style={{color: "#3776AB"}}/>,
						<SiJavascript className="link_icon" style={{color: "#F7DF1E"}}/>
					]}/>
					<InfoEntry type={"Systems:"} data={[
						<SiUbuntu className="link_icon" style={{color: "#E95420"}}/>,
						<SiWindows className="link_icon" style={{color: "#0078D6"}}/>,
					]}/>
				</div>
				<div className="basis-1/2 card">
					<h1 className="card_title">Informations</h1>
				</div>
				<div className="basis-1/4 card">
					<h1 className="card_title">Links:</h1>
					<LinkEntry
						icon={<SiGithub className="link_icon" style={{color: "#181717"}}/>}
						link={"https://github.com/AFCMS"}
						stitle={"GitHub"}
						title={"AFCMS"}
					/>
					<CopyEntry
						icon={<SiDiscord className="link_icon" style={{color: "#5865F2"}}/>}
						stitle={"Discord"}
						title={"AFCM#9333"}
					/>
					<LinkEntry
						icon={<SiYoutube className="link_icon" style={{color: "#FF0000"}}/>}
						link={"https://www.youtube.com/channel/UCK0mMW2SlIb7X5pKi00ZcYw"}
						stitle={"YouTube"}
						title={"AFCM"}
					/>
					<LinkEntry
						icon={<SiReddit className="link_icon" style={{color: "#FF4500"}}/>}
						link={"https://www.reddit.com/user/AFCMS"}
						stitle={"Reddit"}
						title={"u/AFCMS"}
					/>
					<LinkEntry
						icon={<SiMastodon className="link_icon" style={{color: "#3088D4"}}/>}
						link={"https://mastodon.social/web/@AFCM"}
						stitle={"Mastodon"}
						title={"@AFCM@mastodon.social"}
					/>
					<LinkEntry
						icon={<SiSketchfab className="link_icon" style={{color: "#1CAAD9"}}/>}
						link={"https://sketchfab.com/afcm.contact"}
						stitle={"Sketchfab"}
						title={"afcm.contact"}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
