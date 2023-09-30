import React from "react";
import { parallaxImg } from "../assets";
import HeadingText from "../components/HeadingText";
import ParagraphText from "../components/ParagraphText";
import { FaCircleCheck } from "react-icons/fa6";

const Parallax = () => {
	return (
		<section>
			<div className="flex gap-10 lg:flex-row flex-col px-10 lg:px-0">
				<img
					src={parallaxImg}
					alt=""
				/>
				<div className="lg:p-16  lg:w-1/2 flex flex-col gap-10">
					<HeadingText>Dare to Dream Big and Step into Your Power to Achieve Your Goals</HeadingText>
					<ParagraphText>
						Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</ParagraphText>
					<span className="block h-0.5 w-full bg-primary/50"></span>
					<div className="flex flex-col gap-2 ">
						<h2 className="flex gap-5 items-center font-semibold text-2xl ">
							<FaCircleCheck className="text-xl fill-primary" />
							Licensed Mentors
						</h2>

						<p className="pl-10">
							Vitae platea fermentum, in pellentesque lectus vitae. Iaculis sit viverra vulputate proin malesuada mollis. Morbi quis
							a, sapien, in pellentesque.
						</p>
					</div>
					<div className="flex flex-col gap-2 ">
						<h2 className="flex gap-5 items-center font-semibold text-2xl ">
							<FaCircleCheck className="text-xl fill-primary" />
							High Performance
						</h2>

						<p className="pl-10">
							Vitae platea fermentum, in pellentesque lectus vitae. Iaculis sit viverra vulputate proin malesuada mollis. Morbi quis
							a, sapien, in pellentesque.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Parallax;
