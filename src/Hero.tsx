import { useEffect } from "react";
import me from "./assets/me.png";

export default function Hero() {
	let initialBackgroundStyle: string | null = null;
	function handleMouseOverAboutMe(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
		const button = e.currentTarget;
		if (initialBackgroundStyle == null)
			initialBackgroundStyle = button.style.background;

		const x = e.nativeEvent.offsetX / button.offsetWidth;
		const y = e.nativeEvent.offsetY / button.offsetHeight;
		button.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, var(--color-secondary-300), var(--color-secondary-400))`;
	}
	function handleMouseLeaveAboutMe(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
		if (initialBackgroundStyle != null)
			e.currentTarget.style.background = initialBackgroundStyle;
	}

	useEffect(() => {
		const parent = document.getElementById("home");
		const children = Array.from(parent?.children ?? []) as HTMLElement[];
		children.forEach(c => {
			c.style.left = "0";
			c.style.right = "0";
			c.style.opacity = "100";
		});
	}, []);

	return(
		<section id="home" className="mt-20 flex flex-col-reverse xs:flex-row gap-10 items-end">
			<div id="hero-picture" className={`relative flex-2 -left-50 opacity-0 transition-all duration-1000`}>
				<img src={me} alt="" />
			</div>
			<div className="relative flex-1 font-bold flex flex-col text-center items-center gap-2 self-center left-50 opacity-0 transition-all duration-1000">
				<h3 className="text-2xl xs:text-md xl:text-2xl text-secondary-400">Hello, I'm</h3>
				<h1 className="text-5xl xs:text-3xl xs:text-nowrap xl:text-6xl  text-white">Ahmed Khaled</h1>
				<h2 className="text-3xl xs:text-lg xs:text-nowrap xl:text-3xl text-stone-400">Full Stack Developer</h2>
				<a
					href="#about"
					onMouseMove={handleMouseOverAboutMe}
					onMouseLeave={handleMouseLeaveAboutMe}
					className="bg-gradient-to-r from-secondary-400 to-secondary-300 transition-colors duration-300 w-fit rounded-lg p-2 lg:p-3 text-black md:text-md xl:text-xl mt-5">Learn more about me!</a>
			</div>
		</section>
	)
}