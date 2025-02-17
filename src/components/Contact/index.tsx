import { SiDiscord, SiGithub, SiGmail, SiYoutube } from "react-icons/si";

import GridCard from "../GridCard";
import links from "../../utils/links";

export default function Contact() {
	return (
		<section id="contact" class="text-header mx-auto mb-4 flex w-full max-w-4xl flex-col gap-4">
			<div class="border-t-2 border-t-indigo-950"></div>
			<h2 class="text-left text-lg font-semibold">Contact me</h2>

			<div class="text-header mx-auto mb-4 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
				<GridCard class="my-auto" class2="flex-col">
					<h3 class="mb-3 font-semibold">Want to get in touch?</h3>
					<p class="">I'm always looking for new opportunities or projects to work on.</p>
				</GridCard>
				<GridCard class="flex-col">
					<div class="">
						<ul class="flex flex-col gap-2">
							<li class="flex gap-2 align-baseline">
								<span class="glass-effect inline-flex h-[26px] w-[26px] flex-row items-center gap-1 p-1">
									<SiGmail />
								</span>
								<a class="underline-static" href="mailto:afcm.contact@gmail.com">
									afcm.contact@gmail.com
								</a>
							</li>
							<li class="flex gap-2 align-baseline">
								<span class="glass-effect inline-flex h-[26px] w-[26px] flex-row items-center gap-1 p-1">
									<SiGithub />
								</span>
								<a class="underline-static" href={links.GITHUB}>
									AFCMS
								</a>
							</li>
							<li class="flex gap-2 align-baseline">
								<span class="glass-effect inline-flex h-[26px] w-[26px] flex-row items-center gap-1 p-1">
									<SiDiscord />
								</span>
								<span>@afcms</span>
							</li>
							<li class="flex gap-2 align-baseline">
								<span class="glass-effect inline-flex h-[26px] w-[26px] flex-row items-center gap-1 p-1">
									<SiYoutube />
								</span>
								<a class="underline-static" href={links.YOUTUBE}>
									AFCMS
								</a>
							</li>
						</ul>
					</div>
				</GridCard>
			</div>
		</section>
	);
}
