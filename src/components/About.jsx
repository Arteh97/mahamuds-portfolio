import React from "react";
import profilePic from "../profile.png";
import styles from "./About.module.css";

const About = () => {
	return (
		<section id="about">
			<div className={styles.content}>
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
						Hi, I'm Mahamud.
						<br />
						<br />
						<img src={profilePic} />
					</h1>
					<br />
					<p className="mb-8 leading-relaxed">
						Hello, my name is Mahamud Arteh, and I am a recently graduated
						full-stack engineer. I can handle all the work of databases,
						servers, systems, and engineering. Depending on the project I am
						working on, I can delve into the technologies and frameworks
						required to generate a well-tested and successful product.
						<br />
						<br />
						My Education, Abilities, and Projects: <br />
						<br />I have just completed a 14-week intensive Bootcamp at the
						northcoders Manchester Hub, a branch of a company that specialises
						in providing people with the skills to start a career in software
						engineering. Throughout the Bootcamp, I learned:
						<br />
						<br /> - The fundamentals of JavaScript/TypeScript | HTML | CSS.
						<br />
						<br /> - Back-End fundamentals: Test-Driven-Development |
						Pair-Programming | MVC principles. <br />
						<br />- Database Management: PostgreSQL | MongoDB | Database
						Seeding, Testing, and Deployment.
						<br />
						<br /> - Front-End principles: ReactJS | the Document Object Model |
						App Design & Planning | Optimistic Rendering | Hosting.
						<br />
						<br /> - DevOps: Continuous Deployment | Continuous Integration |
						Workflows(GitHub).
						<br />
						<br /> - Mobile App Development: React-Native/React-Native Maps,
						iPhone Simulator (XCode).
						<br />
						<br /> I learned a lot about software development while at
						northcoders, but the most significant thing I took from the
						Bootcamp, was the importance of collaborating with others.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
