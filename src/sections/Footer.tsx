import React from "react";
import { footerData } from "../libs/constants";
import { FaEnvelope, FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone } from "react-icons/fa6";
import { footerBg } from "../assets";

const Footer = () => {
	return (
		<footer className="bg-darkPrimary text-gray-100 relative ">
			{/* bg line  */}
			<img
				src={footerBg}
				alt=""
				className="hidden lg:block lg:absolute z-0 h-full w-full"
			/>

			<div className="lg:w-10/12 mx-auto px-10">
				<nav className=" flex md:flex-row flex-col gap-8 md:items-center justify-end text-gray-100 pb-10 pt-24 border-b border-primary/50">
					{footerData.navlinks.map((link, index) => (
						<a
							key={index}
							href={`#${link}`}>
							{link}
						</a>
					))}
				</nav>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-16 ">
					{footerData.columnData.map((col, colIndex) => (
						<ul
							key={colIndex}
							className="flex flex-col gap-5">
							<h1 className="text-gray-100 font-semibold text-2xl mb-5">{col.title}</h1>
							{col.list.map((data, index) => (
								<li
									key={index}
									className="text-gray-100 font-inter flex items-center gap-4">
									{colIndex === 1 ? (
										index === 0 ? (
											<FaLocationDot className="fill-primary" />
										) : index === 1 ? (
											<FaPhone className="fill-primary" />
										) : index === 2 ? (
											<FaEnvelope className="fill-primary" />
										) : (
											""
										)
									) : (
										""
									)}
									{data}
								</li>
							))}
						</ul>
					))}

					<form
						action=""
						className="md:col-span-2">
						<h1 className="text-3xl leading-snug font-semibold text-gray-100 mb-10 ">
							Join Our Newsletter Community for Regular Inspiration
						</h1>

						<input
							type="email"
							placeholder="Your Email Address"
							className="px-5 py-3   w-full  md:w-3/4 outline-none focus:ring-1 focus:ring-primary mb-3 md:mb-0"
						/>
						<button
							type="button"
							className="text-gray-100 bg-primary px-5 py-3  hover:scale-105 active:scale-100 cursor-pointer  w-full  md:w-1/4">
							Subscribe
						</button>
					</form>
				</div>

				<div className="flex md:flex-row flex-col gap-5 justify-between py-5 mt-10">
					<p className="text-gray-400">©2023 Lifkoach Landing Page - All Rights Reserved</p>
					<div>
						<a
							href=""
							className="bg-primary rounded-full p-2 inline-block mr-4">
							<FaFacebookF className="fill-white" />
						</a>
						<a
							href=""
							className="bg-primary rounded-full p-2 inline-block mr-4">
							<FaLinkedinIn className="fill-white" />
						</a>
						<a
							href=""
							className="bg-primary rounded-full p-2 inline-block mr-4">
							<FaInstagram className="fill-white" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
