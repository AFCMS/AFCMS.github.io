import { IconType } from "react-icons/lib";

interface GlassButtonProps {
	href: string;
	title: string;
	icon: IconType;
}

export default function GlassButton(props: GlassButtonProps) {
	const { icon: Icon } = props;
	return (
		<a href={props.href} class="glass-effect flex flex-row items-center gap-1 p-1 px-2">
			<Icon />
			<span>{props.title}</span>
		</a>
	);
}
