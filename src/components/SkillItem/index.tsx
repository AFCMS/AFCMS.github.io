import React from "react";
import { GiRank1, GiRank2, GiRank3 } from "react-icons/gi";
import "./SkillItem.css";

export enum SkillItemLevel {
	beginner = "beginner",
	advanced = "advanced",
	expert = "expert",
}

type SkillItemProps = {
	name: string;
	icon: React.FC<{ className?: string; style: { color: string } }>;
	alt: string;
	color: string;
	desc: string;
	level: SkillItemLevel;
};

const SkillItem = (props: SkillItemProps): JSX.Element => {
	const Icon = props.icon;
	return (
		<div className="skill-item">
			<Icon className="m-2 inline h-10 w-10" style={{ color: props.color }} />

			<div className="flex w-full flex-col">
				<div className="flex w-full flex-row place-content-between">
					<h3 className="text-lg text-blue-800">{props.name}</h3>
					{(() => {
						if (props.level === "beginner") {
							return (
								<GiRank1
									className="skill-item-level-beginner"
									title="Beginner"
								/>
							);
						} else if (props.level === "advanced") {
							return (
								<GiRank2
									className="skill-item-level-advanced"
									title="Advanced"
								/>
							);
						} else {
							return (
								<GiRank3 className="skill-item-level-expert" title="Expert" />
							);
						}
					})()}
				</div>
				<p className="overflow-ellipsis text-slate-800 text-left">
					{props.desc}
				</p>
			</div>
		</div>
	);
};

export default SkillItem;
