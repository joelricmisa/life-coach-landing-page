import React from "react";

type Props = {
	children: React.ReactNode;
	width?: string;
	zIndex?: string;
};

const Button = ({ children, width, zIndex }: Props) => {
	return (
		<button
			className={`${width} ${zIndex} bg-primary px-6 py-3 hover:scale-105 active:scale-100 hover:bg-opacity-80 rounded-md text-white`}>
			{children}
		</button>
	);
};

export default Button;
