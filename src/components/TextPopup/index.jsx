import { useState } from "react";
import Popup from "../Popup";
import "./TextPopup.css";

const TextPopup = (props) => {
	const [open, setOpen] = useState(false);

	return (
		<span className="tp-text" onClick={() => setOpen(true)}>
			{props.text}
			<Popup
				title={"Hello"}
				content={"Hello World"}
				open={open}
				setOpen={setOpen}
			/>
		</span>
	);
};

export default TextPopup;
