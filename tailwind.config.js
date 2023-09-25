/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				publicSans: ["Public Sans", "sans-serif"],
			},
			colors: {
				primary: "#8B7EF8",
				secondary: "#01182C",
				neutral: "#F7F8F9",
				textColor: "#01162C",
			},
			screens: {
				sm: "400px",
				md: "750px",
				lg: "1100px",
				xl: "1440px",
			},
			backgroundImage: {
				hero: 'url("./src/assets/heroBg.png")',
			},
		},
	},
	plugins: [],
};
