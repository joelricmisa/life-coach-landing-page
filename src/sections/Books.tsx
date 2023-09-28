import React from "react";
import { bookImg } from "../assets";

const Books = () => {
	return (
		<section>
			<div className="flex gap-10 px-10 items-center justify-start mx-auto flex-col lg:flex-row  lg:w-11/12 py-16">
				<div className="lg:w-1/2 mb-16 lg:mb-0">
					<h1 className=" text-3xl md:text-4xl font-semibold mb-10 leading-snug">
						Discovering Your Purpose and Achieving Your Dreams
					</h1>
					<p className="font-inter opacity-60 leading-8 mb-10">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
						ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.
					</p>
					<button className="bg-primary rounded-md px-6 py-3 text-white hover:scale-105 active:scale-100 hover:bg-opacity-80">
						Purchase Book
					</button>
				</div>
				<img
					src={bookImg}
					alt=""
					className="lg:w-1/2"
				/>
			</div>
		</section>
	);
};

export default Books;
