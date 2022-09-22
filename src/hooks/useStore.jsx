import { useState } from 'react';
import useRequest from './useRequest';

function useStore() {
	const [cities, setCities] = useState([]);

	const onSearch = (city) => {
		useRequest(city, setCities);
	};

	const onRemove = (id) => {
		setCities((prevCities) => prevCities.filter((c) => c.id !== id));
	};

	return { cities, onSearch, onRemove };
}

export default useStore;
