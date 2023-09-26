import React from "react";
import { FaPlay } from "react-icons/fa6";

const Hero = () => {
	return (
		<section>
			<div className="flex flex-col lg:h-screen gap-10 lg:gap-0  lg:flex-row  ">
				<div className="md:px-20 px-10 py-24  flex justify-center items-center   flex-col gap-10 bg-hero bg-cover bg-no-repeat bg-bottom lg:bg-center lg:basis-8/12">
					<h1 className="text-3xl sm:text-4xl md:text-5xl	xl:text-6xl font-semibold leading-tight sm:leading-tight md:leading-tight xl:leading-tight w-full bg-transparent">
						Discover Your Inner <br /> Strength and Create <br /> a Life You Love
					</h1>
					<p className="opacity-60 text-lg lg:pr-24 bg-transparent">
						Life coaches will guide you through a transformational journey of self- discovery, helping you identify your unique gifts
						and talents
					</p>
					<p className="flex gap-4 items-center w-full font-inter text-lg font-medium bg-transparent">
						<FaPlay className="text-6xl p-4 fill-white rounded-full bg-primary" />
						Watch Video
					</p>
				</div>
				<img
					src="./src/assets/heroImg.png"
					className="lg:basis-4/12  md:h-[805px] md:w-[650px] lg:h-auto lg:w-auto mx-auto"
				/>
			</div>
		</section>
	);
};

export default Hero;
