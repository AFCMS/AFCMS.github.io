const CopyEntry = ({icon, stitle, title}) => {
	return (
		<div className="link_entry cursor-pointer" title={title} onClick={() => {navigator.clipboard.writeText(title);alert(`Copied: ${title}`)}}>
			{icon}
			<p className="text-lg">{stitle}</p>
		</div>
	)
}

export default CopyEntry