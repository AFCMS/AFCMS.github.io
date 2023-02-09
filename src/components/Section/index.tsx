import PropTypes from "prop-types";

const Section = (props: {
	id: string;
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<section id={props.id}>
			<div
				className={
					"container mx-auto flex flex-col items-center md:flex-row md:px-10 md:pt-20 " +
					props.className
				}
			>
				<div className="mb-16 flex w-full flex-col items-center border-b border-slate-400 bg-slate-100 text-center md:mb-0 md:items-start md:text-left lg:flex-grow">
					{props.children}
				</div>
			</div>
		</section>
	);
};

export default Section;
