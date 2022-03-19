import { useState } from "react";
import Popup from "../Popup";
import "./CopyEntry.css";

const CopyEntry = ({ icon, stitle, title }) => {
	const [open, setOpen] = useState(false);
	return (
		<div className="ce-entry" title={title} onClick={() => setOpen(true)}>
			{icon}
			<p className="text-lg">{stitle}</p>
			<Popup
				title={"Discord"}
				content={
					<button
						className="rounded bg-blue-300"
						onClick={() => navigator.clipboard.writeText(title)}
					>
						<span className="m-1">{title}</span>
					</button>
				}
				open={open}
				setOpen={setOpen}
			></Popup>
		</div>
	);
};

export default CopyEntry;
