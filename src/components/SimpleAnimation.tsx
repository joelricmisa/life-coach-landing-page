import React from "react";
import { motion } from "framer-motion";

type Props = {
	children: React.ReactNode;
};

const SimpleAnimation = ({ children }: Props) => {
	return (
		<motion.div
			variants={{
				visible: { y: 0, opacity: 1 },
				hidden: { y: -100, opacity: 0 },
			}}
			transition={{ delay: 0.3 }}
			initial="hidden"
			whileInView={"visible"}
			viewport={{ once: true }}>
			{children}
		</motion.div>
	);
};

export default SimpleAnimation;
