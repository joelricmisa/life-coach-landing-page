import Button from "../components/Button";
import HeadingText from "../components/HeadingText";
import BlogCard from "../components/BlogCard";
import { blogData } from "../libs/constants";

const Blog = () => {
	return (
		<section>
			<div className="lg:w-11/12 px-10 mx-auto py-24">
				<div className="flex lg:flex-row flex-col justify-between items-center gap-10 mb-20">
					<HeadingText extraStyle="md:text-4xl">
						Discover Your Inner Potential <br /> with Our Life Coaching Blog
					</HeadingText>
					<Button>View All</Button>
				</div>

				<div className="grid xl:grid-cols-2">
					{blogData.map((blog, index) => (
						<BlogCard
							key={index}
							{...blog}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
