import { Tab } from "@headlessui/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { SiFedora, SiWindows11 } from "react-icons/si";
import {
	MdCameraAlt,
	MdKeyboard,
	MdLaptop,
	MdMouse,
	MdPhoneAndroid,
	MdTablet,
} from "react-icons/md";

import Section from "../Section";
import ButtonLink from "../ButtonLink";
import SetupComponent from "../SetupComponent";

const SetupSection = () => {
	return (
		<Section id="setup">
			<div className="w-full px-6 pt-2">
				<h1 className="font-bold text-blue-700">My setup</h1>
				<Tab.Group>
					<Tab.List className="flex space-x-1 border-b border-slate-400 bg-slate-300 p-1">
						<Tab
							key={"hardware"}
							className={({ selected }) =>
								`w-full py-2.5 font-bold uppercase leading-5 text-blue-700 outline-none ${
									selected ? "rounded bg-slate-100" : ""
								}`
							}
						>
							Hardware
						</Tab>
						<Tab
							key={"periphericals"}
							className={({ selected }) =>
								`w-full py-2.5 font-bold uppercase leading-5 text-blue-700 outline-none ${
									selected ? "rounded bg-slate-100" : ""
								}`
							}
						>
							Periphericals
						</Tab>
						<Tab
							key={"os"}
							className={({ selected }) =>
								`w-full py-2.5 font-bold uppercase leading-5 text-blue-700 outline-none ${
									selected ? "rounded bg-slate-100" : ""
								}`
							}
						>
							Operating system
						</Tab>
					</Tab.List>
					<Tab.Panels className="mt-2">
						<Tab.Panel key={"hardware"}>
							<div className="mb-4 flex flex-col gap-4">
								<SetupComponent
									icon={MdLaptop}
									store={
										"https://www.asus.com/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-a15-2023/"
									}
									title="ASUS TUF Gaming A15"
									description_elements={[
										"Ryzen 7 7735HS",
										"16GB RAM",
										"Nvidia RTX 4060 8Go",
										"1.5To SSD",
									]}
								/>
								<SetupComponent
									icon={MdPhoneAndroid}
									store={"https://www.mi.com/global/product/redmi-note-12/"}
									title="Redmi Note 12"
									description_elements={["4G", "128Go"]}
								/>
							</div>
						</Tab.Panel>
						<Tab.Panel key={"periphericals"}>
							<div className="mb-4 flex flex-col gap-4">
								<SetupComponent
									icon={MdKeyboard}
									store={
										"https://www.corsair.com/ww/en/p/keyboards/ch-910d019-na/k60-rgb-pro-mechanical-gaming-keyboard-100-cherry-mv-mechanical-keyswitches-black-ch-910d019-na"
									}
									title="Corsair K60 RGB PRO"
									description_elements={[
										"Mecanical CHERRY MV switches",
										"Full Size",
										"Anti-Ghosting",
									]}
								/>
								<SetupComponent
									icon={MdMouse}
									store={
										"https://www.corsair.com/ww/en/p/gaming-mouse/ch-930c111-na/katar-pro-xt-ultra-light-gaming-mouse-ch-930c111-na"
									}
									title="Corsair Katar PRO XT"
									description_elements={["18.000 DPI", "73g"]}
								/>
								<SetupComponent
									icon={MdCameraAlt}
									store={
										"https://logitech.com/en-us/products/webcams/streamcam.960-001286.html"
									}
									title="Logitech Streamcam"
									description_elements={["USB-C", "1080p 60FPS"]}
								/>
								<SetupComponent
									icon={MdTablet}
									store={
										"https://estore.wacom.com/en-us/wacom-intuos-m-bluetooth-black-us-ctl6100wlk0.html"
									}
									title="Wacom Intuos M (Wired)"
									description_elements={[
										"USB-A",
										"4096 presure levels",
										"GNOME integration",
									]}
								/>
							</div>
						</Tab.Panel>
						<Tab.Panel id={"os"}>
							<div className={"mb-4 flex flex-col gap-4"}>
								<div className="flex flex-row gap-4 p-2">
									<div className="border-r border-r-slate-400 pr-4">
										<SiFedora
											color={"#51A2DA"}
											className="mb-4 w-full text-center text-6xl"
										/>
										<ButtonLink
											href="https://fedoraproject.org"
											text="Website"
										/>
									</div>
									<div className="">
										<h3 className="text-left font-bold text-blue-600">
											{"Fedora 39"}
										</h3>
										<p className={"max-w-2xl text-left"}>
											I currently use Fedora Workstation with the GNOME desktop
											environment as my daily driver Linux distro. I previously
											used Ubuntu, but I switched to get faster updates and a
											more vanilla GNOME experience.
										</p>
									</div>
								</div>
								<div className="flex flex-row gap-4 p-2">
									<div className="border-r border-r-slate-400 pr-4">
										<SiWindows11
											color={"#0078D4"}
											className="mb-4 w-full text-center text-6xl"
										/>
										<ButtonLink
											href="https://www.microsoft.com/en-us/windows"
											text="Website"
										/>
									</div>
									<div className="">
										<h3 className="text-left font-bold text-blue-600">
											{"Windows 11 Pro"}
										</h3>
										<ul className="list-disc text-left"></ul>
										<p className={"max-w-2xl text-left"}>
											I also have a Windows 11 Pro dual-boot I use for Windows
											specific software like Microsoft Office, Unreal Engine and
											some video games.
										</p>
									</div>
								</div>
							</div>
						</Tab.Panel>
					</Tab.Panels>
					<div className={"relative"}>
						<span
							className={"text absolute bottom-3 right-0"}
							title={
								"All links are non-affiliated.\nI only advertize products because I like them."
							}
						>
							<InformationCircleIcon className={"h-6 w-6 text-blue-600"} />
						</span>
					</div>
				</Tab.Group>
			</div>
		</Section>
	);
};

export default SetupSection;
