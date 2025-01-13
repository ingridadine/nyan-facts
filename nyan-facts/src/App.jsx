import { Button } from "antd";
import React from "react";
import "./App.css";
import { NyanFact } from "./components/NyanFact";
import { NyanImg } from "./components/NyanImg";

export const App = () => {
	const [clickCounter, setClickCounter] = React.useState(0);

	return (
		<div className="app-container">
			<NyanImg counter={clickCounter} />
			<NyanFact counter={clickCounter} />
			<Button
				className="update-btn"
				onClick={() => {
					setClickCounter(clickCounter + 1);
				}}
			>
				Mais fatos
			</Button>
		</div>
	);
};
