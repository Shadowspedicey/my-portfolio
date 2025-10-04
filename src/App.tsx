import Navbar from "./Navbar"

function App() {

	return (
		<>
			<div className="w-[50%] h-50 bg-white/5 blur-[75px] rounded-full absolute top-0 right-0 transform translate-x-1/6 -translate-y-1/3 md:w-[40%] lg:h-75"></div>
			<main className="md:w-1/2 m-auto">
				<Navbar />
			</main>
		</>
	)
}

export default App
