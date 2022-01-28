import logo from './logo.png';
import './App.css';
import LinkEntry from './LinkEntry';
import { SiGithub, SiDiscord, SiYoutube, SiReddit, SiMastodon, SiSketchfab } from "react-icons/si";

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
				</div>
				<div className="basis-1/2 card">
					<h1 className="card_title">Informations</h1>
				</div>
				<div className="basis-1/4 card">
					<h1 className="card_title">Links:</h1>
					<LinkEntry icon={<SiGithub className="link_icon"/>} link={"https://github.com/AFCMS"} stitle={"GitHub"} title={"AFCMS"}/>
					<LinkEntry icon={<SiDiscord className="link_icon"/>} link={"https://github.com/AFCMS"} stitle={"Discord"} title={"AFCM#9333"}/>
					<LinkEntry icon={<SiYoutube className="link_icon"/>} link={"https://www.youtube.com/channel/UCK0mMW2SlIb7X5pKi00ZcYw"} stitle={"YouTube"} title={"AFCM"}/>
					<LinkEntry icon={<SiReddit className="link_icon"/>} link={"https://www.reddit.com/user/AFCMS"} stitle={"Reddit"} title={"u/AFCMS"}/>
					<LinkEntry icon={<SiMastodon className="link_icon"/>} link={"https://mastodon.social/web/@AFCM"} stitle={"Mastodon"} title={"@AFCM@mastodon.social"}/>
					<LinkEntry icon={<SiSketchfab className="link_icon"/>} link={"https://sketchfab.com/afcm.contact"} stitle={"Sketchfab"} title={"afcm.contact"}/>
				</div>
			</div>
		</div>
	);
};

export default App;
