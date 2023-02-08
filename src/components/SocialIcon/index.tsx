type Icon = React.FC<{ className: string; color: string; title: string }>;

const SocialIcon = (props: {
	icon: Icon;
	icon_color: string;
	link: string;
	hover: string;
}) => {
	const Icon = props.icon;
	return (
		<div className="h-16 w-16 rounded-md bg-slate-300 ">
			<a
				className="flex h-full w-full place-items-center items-center p-2 align-middle"
				href={props.link}
			>
				<Icon
					className="h-full w-full"
					color={props.icon_color}
					title={props.hover}
				/>
			</a>
		</div>
	);
};

export default SocialIcon;
