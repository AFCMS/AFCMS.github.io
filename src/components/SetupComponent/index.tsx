import React from "react";
import ButtonLink from "../ButtonLink";

type SetupComponentProps = {
	icon: React.FC<{ className?: string; color?: string; title?: string }>;
	store: string;
	title: string;
	description_elements: string[];
};

const SetupComponent = (props: SetupComponentProps) => {
	const Icon = props.icon;

	return (
		<div className="flex flex-row gap-4 p-2">
			<div className="border-r border-r-slate-400 pr-4">
				<Icon className="text-blue-600 text-6xl text-center w-full" />
				<ButtonLink href={props.store} text="Store" />
			</div>
			<div className="">
				<h2 className="font-bold text-blue-600 text-left">{props.title}</h2>
				<ul className="pl-8 list-disc text-left">
					{props.description_elements.map((value, index) => {
						return <li key={index}>{value}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default SetupComponent;
