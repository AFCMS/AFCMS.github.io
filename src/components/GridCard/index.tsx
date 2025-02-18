// https://vite.dev/guide/assets#importing-asset-as-url

interface GridCardProps {
	class?: string;
	class2?: string;
	children: React.ReactNode;
	bgImage?: string;
	bgTransparency?: number;
}

export default function GridCard(props: GridCardProps) {
	return (
		<div class={"relative z-10 h-full w-full space-y-4 rounded-lg" + (props.class ? " " + props.class : "")}>
			{props.bgImage ? (
				<div
					class="absolute top-0 right-0 bottom-0 left-0 -z-10 h-full w-full rounded-lg bg-cover bg-no-repeat"
					style={{
						backgroundImage: `url("${props.bgImage}")`,
						backgroundOrigin: "center",
						opacity: props.bgTransparency ? props.bgTransparency : 0.8,
					}}
				></div>
			) : null}
			<div class={"glass-effect z-10 flex h-full w-full p-4" + (props.class2 ? " " + props.class2 : "")}>
				{props.children}
			</div>
		</div>
	);
}
