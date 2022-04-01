import "./InfoEntry.css";
import PropTypes from "prop-types";

const InfoEntry = ({ type, data }) => {
	return (
		<div className="ie-entry">
			<div className="ie-box">{type}</div>
			<div className="ie-box">
				{data.map((e, i) => (
					<span key={i}>{e}</span>
				))}
			</div>
		</div>
	);
};

InfoEntry.propTypes = {
	type: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
};

export default InfoEntry;
