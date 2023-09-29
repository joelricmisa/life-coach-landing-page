import {
	colab,
	border,
	luminous,
	mindfullness,
	minty,
	nextmove,
	snowflake,
	vision,
	serviceImg1,
	serviceImg2,
	serviceImg3,
	blogImg1,
	blogImg4,
	blogImg2,
	blogImg3,
} from "../assets";

export const navLinks = [
	{
		name: "Home",
		href: "#home",
	},
	{
		name: "About Us",
		href: "#about",
	},
	{
		name: "Services",
		href: "#services",
	},
	{
		name: "Pages",
		href: "#pages",
	},
] as const;

export const companies = [luminous, minty, nextmove, vision, mindfullness, border, snowflake, colab] as const;

export const servicesData = [
	{
		title: "One-on-One Coaching",
		description: "Our experienced coaches provide  personalized one-on-one coaching to help you achieve your goals",
		image: serviceImg1,
	},
	{
		title: "Group Coaching",
		description: "Join our supportive community of like-minded individuals and receive group coaching to gain insights.",
		image: serviceImg2,
	},
	{
		title: "Mindfulness Training",
		description: "Learn to reduce stress, improve focus, and cultivate inner peace with our mindfulness training program.",
		image: serviceImg3,
	},
];

export const whyData = [
	{
		title: "Gain Clarity and Focus",
		description:
			"A life coach can help you gain clarity and focus by asking the right questions, helping you identify your strengths and values, and guiding you toward a clearer vision of your future.",
	},
	{
		title: "Overcome Obstacles",
		description:
			"Whether it's a lack of confidence, a fear of failure, or a personal roadblock, a life coach can help you overcome these obstacles by providing accountability, support, and guidance.",
	},
	{
		title: "Achieve Your Potential",
		description:
			"A life coach can help you tap into your full potential by setting clear goals, creating a plan action, and providing ongoing support. guide you to achieve the success you've always dreamed.",
	},
];

export const blogData = [
	{
		imgSrc: blogImg1,
		category: "Insight",
		title: "How to use your body to accelerate good choices",
		author: "Jane Doe",
		date: "March 3, 2023",
	},
	{
		imgSrc: blogImg2,
		category: "Strategies",
		title: "Setting healthy boundaries that really work",
		author: "Jane Doe",
		date: "March 3, 2023",
	},
	{
		imgSrc: blogImg3,
		category: "Tips & Trick",
		title: "The Power of Positive Thinking Shift Mindset",
		author: "Jane Doe",
		date: "March 3, 2023",
	},
	{
		imgSrc: blogImg4,
		category: "Insight",
		title: "Emotional fitness and the truth about feelings",
		author: "Jane Doe",
		date: "March 3, 2023",
	},
];
