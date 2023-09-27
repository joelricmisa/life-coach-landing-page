import React from "react";
import { whyImg } from "../assets";
import { whyData } from "../libs/constants";

const Why = () => {
	return (
		<section>
			<div className="py-20 px-10">
				<h1 className="text-4xl font-semibold text-center mb-5 ">Why You Need a Life Coach</h1>
				<p className="font-inter opacity-60 text-center lg:w-1/2 mx-auto mb-10 leading-8">
					Whatever your situation, a life coach can help you gain clarity, overcome obstacles, and unlock your full potential. Here are
					reasons why you might need a life coach
				</p>
				<div className="flex lg:flex-row flex-col items-center lg:w-11/12 mx-auto mt-20">
					<ul className="lg:w-1/2">
						{whyData.map((item, index) => (
							<li
								key={index}
								className={`${
									index === 0 ? "border-l-[10px] rounded-md border-primary shadow-lg shadow-black/10  lg:mr-10" : "my-5"
								}  pl-10 py-5 last:mb-10`}>
								<h1 className="text-2xl font-semibold mb-5">{item.title}</h1>
								<p className="font-inter leading-8 opacity-60 pr-10">{item.description}</p>
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
