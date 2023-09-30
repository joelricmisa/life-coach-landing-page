import React from "react";
import { bookImg } from "../assets";
import Button from "../components/Button";
import HeadingText from "../components/HeadingText";
import ParagraphText from "../components/ParagraphText";

const Books = () => {
	return (
		<section>
			<div className="flex gap-10 px-10 items-center justify-start mx-auto flex-col lg:flex-row  lg:w-11/12 py-24">
				<div className="lg:w-1/2 mb-16 lg:mb-0">
					<HeadingText extraStyle="mb-10">Discovering Your Purpose and Achieving Your Dreams</HeadingText>

					<ParagraphText extraStyle="mb-10">
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
						ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.
					</ParagraphText>

					<Button> Purchase Book</Button>
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
