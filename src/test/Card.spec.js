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

	const mockHandler = jest.fn(() =>
		Promise.resolve({ json: () => Promise.resolve(mockCity) })
	);

	beforeEach(() =>
		render(
			<Card
				countryAbbreviation={mockCity.countryAbbreviation}
				stateRecognized={mockCity.stateRecognized}
				imageMeteorology={mockCity.imageMeteorology}
				description={mockCity.description}
				onRemove={mockHandler}
			/>
		)
	);

	afterEach(() => jest.clearAllMocks);

	it('Should clicking the button calls event handler once', () => {
		const button = screen.getByRole('button', { name: '✘' });

		fireEvent.click(button);
		expect(mockHandler).toHaveBeenCalledTimes(1);
	});

	describe('Immovable query', () => {
		it('Should have a input value', () => {
			const input = screen.getByText(/✘/);
			expect(input).toBeInTheDocument();
		});

		it('Should have a split temperature', () => {
			const span = screen.getByText('/');
			expect(span).toBeInTheDocument();
		});

		it('Should contain img atmosphere', () => {
			const img = screen.getByAltText(/Pressure Atmosphere/i);
			expect(img).toBeInTheDocument();
		});

		it('Should Contain img humidity', () => {
			const img = screen.getByAltText(/Humidity/i);
			expect(img).toBeInTheDocument();
		});

		it('Should contain img wind speed', () => {
			const img = screen.getByAltText(/Wind Speed/i);
			expect(img).toBeInTheDocument();
		});
	});

	describe('Data fetch cities', () => {
		it('Should have a Country abbreviation', async () => {
			const span = await screen.findByText(mockCity.countryAbbreviation);
			expect(span).toBeInTheDocument();
		});

		it('Should display name city', async () => {
			const h2 = await screen.findByText(mockCity.stateRecognized);
			expect(h2).toBeInTheDocument();
		});

		it('Should correctly render your display image', async () => {
			const alt = await screen.findByAltText(mockCity.description);
			expect(alt).toHaveAttribute(
				'src',
				'https://openweathermap.org/img/wn/01n@2x.png'
			);
		});
	});
});
