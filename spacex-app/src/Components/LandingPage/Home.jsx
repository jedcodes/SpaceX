import React, { useEffect, useState } from "react";
import { fetchData } from "../API";

const Home = () => {
	const [ rockets, setRockets ] = useState([]);
	useEffect(() => {
		const fetchLaunches = async () => {
			const launches = await fetchData();

			console.log(launches);
			setRockets(launches);
		};
		fetchLaunches();
	}, []);
	return <div />;
};

export default Home;
