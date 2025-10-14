import { useEffect, useRef, useState } from "react";
import type { Project } from "./Projects";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({ project } : { project: Project}) {
	const [index, setIndex] = useState(0);
	const intervalRef = useRef<number | null>(null);
	const ANIMATION_DURATION_IN_SECONDS = 2;
	const PAUSE_BETWEEN_SLIDES_IN_SECONDS = 1;

	const [hasTriggered, setHasTriggered] = useState(false);
		const projectRef = useRef<HTMLDivElement | null>(null);
	
		useEffect(() => {
		const observer = new IntersectionObserver(
		  ([entry]) => {
			if (entry.isIntersecting && !hasTriggered) {
			  projectRef.current!.style.opacity = "100";
			  projectRef.current!.style.left = "0";
			  setHasTriggered(true);
			  observer.disconnect();
			}
		  },
		  { threshold: 0.5 }
		);
	
		if (projectRef.current) observer.observe(projectRef.current);
		return () => observer.disconnect();
	  }, [hasTriggered]);

	const startCycle = () => {
		if (intervalRef.current) return;

		nextImage();
		intervalRef.current = setInterval(() => {
			nextImage();
		}, (ANIMATION_DURATION_IN_SECONDS + PAUSE_BETWEEN_SLIDES_IN_SECONDS)*1000);
	};

	const stopCycle = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
		setIndex(0);
	};

	function nextImage() {
		setIndex(i => (i + 1) % project.images.length);
	}


	return(
		<div className="flex flex-col lg:flex-row items-center gap-10 relative opacity-0 -left-20 transition-all duration-500" ref={projectRef}>
			<div
			onMouseEnter={startCycle}
			onMouseLeave={stopCycle}
			className="relative overflow-hidden rounded-2xl shadow-lg w-full flex-1 aspect-video h-fit"
			>
				<AnimatePresence>
					<motion.img
					key={`/projects/${project.name}/${project.images[index]}`}
					src={`/projects/${project.name}/${project.images[index]}`}
					alt=""
					initial={{ opacity: 0, transform: "scale(1.0655)" }}
					animate={{ opacity: 1, transform: "scale(1" }}
					exit={{ opacity: 0 }}
					transition={{ duration: ANIMATION_DURATION_IN_SECONDS}}
					className="absolute inset-0 w-full h-full object-cover aspect-video"
					/>
				</AnimatePresence>
			</div>
			<div className="flex-1 min-w-[350px]">
				<h3 className="text-white text-3xl font-normal font-kanit">{project.name}</h3>
				<p className="text-white text-lg font-ubuntu">{project.brief}</p>
				<p className="text-white text-lg flex flex-wrap gap-x-2 my-3 pointer-events-none">
					<span className="text-secondary-300 text-xl font-bold">Skills Used:</span>
					{project.skillsUsed.map(s => <span className="mr-3" key={s}>{s}</span>)}
				</p>
				<div className="flex gap-5 text-secondary-300 font-bold text-2xl [&>a]:border-2 [&>a]:border-secondary-300 [&>a]:px-3.5 [&>a]:py-1 [&>a]:transition-all [&>a]:hover:-translate-y-1 [&>a]:hover:-translate-x-1 [&>a]:hover:shadow-[4px_4px_0_var(--color-secondary-300)] [&_svg]:fill-secondary-300 [&_svg]:h-7">
					{ project.livePreviewLink && <a href={project.livePreviewLink} target="_blank" className="flex items-center gap-2"><svg viewBox="0 0 24 21" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="🔍-Product-Icons" stroke="none" stroke-width="1"><g id="ic_fluent_live_24_regular"><path d="M5.98959236,4.92893219 C6.28248558,5.22182541 6.28248558,5.69669914 5.98959236,5.98959236 C2.67013588,9.30904884 2.67013588,14.6909512 5.98959236,18.0104076 C6.28248558,18.3033009 6.28248558,18.7781746 5.98959236,19.0710678 C5.69669914,19.363961 5.22182541,19.363961 4.92893219,19.0710678 C1.02368927,15.1658249 1.02368927,8.83417511 4.92893219,4.92893219 C5.22182541,4.63603897 5.69669914,4.63603897 5.98959236,4.92893219 Z M19.0710678,4.92893219 C22.9763107,8.83417511 22.9763107,15.1658249 19.0710678,19.0710678 C18.7781746,19.363961 18.3033009,19.363961 18.0104076,19.0710678 C17.7175144,18.7781746 17.7175144,18.3033009 18.0104076,18.0104076 C21.3298641,14.6909512 21.3298641,9.30904884 18.0104076,5.98959236 C17.7175144,5.69669914 17.7175144,5.22182541 18.0104076,4.92893219 C18.3033009,4.63603897 18.7781746,4.63603897 19.0710678,4.92893219 Z M8.81801948,7.75735931 C9.1109127,8.05025253 9.1109127,8.52512627 8.81801948,8.81801948 C7.06066017,10.5753788 7.06066017,13.4246212 8.81801948,15.1819805 C9.1109127,15.4748737 9.1109127,15.9497475 8.81801948,16.2426407 C8.52512627,16.5355339 8.05025253,16.5355339 7.75735931,16.2426407 C5.41421356,13.8994949 5.41421356,10.1005051 7.75735931,7.75735931 C8.05025253,7.46446609 8.52512627,7.46446609 8.81801948,7.75735931 Z M16.2426407,7.75735931 C18.5857864,10.1005051 18.5857864,13.8994949 16.2426407,16.2426407 C15.9497475,16.5355339 15.4748737,16.5355339 15.1819805,16.2426407 C14.8890873,15.9497475 14.8890873,15.4748737 15.1819805,15.1819805 C16.9393398,13.4246212 16.9393398,10.5753788 15.1819805,8.81801948 C14.8890873,8.52512627 14.8890873,8.05025253 15.1819805,7.75735931 C15.4748737,7.46446609 15.9497475,7.46446609 16.2426407,7.75735931 Z M12,10.5 C12.8284271,10.5 13.5,11.1715729 13.5,12 C13.5,12.8284271 12.8284271,13.5 12,13.5 C11.1715729,13.5 10.5,12.8284271 10.5,12 C10.5,11.1715729 11.1715729,10.5 12,10.5 Z" id="🎨-Color"></path></g></g></svg>Live</a> }
					{ project.githubLink && <a href={project.githubLink} target="_blank" className="flex items-center gap-2"><svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Page-1" stroke="none" stroke-width="1"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>Code</a> }
				</div>
			</div>
		</div>
	);
}