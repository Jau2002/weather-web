import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import Card from '../components/Card';

describe('<Card />', () => {
	const mockCity = {
		id: 3128760,
		countryAbbreviation: 'ES',
		description: 'clear sky',
		imageMeteorology: '01n',
		stateRecognized: 'Barcelona',
	};
	let mockHandler;

	beforeEach(() => {
		mockHandler = jest.fn();
		render(
			<Card
				countryAbbreviation={mockCity.countryAbbreviation}
				stateRecognized={mockCity.stateRecognized}
				imageMeteorology={mockCity.imageMeteorology}
				description={mockCity.description}
				onRemove={mockHandler}
			/>
		);
	});

	afterEach(() => jest.clearAllMocks);

	it('clicking the button calls event handler once', () => {
		const button = screen.getByRole('button', { name: '✘' });
		fireEvent.click(button);
		expect(mockHandler).toHaveBeenCalledTimes(1);
	});

	describe('Immovable query', () => {
		it('Input value', () => {
			const input = screen.getByText(/✘/);
			expect(input).toBeInTheDocument();
		});

		it('Split temperature', () => {
			const span = screen.getByText('/');
			expect(span).toBeInTheDocument();
		});

		it('Alt pressure atmosphere', () => {
			const img = screen.getByAltText(/Pressure Atmosphere/i);
			expect(img).toBeInTheDocument();
		});

		it('Alt humidity', () => {
			const img = screen.getByAltText(/Humidity/i);
			expect(img).toBeInTheDocument();
		});

		it('Alt wind speed', () => {
			const img = screen.getByAltText(/Wind Speed/i);
			expect(img).toBeInTheDocument();
		});
	});

	describe('Data cities', () => {
		it('Country abbreviation', async () => {
			const span = await screen.findByText(/ES/);
			expect(span).toBeInTheDocument();
		});

		it('Name city', async () => {
			const h2 = await screen.findByText(/Barcelona/);
			expect(h2).toBeInTheDocument();
		});

		it('description meteorology', async () => {
			const alt = await screen.findByAltText(/clear sky/);
			expect(alt).toBeInTheDocument();
		});
	});
});
