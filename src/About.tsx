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
      { threshold: 0.15 }
    );

    if (aboutRef.current && textContainer.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, [hasTriggered]);

	return(
		<section id="about" className="relative text-lg py-0 with-lighter-primary-background" ref={aboutRef}>
			<br></br>
			<h2>About</h2>
			<div className="[&>p]:my-5 [&>p]:text-white relative -left-7 opacity-0 transition-all duration-500" ref={textContainer}>
				<p className="text-white">Hey there 👋 I’m Ahmed. a Full-Stack Web Developer who loves crafting scalable systems that make an impact. I specialize in ASP.NET on the backend and React or Angular on the frontend, building solutions that are not only functional but secure, maintainable, and ready to grow.</p>
				<p>I’ve been in the programming world for about five years, and it’s been a journey of curiosity and exploration. I started with game development in Unity, drawn to the creativity of bringing ideas to life. From there, I moved through frontend and mobile (Android) development before finding my real passion, backend engineering and system design.</p>
				<p>Now, I focus on designing clean, scalable applications using .NET, C#, and modern web frameworks, such as React and Angular, while also diving into data science and machine learning as part of my Computer and Data Sciences studies. I enjoy blending both worlds: writing clean, efficient code and designing systems that can handle real-world complexity.</p>
				<p>My biggest strength lies in system design and scalability, thinking ahead about how systems grow, how data flows, and how to keep them secure and reliable. I also value humor, curiosity, humility, and perspective, which make teamwork not just productive, but enjoyable.</p>
				<p>My mission is to help startups and businesses without an online presence step confidently into the digital world, building the right tools and platforms tailored to their needs.</p>
				<p>Whether it’s joining a team or building something from scratch for a client, I approach every project with the same mindset: learn, build, and deliver excellence.</p>
				<span className="flex gap-2"><svg className="w-7 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="21-Email-Send"><path d="M29 4H3a3 3 0 0 0-3 3v4h2V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23V25a1 1 0 0 1-1 1H4v2h25a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zM16 14.77 3.72 6h24.56zM0 26h2v2H0z"/><path d="M0 21h14v2H0zM16 21h2v2h-2zM0 16h2v2H0zM4 16h6v2H4z"/></g></svg> <a href="mailto:ahmed.khaled1106@gmail.com" className="text-secondary-300 font-bold hover:text-secondary-200 hover:border-b-1">ahmed.khaled1106@gmail.com</a></span>
			</div>
			<br></br>
		</section>
	)
}