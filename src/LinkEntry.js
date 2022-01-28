const LinkEntry = ({icon, link, stitle, title}) => {
	return (
		<a title={title} href={link}>
			<div className="link_entry">
				{icon}
				<p className="text-lg">{stitle}</p>
			</div>
		</a>
	)
}

export default LinkEntry