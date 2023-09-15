import React, { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import ProjectItemImage from "../ProjectItemImage";
import ButtonLink from "../ButtonLink";

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

type ProjectItemProps = {
	title: string;
	dates?: Array<Date>;
	desc: Array<string>;
	content?: Array<{ type: ProjectItemContent; src: string }>;
	links?: Array<Array<string>>;
	setCurrentImage?: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const ProjectItem = (props: ProjectItemProps) => {
	return (
		<li>
			<div className="flex-start flex items-center">
				<div className="-ml-2 mr-3 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600"></div>
				<h2 className="-mt-2 text-xl font-semibold text-gray-800">
					{props.title}
				</h2>
			</div>
			<div className="ml-6 mb-6 pb-6">
				{props.dates ? (
					<div>
						{props.dates.map((e, i) => {
							return (
								<Fragment key={i}>
									<span className="text-sm text-blue-600">
										{format_date(e)}
									</span>
									<span className="mx-2 text-sm text-blue-600 last:hidden">
										-
									</span>
								</Fragment>
							);
						})}
					</div>
				) : undefined}
				<div className="mt-2 mb-4 max-w-md text-gray-700">
					{props.desc.map((e, i) => {
						return <ReactMarkdown key={i}>{e}</ReactMarkdown>;
					})}
				</div>
				{props.content ? (
					<div className="mb-4 h-auto w-full max-w-md rounded">
						{props.content.map((e, i) => {
							if (e.type === "image") {
								return (
									<ProjectItemImage
										src={e.src}
										key={i}
										setCurrentImage={
											props.setCurrentImage as React.Dispatch<
												React.SetStateAction<string | undefined>
											>
										}
									/>
								);
							}
						})}
					</div>
				) : undefined}
				{props.links ? (
					<div>
						{props.links.map((e, i) => {
							return (
								<ButtonLink
									key={i}
									href={e[1]}
									text={e[0]}
									className={"mr-2"}
								/>
							);
						})}
					</div>
				) : undefined}
			</div>
		</li>
	);
};

export default ProjectItem;
