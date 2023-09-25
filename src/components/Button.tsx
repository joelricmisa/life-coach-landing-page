import React from "react";

type Props = {
	children: React.ReactNode;
	width?: string;
};

const Button = ({ children, width }: Props) => {
	return (
		<button className={`${width} bg-primary px-6 py-3 hover:scale-105 active:scale-100 hover:bg-opacity-80 rounded-lg text-white`}>
			{children}
		</button>
	);
};

export default Button;
