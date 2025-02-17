import { IconType } from "react-icons/lib";

interface GlassButtonProps {
	href: string;
	title?: string;
	label?: string;
	icon: IconType;
	class?: string;
}

export default function GlassButton(props: GlassButtonProps) {
	const { icon: Icon } = props;
	return (
		<a
			href={props.href}
			aria-label={props.label}
			class={
				"glass-effect flex w-auto flex-row items-center gap-1 p-1" +
				(props.title ? " px-2" : " ") +
				(props.class ? " " + props.class : "")
			}
		>
			<Icon />
			{props.title ? <span>{props.title}</span> : null}
		</a>
	);
}
