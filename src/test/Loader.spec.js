import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Loader from '../components/Loader';

describe('<Loader />', () => {
	beforeEach(() => {
		render(<Loader />);
	});

	afterEach(() => jest.clearAllMocks);

	it('Description preloader', () => {
		const img = screen.getByAltText(/preloader/i);
		expect(img).toBeInTheDocument();
	});

	it('Tip one search', () => {
		const li = screen.getByText(
			/Make sure that all words are spelled correctly/i
		);
		expect(li).toBeInTheDocument();
	});

	it('Tip two search', () => {
		const li = screen.getByText(/no location matches your search/i);
		expect(li).toBeInTheDocument();
	});

	it('Title recommendation', () => {
		const ul = screen.getByText(/Suggestions/i);
		expect(ul).toBeInTheDocument();
	});
});
