import React from "react";
import HeadingText from "../components/HeadingText";
import ParagraphText from "../components/ParagraphText";
import { fourNHalfStar } from "../assets";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialData } from "../libs/constants";

const Testimonials = () => {
	return (
		<section>
			<div className="flex gap-10 lg:flex-row flex-col px-10 lg:w-11/12 mx-auto py-24">
				<div className="lg:w-1/2 ">
					<HeadingText extraStyle="pr-12">See What Our Clients Have Achieved and Get Inspired to Reach Your Own Goals</HeadingText>

					<img
						src={fourNHalfStar}
						alt="4.5 star rating"
						className="mt-20 mb-2"
					/>
					<ParagraphText>
						4.5 out of 5 stars <span>from 1.2k reviews</span>
					</ParagraphText>
				</div>
				<div className="lg:w-1/2  grid gap-10">
					{testimonialData.map((item, index) => (
						<TestimonialCard
							key={index}
							{...item}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
