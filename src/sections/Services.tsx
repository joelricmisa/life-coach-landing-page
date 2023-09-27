import React from "react";
import { servicesData } from "../libs/constants";

const Services = () => {
	return (
		<section>
			<div className="grid  lg:grid-cols-3  shadow-sm border border-black/5 my-14">
				{servicesData.map((service, index) => (
					<div
						key={index}
						className="flex flex-col md:flex-row md:even:flex-row-reverse lg:flex-col  lg:even:flex-col-reverse">
						<div className="h-[400px] w-full md:w-1/2 lg:w-full bg-neutral flex gap-6 items-center justify-center flex-col px-5 sm:px-20 text-center">
							<h1 className="text-3xl font-semibold bg-transparent">{service.title}</h1>
							<p className="font-inter leading-8 bg-transparent">{service.description}</p>
						</div>

						<img
							src={service.image}
							alt=""
							className="h-[400px] w-full md:w-1/2 lg:w-full"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
