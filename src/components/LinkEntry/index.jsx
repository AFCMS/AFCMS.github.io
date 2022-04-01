import "./LinkEntry.css";
import PropTypes from "prop-types";

const LinkEntry = ({ icon, link, stitle, title }) => {
	const Icon = icon[0];
	const iconColor = icon[1];

	return (
		<a
			className="le-link"
			title={title}
			href={link}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="le-entry">
				<Icon className="le-icon" style={{ color: iconColor }} />
				<p className="text-lg">{stitle}</p>
			</div>
		</a>
	);
};

LinkEntry.propTypes = {
	icon: PropTypes.array.isRequired,
	link: PropTypes.string.isRequired,
	stitle: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default LinkEntry;
