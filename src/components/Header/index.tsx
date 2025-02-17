export default function Header() {
	return (
		<header class="fixed inset-x-0 z-50 flex h-20 w-screen shadow backdrop-blur-md">
			<div class="mx-auto flex w-full max-w-4xl items-center justify-between px-4">
				<div class="">
					<h1 class="font-inter text-header font-bold">AFCMS</h1>
				</div>
				<nav class="">
					<ul class="text-header font-inter flex items-center gap-4 px-4 text-xs font-medium uppercase">
						<li>
							<a href="#projects">projects</a>
						</li>
						<li>
							<a href="#contact">contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
