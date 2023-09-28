import React from "react";
import { ctaImg } from "../assets";

const CTA = () => {
	return (
		<section>
			<div className="hidden flex-col justify-center items-center text-center py-16 my-16 bg-neutral  relative lg:flex">
				<h1 className="text-3xl md:text-4xl font-semibold mb-10 z-10">Become the Best Version of Yourself</h1>
				<p className="font-inter opacity-60 leading-8 mb-10 z-10">
					We are here to help you reach your goals. Sign up for a free consultation today to <br /> discover how we can help you on
					your journey.
				</p>
				<button className="bg-primary rounded-md px-6 py-3 text-white hover:scale-105 active:scale-100 hover:bg-opacity-80 z-10">
					Start Consultation
				</button>
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
