import ReactMarkdown from "react-markdown";
import ProjectItemImage from "../ProjectItemImage";

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

function format_date(d: Date): string {
	return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export enum ProjectItemContent {
	image = "image",
}

const ProjectItem = ({
	title,
	dates,
	desc,
	content,
	links,
	setCurrentImage,
}: {
	title: string;
	dates?: Array<Date>;
	desc: Array<string>;
	content?: Array<{ type: ProjectItemContent; src: string }>;
	links?: Array<Array<string>>;
	setCurrentImage?: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
	//console.log(dates);
	return (
		<li>
			<div className="flex-start flex items-center">
				<div className="-ml-2 mr-3 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600"></div>
				<h2 className="-mt-2 text-xl font-semibold text-gray-800">{title}</h2>
			</div>
			<div className="ml-6 mb-6 pb-6">
				{dates ? (
					<div>
						{dates.map((e, i) => {
							//console.log(e, i);
							//console.log(100 - i);
							return (
								<>
									<span className="text-sm text-blue-600" key={i}>
										{format_date(e)}
									</span>
									<span
										className="mx-2 text-sm text-blue-600 last:hidden"
										key={100 - i}
									>
										-
									</span>
								</>
							);
						})}
					</div>
				) : undefined}
				<div className="mt-2 mb-4 max-w-md text-gray-700">
					{desc.map((e, i) => {
						return <ReactMarkdown key={i}>{e}</ReactMarkdown>;
					})}
				</div>
				{content ? (
					<div className="mb-4 h-auto w-full max-w-md rounded">
						{content.map((e, i) => {
							if (e.type === "image") {
								return (
									<ProjectItemImage
										src={e.src}
										key={i}
										setCurrentImage={
											setCurrentImage as React.Dispatch<
												React.SetStateAction<string | undefined>
											>
										}
									/>
								);
							}
						})}
					</div>
				) : undefined}
				{links ? (
					<div>
						{links.map((e, i) => {
							return (
								<a
									key={i}
									href={e[1]}
									target="__blank"
									className="mr-2 inline-block rounded bg-blue-600 px-4 py-1.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
								>
									{e[0]}
								</a>
							);
						})}
					</div>
				) : undefined}
			</div>
		</li>
	);
};

export default ProjectItem;
