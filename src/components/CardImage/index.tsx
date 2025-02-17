interface CardImageProps {
	class?: string;
	alt?: string;
	src: string;
}

export default function CardImage(props: CardImageProps) {
	return (
		<img
			class={
				"rounded-lg border border-indigo-300/20 bg-indigo-300/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]" +
				(props.class ? " " + props.class : "")
			}
			alt={props.alt}
			src={props.src}
		/>
	);
}
