import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('<SearchBar />', () => {
	const mockSearch = jest.fn();

	beforeEach(() => {
		render(<SearchBar onSearch={mockSearch} />);
	});

	afterEach(() => jest.clearAllMocks);

	it('It should have a search input', () => {
		const input = screen.getByPlaceholderText(/Location.../i);
		expect(input).toBeInTheDocument();
	});

	it('Should Search a city', async () => {
		const input = screen.getByPlaceholderText(/Location.../i);
		const button = screen.getByRole('button', { name: /Search/i });

		fireEvent.change(input, { target: { value: 'Barcelona' } });
		fireEvent.click(button);
	});

	it('Should clicked the button call event', () => {
		const button = screen.getByRole('button', { name: /Search/i });

		fireEvent.click(button);
		expect(mockSearch).toHaveBeenCalledTimes(1);
	});
});
