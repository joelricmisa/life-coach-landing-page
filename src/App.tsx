import About from "./sections/About";
import Blog from "./sections/Blog";
import Books from "./sections/Books";
import CTA from "./sections/CTA";
import Companies from "./sections/Companies";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Why from "./sections/Why";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Companies />
			<About />
			<Services />
			<Why />
			<Books />
			<CTA />
			<Blog />
		</>
	);
}

export default App;
