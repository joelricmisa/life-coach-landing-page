import React from "react";
import { FaClock, FaLocationDot } from "react-icons/fa6";

type Props = {
	day: string;
	month: string;
	year: string;
	title: string;
	location: string;
	time: string;
};

const EventCard = ({ day, month, year, title, location, time }: Props) => {
	return (
		<section className="flex md:flex-row flex-col gap-5 border-b border-gray/50 py-14 bg-transparent ">
			<div className="flex justify-center md:items-center flex-col gap-2">
				<h1 className="text-5xl font-semibold">{day}</h1>
				<p className="text-sm opacity-60">
					{month} {year}
				</p>
			</div>
			<div className="flex justify-center items-start flex-col gap-4">
				<h2 className="text-2xl font-semibold">{title}</h2>
				<p className="opacity-60 flex flex-wrap gap-5">
					<span className="flex justify-center items-center gap-2">
						<FaLocationDot /> {location}
					</span>
					<span className="flex justify-center items-center gap-2">
						<FaClock /> {time}
					</span>
				</p>
			</div>
		</section>
	);
};

export default EventCard;
