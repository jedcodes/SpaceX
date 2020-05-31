import axios from "axios";

const spacexUrl = "https://api.spacexdata.com/v3/launches";

const fetchData = async () => {
	const { data } = await axios.get(spacexUrl);

	return data;
};

export { fetchData };
