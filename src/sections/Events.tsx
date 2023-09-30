import React from "react";
import HeadingText from "../components/HeadingText";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import EventCard from "../components/EventCard";
import { backgroundOverlay } from "../assets";
import { eventData } from "../libs/constants";

const Events = () => {
	return (
		<section className="bg-neutral">
			<div className="flex flex-col lg:flex-row  lg:w-11/12 mx-auto px-10 relative py-24 lg:my-20">
				{/* line bg */}
				<img
					src={backgroundOverlay}
					alt=""
					className="absolute inset-0 z-0 invisible lg:visible"
				/>
				<div className="flex justify-between gap-10  flex-col lg:w-1/2 z-10 bg-transparent">
					<HeadingText>Unlock Your Potential with Inspiring Events</HeadingText>
					<div className="flex flex-col flex-wrap gap-2 ">
						<p className="font-semibold text-lg ">More Information</p>
						<span className="text-primary">
							<FaEnvelope className="inline-block mx-1 fill-primary" /> contact@domain.com
						</span>
						<span className="text-primary">
							<FaPhone className="inline-block mx-1 fill-primary" /> +62 (522) 9805084
						</span>
					</div>
				</div>
				<div className="lg:w-1/2 z-10 bg-transparent">
					{eventData.map((event, index) => (
						<EventCard
							key={index}
							{...event}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Events;
