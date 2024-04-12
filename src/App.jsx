import "./components/Header";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./sass/index.scss";

import React from 'react';

const App = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Hero />
			</main>
		</>

	)
}

export default App