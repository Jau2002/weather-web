import { useState } from 'react';

function SearchBar({ onSearch }) {
	const [city, setCity] = useState('');

	const onPush = (event) => {
		event.preventDefault();
		onSearch(city);
		setCity('');
	};

	const handleChange = (event) => setCity(event.target.value);

	return (
		<form onSubmit={onPush}>
			<input
				value={city}
				placeholder='Location...'
				onChange={handleChange}
			/>
			<button
				disabled={!city}
				type='submit'
			>
				Search
			</button>
		</form>
	);
}

export default SearchBar;
