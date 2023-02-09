import "./SkillItem.css";

export enum SkillItemLevel {
	beginner = "beginner",
	advanced = "advanced",
	expert = "expert",
}

const SkillItem = (props: {
	name: string;
	icon: React.FC<{ className?: string; style: { color: string } }>;
	alt: string;
	color: string;
	desc: string;
	level: SkillItemLevel;
}): JSX.Element => {
	const Icon = props.icon;
	return (
		<div className="skill-item">
			<Icon className="m-2 inline h-10 w-10" style={{ color: props.color }} />

			<div className="flex w-full flex-col justify-center">
				<div className="flex w-full flex-row place-content-between">
					<h3 className="text-lg text-blue-800">{props.name}</h3>
					{(() => {
						if (props.level === "beginner") {
							return <div className="skill-item-level-beginner">Beginner</div>;
						} else if (props.level === "advanced") {
							return <div className="skill-item-level-advanced">Advanced</div>;
						} else {
							return <div className="skill-item-level-expert">Expert</div>;
						}
					})()}
				</div>
				<p className="overflow-ellipsis text-slate-800">{props.desc}</p>
			</div>
		</div>
	);
};

export default SkillItem;
