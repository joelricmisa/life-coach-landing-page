import About from "./sections/About";
import Blog from "./sections/Blog";
import Books from "./sections/Books";
import CTA from "./sections/CTA";
import Companies from "./sections/Companies";
import Events from "./sections/Events";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Parallax from "./sections/Parallax";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
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
			<Events />
			<Testimonials />
			<Parallax />
			<CTA />
			<Blog />
		</>
	);
}

export default App;
