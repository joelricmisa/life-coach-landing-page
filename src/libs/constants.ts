import { colab, border, luminous, mindfullness, minty, nextmove, snowflake, vision } from "../assets/companies";

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
