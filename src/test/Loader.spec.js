import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Loader from '../components/Loader';

describe('<Loader />', () => {
	beforeEach(() => {
		render(<Loader />);
	});

	it('It should show preloader', () => {
		const img = screen.getByAltText(/preloader/i);
		expect(img).toBeInTheDocument();
	});

	it('Should tip to improve one search', () => {
		const li = screen.getByText(
			/Make sure that all words are spelled correctly/i
		);
		expect(li).toBeInTheDocument();
	});

	it('Should tip to improve two search', () => {
		const li = screen.getByText(/no location matches your search/i);
		expect(li).toBeInTheDocument();
	});

	it('Should to improve Title recommendation', () => {
		const ul = screen.getByText(/Suggestions/i);
		expect(ul).toBeInTheDocument();
	});
});
