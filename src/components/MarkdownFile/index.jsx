import "./MarkdownFile.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import emoji from "remark-emoji";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MarkdownFile = (props) => {
	let [content, setContent] = useState({ md: "" });

	useEffect(() => {
		fetch(props.file)
			.then((res) => res.text())
			.then((md) => {
				setContent({ md });
			});
	}, [props.file]);

	return (
		<ReactMarkdown
			className="m-2"
			remarkPlugins={[[remarkGfm, emoji, { singleTilde: false }]]}
			components={{
				h1: "mf-h1",
				h2: "mf-h2",
				strong: "mf-strong",
				p: "mf-text",
			}}
			skipHtml={true}
		>
			{content.md}
		</ReactMarkdown>
	);
};

//TODO: path
MarkdownFile.propTypes = {
	file: PropTypes.string.isRequired,
};

export default MarkdownFile;
