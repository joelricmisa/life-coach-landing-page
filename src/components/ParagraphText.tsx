import React from "react";

type Props = {
	children: React.ReactNode;
	extraStyle?: string;
};

const ParagraphText = ({ children, extraStyle }: Props) => {
	return <p className={`opacity-60 text-lg leading-8 font-inter ${extraStyle}`}>{children}</p>;
};

export default ParagraphText;
