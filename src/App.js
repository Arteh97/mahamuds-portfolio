import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";
import logo from "./logo.svg";
// import Testimonials from ',.components/Testimonials';

import "./App.css";

function App() {
	return (
		<main className="text-gray-400 bg-gray-900 body-font">
			<img src={logo} className="App-logo" />
			{/* <NavBar /> */}
			<About />
			{/* <Projects /> */}
			{/* <Skills /> */}
			{/* <Testimonials /> */}
		</main>
	);
}

export default App;
