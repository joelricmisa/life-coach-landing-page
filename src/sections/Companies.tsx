import React from "react";
import { companies } from "../libs/constants";

const Companies = () => {
	return (
		<section>
			<div className="flex md:flex-row flex-col px-10 gap-16 md:gap-10 py-24  lg:w-11/12 mx-auto">
				<h1 className="text-2xl font-semibold font-publicSans">
					Trusted by 5k+ <br /> companies
				</h1>
				<ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
					{companies.map((company, index) => (
						<li
							key={index}
							className="grid place-items-center">
							<img
								src={company}
								alt=""
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Companies;
