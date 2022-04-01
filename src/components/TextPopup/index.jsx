import { useState } from "react";
import Popup from "../Popup";
import "./TextPopup.css";
import PropTypes from "prop-types";

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

TextPopup.propTypes = {
	text: PropTypes.string.isRequired,
};

export default TextPopup;
