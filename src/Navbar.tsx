export default function Navbar() {
	return(
		<nav>
			<ul className="flex justify-center md:justify-end p-5 gap-10 text-white font-bold text-sm">
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="">Contact</a></li>
			</ul>
		</nav>
	)
}