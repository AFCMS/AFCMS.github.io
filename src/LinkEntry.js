import "./LinkEntry.css";

const LinkEntry = ({ icon, link, stitle, title }) => {
	return (
		<a title={title} href={link} target="_blank" rel="noopener noreferrer">
			<div className="le-entry">
				{icon}
				<p className="text-lg">{stitle}</p>
			</div>
		</a>
	);
};

export default LinkEntry;
