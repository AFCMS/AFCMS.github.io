import "./MarkdownFile.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState, useEffect } from "react";

const MarkdownFile = (props) => {
	let [content, setContent] = useState({ md: "" });

	useEffect(() => {
		fetch(props.file)
			.then((res) => res.text())
			.then((md) => {
				setContent({ md });
			});
	}, []);

	return (
		<ReactMarkdown
			className="m-2"
			remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
			components={{
				h1: "mf-h1",
				h2: "mf-h2",
				strong: "mf-strong",
				//p: "mf-text",
			}}
		>
			{content.md}
		</ReactMarkdown>
	);
};

export default MarkdownFile;
