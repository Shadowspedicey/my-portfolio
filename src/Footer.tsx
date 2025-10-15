import Navbar from "./Navbar";

export default function Footer() {
	return(
		<footer className="with-lighter-primary-background py-2">
			<div className="md:scale-110"><Navbar centered /></div>
			<div className="text-white text-center text-md font-kanit">&copy; 2025 Ahmed Khaled. All Rights Reserved.</div>
		</footer>
	);
}