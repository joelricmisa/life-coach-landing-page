import React from "react";
import { aboutImg1, aboutImg2, num87, num92, signature } from "../assets/images";
import HeadingText from "../components/HeadingText";
import ParagraphText from "../components/ParagraphText";
import Percentage from "../components/Percentage";

const About = () => {
	return (
		<section className=" px-10 lg:w-11/12 mx-auto ">
			<div className="flex lg:flex-row flex-col justify-center  gap-20 items-center py-14">
				<img
					src={aboutImg1}
					alt="coach image"
				/>
				<div className="h-full  flex flex-col gap-10">
					<HeadingText>
						Helping You Create A Life <br /> that Aligns with Your Values <br /> and Passions
					</HeadingText>
					<ParagraphText>
						Lifkoach was founded by a team of passionate and experienced life coaches who believe in the power of personal
						transformation. We offer a range of services to help you ignite your inner fire and create a life you love.
					</ParagraphText>

					<img
						src={signature}
						alt="coach signature"
						className="w-[260px] h-[50px]"
					/>
				</div>
			</div>
			<div className="flex lg:flex-row flex-col justify-center items-center py-14 gap-20">
				<div className="h-full  flex flex-col gap-10">
					<HeadingText>
						Your Source for Personal and <br /> Professional Development
					</HeadingText>

					<ParagraphText>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
						ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.
					</ParagraphText>

					<div className="flex lg:flex-row flex-col gap-16">
						<Percentage
							percent="92"
							imgSrc={num92}>
							Private <br /> Coaching
						</Percentage>

						<Percentage
							percent="87"
							imgSrc={num87}>
							Group <br /> Program
						</Percentage>
					</div>
				</div>

				<img
					src={aboutImg2}
					alt="coach image"
				/>
			</div>
		</section>
	);
};

export default About;
