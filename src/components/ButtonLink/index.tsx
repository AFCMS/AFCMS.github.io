type ButtonLinkProps = {
	href: string;
	text: string;
	className?: string;
};

const ButtonLink = (props: ButtonLinkProps) => {
	return (
		<a
			href={props.href}
			target="__blank"
			className={
				"inline-block rounded bg-blue-600 px-4 py-1.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg " +
				(props.className ? props.className : "")
			}
		>
			{props.text}
		</a>
	);
};

export default ButtonLink;
