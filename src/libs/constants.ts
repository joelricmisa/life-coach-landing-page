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
	testimonialImg1,
	testimonialImg2,
	testimonialImg3,
	testimonialImg4,
} from "../assets/images";

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

export const testimonialData = [
	{
		name: "Howard Woods",
		jobTitle: "Lead Developer",
		comment:
			"Sed ut perspiciatis unde omnis iste natus error sit doloremque, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
		img: testimonialImg1,
	},
	{
		name: "Pamela Allen",
		jobTitle: "Entrepreneur",
		comment:
			"Sed ut perspiciatis unde omnis iste natus error sit doloremque, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
		img: testimonialImg2,
	},

	{
		name: "Joshua Hawkins",
		jobTitle: "Influencer",
		comment:
			"Sed ut perspiciatis unde omnis iste natus error sit doloremque, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
		img: testimonialImg3,
	},
	{
		name: "Lisa Guerrero",
		jobTitle: "Head of Marketing",
		comment:
			"Sed ut perspiciatis unde omnis iste natus error sit doloremque, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
		img: testimonialImg4,
	},
];

export const eventData = [
	{
		day: "05",
		month: "Mar",
		year: "2023",
		title: "Discover Your Purpose Workshop",
		location: "Sanur, Bali",
		time: "10:00 am - 02:00 pm",
	},
	{
		day: "25",
		month: "Mar",
		year: "2023",
		title: "Tips to Overcome Procrastination and Boost Productivity",
		location: "Ubud, Bali",
		time: "10:00 am - 02:00 pm",
	},

	{
		day: "07",
		month: "Apr",
		year: "2023",
		title: "Leadership Development Retreat",
		location: "Canggu, Bali",
		time: "10:00 am - 02:00 pm",
	},
	{
		day: "15",
		month: "Apr",
		year: "2023",
		title: "The Power of Gratitude: Cultivate an Attitude of Gratitude for a Happier Life",
		location: "Ubud, Bali",
		time: "10:00 am - 02:00 pm",
	},
];

export const footerData = {
	navlinks: ["Home", "About Us", "Services", "Contact Us"],
	columnData: [
		{
			title: "Support",
			list: ["Help Center", "Privacy Policy", "FAQ", "Terms & Condition", " Community"],
		},
		{
			title: "Contact",
			list: ["Jl. Umalas 1 No.3, Kerobokan Kelod, Badung, Bali", "+62 (522) 9805084", "support@domain.com"],
		},
	],
};
