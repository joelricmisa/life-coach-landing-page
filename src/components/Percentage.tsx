import { num87, num92 } from "../assets/images";
type Props = {
	children: React.ReactNode;
	percent: string;
	imgSrc: number;
};

const Percentage = ({ children, percent, imgSrc }: Props) => {
	return (
		<h2 className="font-semibold text-2xl flex items-center gap-5">
			<span className="relative h-[115px] block w-[115px]">
				<img
					src={imgSrc == 87 ? num87 : num92}
					alt={`${percent} percent`}
					className="h-full w-full"
				/>
				<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">{percent}%</span>
			</span>
			{children}
		</h2>
	);
};

export default Percentage;
