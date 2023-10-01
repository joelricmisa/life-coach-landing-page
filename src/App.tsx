import SimpleAnimation from "./components/SimpleAnimation";
import About from "./sections/About";
import Blog from "./sections/Blog";
import Books from "./sections/Books";
import CTA from "./sections/CTA";
import Companies from "./sections/Companies";
import Events from "./sections/Events";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Parallax from "./sections/Parallax";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Why from "./sections/Why";

function App() {
	return (
		<>
			{/* Header */}
			<SimpleAnimation>
				<Header />
			</SimpleAnimation>
			{/* Hero */}
			<SimpleAnimation>
				<Hero />
			</SimpleAnimation>
			{/* Companies  */}
			<SimpleAnimation>
				<Companies />
			</SimpleAnimation>
			{/* About  */}
			<SimpleAnimation>
				<About />
			</SimpleAnimation>
			{/* Services  */}
			<SimpleAnimation>
				<Services />
			</SimpleAnimation>
			{/* Why  */}
			<SimpleAnimation>
				<Why />
			</SimpleAnimation>
			{/* Events  */}
			<SimpleAnimation>
				<Events />
			</SimpleAnimation>
			{/* Testimonials  */}
			<SimpleAnimation>
				<Testimonials />
			</SimpleAnimation>
			{/* Parallax  */}
			<SimpleAnimation>
				<Parallax />
			</SimpleAnimation>
			{/* Books  */}
			<SimpleAnimation>
				<Books />
			</SimpleAnimation>
			{/* CTA  */}
			<SimpleAnimation>
				<CTA />
			</SimpleAnimation>
			{/* Blog  */}
			<SimpleAnimation>
				<Blog />
			</SimpleAnimation>
			{/* Footer  */}
			<SimpleAnimation>
				<Footer />
			</SimpleAnimation>
		</>
	);
}

export default App;
