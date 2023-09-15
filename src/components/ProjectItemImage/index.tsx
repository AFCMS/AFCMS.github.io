import React from "react";

type ProjectItemImageProps = {
	src: string;
	setCurrentImage: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const ProjectItemImage = (props: ProjectItemImageProps) => {
	return (
		<img
			className="h-auto w-full rounded"
			src={props.src}
			alt=""
			onClick={() => {
				props.setCurrentImage(props.src);
			}}
		/>
	);
};

export default ProjectItemImage;
