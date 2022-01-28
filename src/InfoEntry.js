const InfoEntry = ({type, data}) => {
	return (
		<div className="flex flex-row static_entry">
			<div className="basis-1/2 ml-2">{type}</div>
			<div className="basis-1/2 ml-2">{data}</div>
		</div>
	)
}

export default InfoEntry