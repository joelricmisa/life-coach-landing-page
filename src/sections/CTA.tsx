import { ctaImg } from "../assets/images";
import Button from "../components/Button";
import HeadingText from "../components/HeadingText";
import ParagraphText from "../components/ParagraphText";

const CTA = () => {
	return (
		<section>
			<div className="hidden flex-col justify-center items-center text-center py-16 my-16 bg-neutral  relative lg:flex">
				<HeadingText extraStyle="mb-10 z-10">Become the Best Version of Yourself</HeadingText>

				<ParagraphText extraStyle="mb-10 z-10">
					We are here to help you reach your goals. Sign up for a free consultation today to <br /> discover how we can help you on
					your journey.
				</ParagraphText>

				<Button zIndex="z-10">Start Consultation</Button>

				<img
					src={ctaImg}
					alt=""
					className="absolute inset-0 z-0 h-full w-full"
				/>
			</div>
		</section>
	);
};

export default CTA;
