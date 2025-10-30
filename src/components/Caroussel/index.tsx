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
		<div class="relative h-full w-full rounded-lg select-none">
			<div class="glass-effect relative z-10 flex h-[508px] w-full overflow-hidden p-4 md:h-[484px]">
				{props.children.map((element, index) => (
					<div
						key={index}
						class={`absolute flex w-full flex-row md:transition-opacity md:duration-200 ${
							index === currentIndex ? "opacity-100" : "opacity-0"
						}`}
					>
						<CardImage class="aspect-2/3 w-[300px]" alt={element.alt} src={element.image} />
						<div class="text-shadow-indigo absolute right-0 my-auto mr-16 ml-12 flex h-full w-full max-w-[80%] flex-col md:static">
							<div class="glass-effect-dark md:glass-effect-none my-auto flex flex-col gap-2 p-4 md:h-56">
								{element.content}
							</div>
						</div>
					</div>
				))}
				<div
					class="absolute top-0 right-0 bottom-0 left-0 -z-10 hidden h-full w-full rounded-lg bg-cover bg-no-repeat md:block"
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
				class="absolute top-1/2 left-0 z-20 h-full w-[50%] -translate-y-1/2 transform"
				aria-label="Previous Slide"
				onClick={prevSlide}
			></button>
			<button
				class="absolute top-1/2 right-0 z-20 flex h-full w-[50%] -translate-y-1/2 transform flex-row-reverse"
				aria-label="Next Slide"
				onClick={nextSlide}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="text-shadow-indigo my-auto mr-4 size-6 hover:text-slate-200"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
				</svg>
			</button>
			<div className="absolute right-0 bottom-0 left-0 z-20 mb-4 flex justify-center">
				{props.children.map((_, index) => (
					<div
						key={index}
						className={`text-shadow-indigo mx-1 h-2 w-2 rounded-full ${index === currentIndex ? "bg-slate-400" : "bg-slate-600"}`}
						onClick={() => setCurrentIndex(index)}
					/>
				))}
			</div>
		</div>
	);
}
