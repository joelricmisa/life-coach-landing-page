import React from "react";

type Props = {
	children: React.ReactNode;
	extraStyle?: string;
};

const HeadingText = ({ children, extraStyle }: Props) => {
	return (
		<h1
			className={`text-3xl sm:text-4xl md:text-5xl  font-semibold leading-tight sm:leading-tight md:leading-tight xl:leading-tight ${extraStyle}`}>
			{children}
		</h1>
	);
};

export default HeadingText;
