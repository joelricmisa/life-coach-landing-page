import { navLinks } from "../libs/constants";
import Button from "../components/Button";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { logo } from "../assets/images";

const Header = () => {
	const [show, setShow] = useState(false);
	return (
		<header className={`${show ? "h-screen fixed inset-0 z-30" : "h-auto"} bg-neutral font-publicSans font-medium `}>
			<div
				className={`${
					show ? "h-full" : "h-[120px] overflow-hidden "
				} flex gap-10  w-11/12 mx-auto lg:items-center  py-10  flex-col lg:flex-row overflow-hidden`}>
				{/* Brand Logo  */}
				<a
					href=""
					className="flex items-center gap-2 text-xl font-semibold">
					<img
						src={logo}
						className="mb-1"
					/>
					LifeCoach
				</a>
				{/* Navs  */}
				<nav
					className={`${
						show ? "h-auto" : "h-0 w-0  overflow-hidden"
					} flex gap-4 justify-between flex-1 flex-col lg:h-auto lg:items-center lg:flex-row transition-all`}>
					<ul className={`flex gap-4 flex-col lg:flex-row `}>
						{navLinks.map((link, index) => (
							<li key={index}>
								<a
									href={link.href}
									className="inline-block px-5 py-3 hover:bg-primary/20 w-full rounded-md">
									{link.name}
								</a>
							</li>
						))}
					</ul>
					<Button>Get Started</Button>
				</nav>

				<button
					onClick={() => setShow(!show)}
					className="lg:hidden block">
					<FaBars className="text-4xl fill-primary border border-primary/50 rounded-md cursor-pointer p-1 absolute top-[6%] right-[5%] hover:scale-105 active:scale-100 hover:bg-primary/10" />
				</button>
			</div>
		</header>
	);
};

export default Header;
