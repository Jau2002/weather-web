import { useState } from 'react';
import useRequest from './useRequest';

function useStore() {
	const [cities, setCities] = useState([]);

	const onSearch = (city) => {
		useRequest(city, setCities);
	};

	return { cities, onSearch };
}

export default useStore;
