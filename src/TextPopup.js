import { useState } from "react";
import Popup from "./Popup";

const TextPopup = (props) => {
	const [open, setOpen] = useState(false);

	return (
		<span
			className="cursor-pointer text-blue-600 hover:text-blue-700"
			onClick={() => setOpen(true)}
		>
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
