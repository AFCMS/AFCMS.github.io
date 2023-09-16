import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type ProjectItemImageProps = {
	src: string;
	srcPlaceholder?: string;
	setCurrentImage: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const ProjectItemImage = (props: ProjectItemImageProps) => {
	return (
		<LazyLoadImage
			className="h-auto w-full rounded"
			src={props.src}
			alt=""
			placeholderSrc={props.srcPlaceholder}
			effect={"blur"}
			onClick={() => {
				props.setCurrentImage(props.src);
			}}
		/>
	);
};

export default ProjectItemImage;
