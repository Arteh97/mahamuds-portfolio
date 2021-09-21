import React from 'react';
import { CodeIcon } from '@heroicons/react/solid';

const Projects = () => {
	return (
		<section>
			<div>
				<div>
					<h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
						<br />
						Apps I've Built
					</h1>
					<CodeIcon className={{ flex: 1, height: 10 }} />
					<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
						I learned a lot about software development while at northcoders, but
						the most significant thing I took from the Bootcamp, was the
						importance of collaborating with others. The first project I
						completed was the back-end of a web app built with
						PostgreSQL/JavaScript.I enjoyed working with databases very much,
						and I hope to continue to work on the back-end of applications. I
						tested the database functionality by ensuring that each HTTP request
						sent to it was handled promptly, without any internal error. Heroku
						was the platform that I used to host the database, and I implemented
						CI/CD (continuous integration/deployment) so that any changes that
						passed the testing phase, were then deployed. After I had set up the
						back-end of the web application earlier in the Bootcamp, my next
						task was to create the front-end that would be able to access the
						data that it contained. The first thing I did was enable
						cross-origin resource sharing, which allowed a server other than my
						local host to access the database. Then, I designed the basic
						structure of the web application that I wanted to build, using
						Excalidraw. Then, using HTML, CSS, and ReactJS, I created a
						responsive multi-page web application that mocked a review website.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Projects;
