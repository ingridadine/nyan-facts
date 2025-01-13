import { Button } from "antd";
import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NyanFact } from "./components/NyanFact";
import { NyanImg } from "./components/NyanImg";

export const App = () => {
	const [clickCounter, setClickCounter] = React.useState(0);

	return (
		<div className="app-container">
			<Header />
			<NyanImg counter={clickCounter} />
			<NyanFact counter={clickCounter} />
			<Button
				//className="update-btn"
				color="pink"
				variant="solid"
				onClick={() => {
					setClickCounter(clickCounter + 1);
				}}
			>
				Mais fatos
			</Button>
			<Footer />
		</div>
	);
};
