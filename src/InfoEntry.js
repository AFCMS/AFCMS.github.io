import "./InfoEntry.css";

const InfoEntry = ({ type, data }) => {
	return (
		<div className="ie-entry flex flex-row">
			<div className="ml-2 basis-1/2">{type}</div>
			<div className="ml-2 basis-1/2">{data}</div>
		</div>
	);
};

export default InfoEntry;
