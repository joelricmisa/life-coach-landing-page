import ParagraphText from "./ParagraphText";
import { quote } from "../assets/images";

type Props = {
	img: string;
	name: string;
	jobTitle: string;
	comment: string;
};

const TestimonialCard = ({ img, name, jobTitle, comment }: Props) => {
	return (
		<section className="flex md:flex-row flex-col shadow-md rounded-md">
			<img
				src={img}
				alt=""
				className=" mx-auto"
			/>
			<div className="px-10 py-8 ">
				<img
					src={quote}
					alt=""
					className="h-12 w-12 mb-5"
				/>
				<ParagraphText extraStyle="text-base mb-5">{comment}</ParagraphText>
				<h2 className="font-semibold text-lg">{name}</h2>
				<ParagraphText extraStyle="text-sm">{jobTitle}</ParagraphText>
			</div>
		</section>
	);
};

export default TestimonialCard;
