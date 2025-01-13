import axios from "axios";
import React from "react";

import { Space, Spin } from "antd";

const baseURL = "https://meowfacts.herokuapp.com/?lang=por-br";

export const NyanFact = ({ counter }) => {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
			setData(response.data.data[0]);
		});
	}, [counter]);

	return (
		<div className="text-container">
			{!data && (
				<Space direction="vertical" align="center">
					<Spin size="large" />
					<span>🐱🐱🐱 Encontrando fatos...</span>
				</Space>
			)}
			{data && <span className="nyan-text">{data}</span>}
		</div>
	);
};
