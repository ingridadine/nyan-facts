import axios from "axios";
import React from "react";

import { Space, Spin } from "antd";

const baseURL = "https://api.thecatapi.com/v1/images/search";

export const NyanImg = ({ counter }) => {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {
		setData(null);
		axios.get(baseURL).then((response) => {
			setData(response.data[0]);
		});
	}, [counter]);

	return (
		<div className="img-container">
			{!data && (
				<Space direction="vertical" align="center">
					<Spin size="large" />
					<span>Encontrando nyan nyans 🐱✨</span>
				</Space>
			)}
			{data && <img className="nyan-img" src={data.url} alt="" />}
		</div>
	);
};
