import { whyImg } from "../assets/images";
import { whyData } from "../libs/constants";
import HeadingText from "../components/HeadingText";
import ParagraphText from "../components/ParagraphText";

const Why = () => {
	return (
		<section>
			<div className="py-20 px-10">
				<HeadingText extraStyle="text-center mb-5">Why You Need a Life Coach</HeadingText>

				<ParagraphText extraStyle="text-center lg:w-1/2 mx-auto mb-10">
					Whatever your situation, a life coach can help you gain clarity, overcome obstacles, and unlock your full potential. Here are
					reasons why you might need a life coach
				</ParagraphText>

				<div className="flex lg:flex-row flex-col items-center lg:w-11/12 mx-auto mt-20">
					<ul className="lg:w-1/2">
						{whyData.map((item, index) => (
							<li
								key={index}
								className={`${
									index === 0 ? "border-l-[10px] rounded-md border-primary shadow-lg shadow-black/10  lg:mr-10" : "my-5"
								}  pl-10 py-10 last:mb-10 lg:last:mb-0`}>
								<h1 className="text-2xl font-semibold mb-5">{item.title}</h1>

								<ParagraphText extraStyle="pr-10">{item.description}</ParagraphText>
							</li>
						))}
					</ul>
					<img
						src={whyImg}
						alt=""
						className="md:w-1/2"
					/>
				</div>
			</div>
		</section>
	);
};

export default Why;
