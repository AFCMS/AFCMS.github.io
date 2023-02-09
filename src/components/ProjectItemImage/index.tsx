import PropTypes from "prop-types";

const ProjectItemImage = (props: {
	src: string;
	setCurrentImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
	return (
		<img
			className="h-auto w-full rounded"
			src={props.src}
			alt=""
			onClick={() => {
				console.log("CALLED");
				props.setCurrentImage(props.src);
			}}
		/>
	);
};

ProjectItemImage.propsTypes = {
	src: PropTypes.string.isRequired,
	setCurrentImage: PropTypes.func.isRequired,
};

export default ProjectItemImage;
