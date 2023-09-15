import React, { useState } from "react";

type Icon = React.FC<{ className: string; color: string; title: string }>;

type SocialIconCopyProps = {
	icon: Icon;
	icon_color: string;
	text: string;
	hover: string;
};

const SocialIconCopy = (props: SocialIconCopyProps) => {
	const Icon = props.icon;

	const [copied, setCopied] = useState<boolean>(false);

	return (
		<div
			className="relative flex h-16 w-16 place-items-center items-center rounded-md bg-slate-300 p-2 align-middle"
			onClick={() => {
				if (!copied) {
					navigator.clipboard.writeText(props.text).catch();
					setCopied(true);
					setTimeout(() => {
						setCopied(false);
					}, 700);
				}
			}}
		>
			<span
				className={`absolute left-0 -top-10 w-16 rounded bg-green-300 p-2 text-center align-baseline text-xs font-bold text-slate-900 ${
					copied ? "scale-100" : "scale-0"
				}`}
			>
				Copied!
			</span>
			<Icon
				className="h-full w-full"
				color={props.icon_color}
				title={props.hover}
			/>
		</div>
	);
};

export default SocialIconCopy;
