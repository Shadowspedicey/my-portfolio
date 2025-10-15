import { useEffect, useRef } from "react";

export default function Navbar({centered = false} : {centered?: boolean}) {
	const linksRef = useRef<HTMLUListElement | null>(null);

	useEffect(() => {
		if (!linksRef.current)
			return;

		function handleClick(e: MouseEvent, a: HTMLAnchorElement) {
			e.preventDefault();
			document.getElementById(a.hash.substring(1))?.scrollIntoView({ behavior: "smooth" });
		};

		const anchors = Array.from(linksRef.current.children).map(li => li.children[0] as HTMLAnchorElement);
		anchors.forEach(a => a.addEventListener("click", e => handleClick(e, a)));

		return () => anchors.forEach(a => a.removeEventListener("click", e => handleClick(e, a)));
	}, [])

	return(
		<nav>
			<ul className={`flex ${centered && "!justify-center"} justify-center md:justify-end p-5 gap-10 text-white font-bold text-sm`} ref={linksRef}>
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	)
}