import { useState } from "preact/hooks";
import CardImage from "../CardImage";

// https://tailkits.com/blog/tailwind-css-carousel-with-react-a-step-by-step-guide/

interface CarousselProps {
	children: { image: string; alt: string; content: React.ReactNode }[];
}

export default function Caroussel(props: CarousselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % props.children.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + props.children.length) % props.children.length);
	};

	return (
		<div className="relative h-full w-full rounded-lg">
			<div className="glass-effect relative z-10 flex h-[484px] w-full overflow-hidden p-4">
				{props.children.map((element, index) => (
					<div
						key={index}
						class={`absolute inset-0 m-4 flex flex-row transition-opacity duration-200 ${
							index === currentIndex ? "opacity-100" : "opacity-0"
						}`}
					>
						<CardImage class="aspect-[2/3] w-[300px]" alt={element.alt} src={element.image} />
						<div class="mx-12 flex h-full w-full flex-col">
							<div class="my-auto flex h-56 flex-col gap-2">{element.content}</div>
						</div>
					</div>
				))}
				<div
					class="absolute top-0 right-0 bottom-0 left-0 -z-10 h-full w-full rounded-lg bg-cover bg-no-repeat"
					style={{
						backgroundImage: `url("${props.children[currentIndex].image}")`,
						backgroundOrigin: "center",
						transition: "background-image 200ms",
						opacity: 0.3,
						filter: "blur(50px)",
					}}
				></div>
			</div>
			<button
				className="absolute top-1/2 left-0 z-10 -translate-y-1/2 transform bg-gray-800 p-2 text-white"
				onClick={prevSlide}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
				</svg>
			</button>
			<button
				className="absolute top-1/2 right-0 z-10 -translate-y-1/2 transform bg-gray-800 p-2 text-white"
				onClick={nextSlide}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
				</svg>
			</button>
			<div className="absolute right-0 bottom-0 left-0 z-20 mb-4 flex justify-center">
				{props.children.map((_, index) => (
					<div
						key={index}
						className={`mx-1 h-2 w-2 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-400"}`}
						onClick={() => setCurrentIndex(index)}
					/>
				))}
			</div>
		</div>
	);
}
