// https://vite.dev/guide/assets#importing-asset-as-url

interface GridCardProps {
	class?: string;
	children: React.ReactNode;
	bgImage?: string;
}

export default function GridCard(props: GridCardProps) {
	return (
		<div
			class={"relative row-span-1 flex h-full w-full flex-col space-y-4" + (props.class ? " " + props.class : "")}
			style={
				props.bgImage
					? {
							backgroundImage: `url("${props.bgImage}")`,
							backgroundOrigin: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}
					: undefined
			}
		>
			<div class={"glass-effect flex h-full w-full flex-col p-4"}>{props.children}</div>
		</div>
	);
}
