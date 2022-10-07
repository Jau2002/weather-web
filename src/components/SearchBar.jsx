import { useState } from 'react';
import '../styles.css';

function SearchBar({ onSearch }) {
	const [city, setCity] = useState('');

	const onPush = (event) => {
		event.preventDefault();
		onSearch(city);
		setCity('');
	};

	const handleChange = (event) => setCity(event.target.value);

	return (
		<form
			onSubmit={onPush}
			className='form'
		>
			<input
				value={city}
				placeholder='Location...'
				onChange={handleChange}
				className='form__input'
			/>
			<button
				disabled={!city}
				type='submit'
				className={city ? 'form__button' : 'form__button--disabled'}
			>
				Search
			</button>
		</form>
	);
}

export default SearchBar;
