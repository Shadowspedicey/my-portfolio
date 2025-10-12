import { useEffect, useState } from "react";
import type { SkillCategory } from "./Skills";

export default function SkillCard({ skillCategory} : {skillCategory: SkillCategory }) {
	const [isActive, setIsActive] = useState(false);
	const [isShown, setIsShown] = useState(false);
	const [fadeState, setFadeState] = useState<"in-progress" | "completed">("completed");
	const [hasBeenShown, setHasBeenShown] = useState(false);
	useEffect(() => {
		const timer = setTimeout(async () => {
			setIsShown(isActive);
			await new Promise(resolve => window.setTimeout(resolve, 200));
			setFadeState("completed");
			await new Promise(resolve => window.setTimeout(resolve, 10));
			if (isActive)
				setHasBeenShown(true);
		}, 200);
		
		return () => clearTimeout(timer);
	}, [isActive]);

	async function handleClick() {
		setFadeState("in-progress");
		setIsActive(state => !state);
	}

	return(
		<div onClick={handleClick} className="min-h-60 text-white bg-primary-300 py-6 px-5 flex flex-col cursor-pointer grow-1 shrink-0 basis-[325px] hover:bg-secondary-300 hover:[&_*]:text-white hover:[&_svg]:fill-white hover:scale-105 hover:[&_.arrows>*]:-left-0 hover:[&_.arrows>*]:opacity-100">
			<svg className="h-20 fill-secondary-300 self-center mb-3" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">{skillCategory.icon}</svg>
			{ !isShown ?
				<div className={`flex flex-col justify-between flex-1 opacity-0 ${isActive && "transition-opacity"} ${!isActive && fadeState == "completed" && "opacity-100 duration-200"}`}>
					<h3 className="text-white text-2xl font-bold">{skillCategory.title}</h3>
					<p className="">{skillCategory.text}</p>
					{ Array.isArray(skillCategory.skills) && skillCategory.skills.length > 0 &&
						<div className="flex items-center gap-2 mt-auto">
							<span className="text-secondary-300 font-bold">Learn more!</span>
							<span className="arrows [&>*]:h-4 [&>*]:fill-secondary-300 flex">
								<svg className="relative -left-2 opacity-0 transition-[left opacity]" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="45.25 17 32.6 65.5"><path xmlns="http://www.w3.org/2000/svg" d="M24.42,99.16a2.84,2.84,0,0,0,2,.84,2.74,2.74,0,0,0,2-.84L75.58,52a2.81,2.81,0,0,0,0-4L28.42.83a2.83,2.83,0,1,0-4,4L69.58,50,24.42,95.16A2.82,2.82,0,0,0,24.42,99.16Z"/></svg>
								<svg className="relative -left-2 opacity-0 transition-[left opacity] delay-100" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="45.25 17 32.6 65.5"><path xmlns="http://www.w3.org/2000/svg" d="M24.42,99.16a2.84,2.84,0,0,0,2,.84,2.74,2.74,0,0,0,2-.84L75.58,52a2.81,2.81,0,0,0,0-4L28.42.83a2.83,2.83,0,1,0-4,4L69.58,50,24.42,95.16A2.82,2.82,0,0,0,24.42,99.16Z"/></svg>
								<svg className="relative -left-2 opacity-0 transition-[left opacity] delay-200" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="45.25 17 32.6 65.5"><path xmlns="http://www.w3.org/2000/svg" d="M24.42,99.16a2.84,2.84,0,0,0,2,.84,2.74,2.74,0,0,0,2-.84L75.58,52a2.81,2.81,0,0,0,0-4L28.42.83a2.83,2.83,0,1,0-4,4L69.58,50,24.42,95.16A2.82,2.82,0,0,0,24.42,99.16Z"/></svg>
							</span>
						</div>
					}
				</div>
				:
				<div className="flex-1 flex items-center">
					<div className="flex flex-wrap gap-5 font-bold">
						{
							skillCategory.skills?.map((s, i) =>
								<span className={`duration-200 ${hasBeenShown ? "transition-opacity" :"transition-all"} relative ${hasBeenShown ? "opacity-0" : "opacity-0 -left-5"} ${isActive && fadeState == "completed" && "opacity-100 left-0"}`}
								style={hasBeenShown ? {transitionDelay: "0ms"} : {transitionDelay: `${i*250}ms`}} key={i}>{s}</span>
							)
						}
					</div>
				</div>
			}
		</div>
	)
}