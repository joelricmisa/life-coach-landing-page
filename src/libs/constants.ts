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
