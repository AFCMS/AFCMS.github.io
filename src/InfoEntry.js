import "./InfoEntry.css";

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

export default InfoEntry;
