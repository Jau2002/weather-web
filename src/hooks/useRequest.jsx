async function useRequest(city, setCities) {
	const API_KEY =
		process.env.REACT_APP_API_KEY || 'dcb12ced1dcdf8b0d4d016192c4c5673';

	const resolve = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
	);

	const response = await resolve.json();

	if (response) {
		const data = {
			id: response.id,
			countryAbbreviation: response.sys.country,
			stateRecognized: response.name,
			imageMeteorology: response.weather[0].icon,
			description: response.weather[0].description,
			temperatureMinimum: Math.round(response.main.temp_min),
			temperatureMaximum: Math.round(response.main.temp_max),
			pressureAtmosphere: response.main.pressure,
			humidity: response.main.humidity,
			windSpeed: response.wind.speed,
		};

		setCities((prevCities) =>
			prevCities.some((c) => c.id === data.id)
				? [...prevCities]
				: [data, ...prevCities]
		);
	}
}

export default useRequest;
