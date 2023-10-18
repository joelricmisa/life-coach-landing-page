import { FaClock, FaUserLarge } from "react-icons/fa6";

type Props = {
	imgSrc: string;
	category: string;
	title: string;
	author: string;
	date: string;
};

const BlogCard = ({ imgSrc, category, title, author, date }: Props) => {
	return (
		<section className="xl:w-[600px] md:flex my-5 border border-black/5 rounded-md shadow-sm">
			<img
				className="w-full md:w-[350px] xl:w-1/2"
				src={imgSrc}
				alt=""
			/>
			<div className=" md:w-1/2 px-8 py-10">
				<p className="font-inter text-primary text-sm capitalize mb-5">{category}</p>
				<h1 className="text-2xl font-semibold leading-snug mb-10">{title}</h1>
				<div className="flex gap-5 opacity-60 text-xs">
					<p className="flex items-center gap-3 uppercase">
						<FaUserLarge />
						{author}
					</p>
					<p className="flex items-center gap-3">
						<FaClock />
						{date}
					</p>
				</div>
			</div>
		</section>
	);
};

export default BlogCard;
