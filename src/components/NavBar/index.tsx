import "./NavBar.css";

const NavBar = () => {
	return (
		<header className="top-0 z-10 bg-slate-200 md:sticky">
			<div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
				<span className="text-3xl font-bold text-blue-700 md:ml-4">AFCM</span>
				<nav className="flex flex-wrap items-center justify-center gap-5 text-lg md:mr-auto md:ml-4 md:border-l md:border-gray-700 md:py-1 md:pl-4">
					<a href="#about">About</a>
					<a href="#skills">Skills</a>
					<a href="#projects">Projects</a>
					<a href="#social">Social</a>
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
