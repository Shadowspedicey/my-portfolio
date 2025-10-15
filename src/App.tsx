import About from "./About"
import CTO from "./CTO"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Skills from "./Skills"

function App() {

	return (
		<>
			<div className="w-[50%] h-50 bg-white/5 blur-[75px] rounded-full absolute top-0 right-0 transform translate-x-1/6 -translate-y-1/3 md:w-[40%] lg:h-75 pointer-events-none"></div>
			<main className="px-5 md:px-0 md:w-2/3 xl:w-1/2 m-auto">
				<Navbar />
				<Hero />
				<About />
				<Skills />
				<Projects />
				<CTO />
				<Footer />
			</main>
		</>
	)
}

export default App
