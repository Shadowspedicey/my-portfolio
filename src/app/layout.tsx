import '../index.css'
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Ahmed Khaled | Home",
  	description: "I'm Ahmed Khaled — a full-stack developer skilled in ASP.NET Core, React, and modern web tech. I build fast, secure, and scalable web apps that bring ideas to life.",
	keywords: "Ahmed Khaled, Full-Stack Developer, Software Engineer, ASP.NET Core, React, Web Developer Portfolio, Backend Developer, Frontend Developer, Egypt",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
	<html lang="en" className="overflow-x-hidden scroll-smooth">
		<body className="bg-primary-500 relative overflow-x-hidden h-[100vh]">
			<div id="root">{children}</div>
			<script type="module" src="/src/main.tsx"></script>
		</body>
	</html>
  )
}