import { TypeAnimation } from "react-type-animation";

export default function CTO() {
	return(
		<section id="contact">
			<h2>
				<TypeAnimation
					sequence={[
						"Need a Backend or Full-Stack Developer?",
						1500,
						"Need a landing page that actually converts?",
						1500,
						"Need a scalable web solution tailored to your business?",
						1500,
						"Need a fun idea turned into a website?",
						1500,
						"Need a reliable dev for your startup or team?",
						750
					]}
					className=""
					speed={50}
					deletionSpeed={75}
					repeat={Infinity}
				/>
			</h2>
			<p className="text-white text-center font-fjalla text-3xl/12 tracking-wider">I’m ready to turn ideas and business needs into clean, scalable code.<br></br>Open to freelance projects and developer roles. <a href="mailto:ahmed.khaled1106@gmail.com" className="text-secondary-300 font-bold hover:border-secondary-300 hover:border-b-2">Let's connect.</a></p>
			<div className="h-10 flex justify-center mt-10 gap-5 fill-white [&>a]:hover:fill-secondary-300">
				<a href="https://www.linkedin.com/in/ahmedkhaled1106" target="_blank"><svg height="100%" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><g><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"/><path className="fill-primary-400" d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"/></g></svg></a>
				<a href="https://github.com/Shadowspedicey" target="_blank"><svg viewBox="0 0 20 20" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" strokeWidth="1"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg></a>
				<a href=""><svg height="100%" viewBox="0 -2.5 20 19" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="Page-1" stroke="none" strokeWidth="1"><g id="Dribbble-Light-Preview" transform="translate(-340.000000, -922.000000)"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M294,774.474 L284,765.649 L284,777 L304,777 L304,765.649 L294,774.474 Z M294.001,771.812 L284,762.981 L284,762 L304,762 L304,762.981 L294.001,771.812Z" id="email-[#1572]"></path></g></g></g></svg></a>
			</div>
		</section>
	);
}