import { useEffect, useRef, useState } from "react";

export default function About() {
	const [hasTriggered, setHasTriggered] = useState(false);
	const aboutRef = useRef(null);
	const textContainer = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          textContainer.current!.style.opacity = "100";
          textContainer.current!.style.left = "0";
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (aboutRef.current && textContainer.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, [hasTriggered]);

	return(
		<section id="about" className="relative text-lg py-0" ref={aboutRef}>
			<br></br>
			<h2>About</h2>
			<div className="[&>p]:my-5 [&>p]:text-white relative -left-7 opacity-0 transition-all duration-500" ref={textContainer}>
				<p className="text-white">I bridge the gap between business needs and technology, whether by joining a team to build scalable systems or helping a business digitize its operations, my mission is the same: to deliver software that empowers business growth, and scales seamlessly.</p>
				<p>I started out in programming by developing games in Unity, drawn by the thrill of building projects from scratch. That hands-on creativity soon led me to explore React for web development, where I learned how to craft engaging user interfaces. Later, I pivoted into Android native development, but I realized something important: my true interest wasn’t just in what users see, but in the deeper logic that makes applications work.</p>
				<span className="flex gap-2"><svg className="w-7 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="21-Email-Send"><path d="M29 4H3a3 3 0 0 0-3 3v4h2V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23V25a1 1 0 0 1-1 1H4v2h25a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM16 14.77 3.72 6h24.56zM0 26h2v2H0z"/><path d="M0 21h14v2H0zM16 21h2v2h-2zM0 16h2v2H0zM4 16h6v2H4z"/></g></svg> <a href="mailto:ahmed.khaled1106@gmail.com" className="text-secondary-300 font-bold hover:text-secondary-200 hover:border-b-1">ahmed.khaled1106@gmail.com</a></span>
			</div>
			<br></br>
		</section>
	)
}