import { useState } from "react";
import PropTypes from "prop-types";
import { CheckIcon } from "@heroicons/react/outline";
import "./CopyEntry.css";

const CopyEntry = ({ icon, stitle, title }) => {
	const [copied, setCopied] = useState(false);

	const Icon = icon[0];
	const icon_color = icon[1];

	return (
		<div
			className={copied ? "ce-entry-copied" : "ce-entry"}
			title={title}
			onClick={() => {
				if (!copied) {
					navigator.clipboard.writeText(title);
					setCopied(true);
					setTimeout(() => {
						setCopied(false);
					}, 700);
				}
			}}
		>
			{copied ? (
				<CheckIcon className="link-icon" />
			) : (
				<Icon className="link-icon" style={{ color: icon_color }} />
			)}
			<p className="text-lg">{copied ? "Copied" : stitle}</p>
		</div>
	);
};

CopyEntry.propTypes = {
	icon: PropTypes.array.isRequired,
	stitle: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default CopyEntry;
