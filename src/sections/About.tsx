import React from "react";
import { aboutImg1, aboutImg2, num87, num92, signature } from "../assets";

const About = () => {
	return (
		<section className=" px-10 lg:w-11/12 mx-auto ">
			<div className="flex lg:flex-row flex-col justify-center  gap-20 items-center py-14">
				<img
					src={aboutImg1}
					alt="coach image"
				/>
				<div className="h-full  flex flex-col gap-10">
					<h1 className="text-3xl sm:text-4xl md:text-5xl	 font-semibold leading-tight sm:leading-tight md:leading-tight xl:leading-tight ">
						Helping You Create A Life <br /> that Aligns with Your Values <br /> and Passions
					</h1>
					<p className="font-inter opacity-60 justify-center">
						Lifkoach was founded by a team of passionate and experienced life coaches who believe in the power of personal
						transformation. We offer a range of services to help you ignite your inner fire and create a life you love.
					</p>
					<img
						src={signature}
						alt="coach signature"
						className="w-[260px] h-[50px]"
					/>
				</div>
			</div>
			<div className="flex lg:flex-row flex-col justify-center items-center py-14 gap-20">
				<div className="h-full  flex flex-col gap-10">
					<h1 className="text-3xl sm:text-4xl md:text-5xl	 font-semibold leading-tight sm:leading-tight md:leading-tight xl:leading-tight">
						Your Source for Personal and <br /> Professional Development
					</h1>
					<p className="font-inter opacity-60  justify-center">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
						ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.
					</p>
					<div className="flex lg:flex-row flex-col gap-16">
						<h2 className="font-semibold text-2xl flex items-center gap-5">
							<span className="relative h-[115px] block w-[115px]">
								<img
									src={num92}
									alt="92 percent"
									className="h-full w-full"
								/>
								<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">92%</span>
							</span>
							Private <br /> Coaching
						</h2>
						<h2 className="font-semibold text-2xl flex items-center gap-5">
							<span className="relative h-[115px] block w-[115px]">
								<img
									src={num87}
									alt="87 percent"
								/>
								<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">87%</span>
							</span>
							Group <br /> Program
						</h2>
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
