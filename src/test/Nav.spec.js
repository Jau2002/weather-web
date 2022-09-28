import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav';

describe('<Nav />', () => {
	beforeEach(() => {
		render(<Nav />);
	});

	it('should show app title', () => {
		const title = screen.getByRole('heading', { level: 1 });
		expect(title).toBeInTheDocument();
	});

	it('should aria attributes "target" and "rel"', () => {
		const socialNetworks = screen.getAllByRole('link');

		for (const social of socialNetworks) {
			expect(social).toHaveAttribute('target', '_blank');
			expect(social).toHaveAttribute('rel', 'noreferrer');
		}
	});

	it('Should the image have a "Twitter" string', () => {
		const img = screen.getByAltText(/Twitter/i);
		expect(img).toBeInTheDocument();
	});

	it('Should the image have a "linkedIn" string', () => {
		const img = screen.getByAltText(/linkedIn/i);
		expect(img).toBeInTheDocument();
	});

	it('Should the image have a "GitHub" string', () => {
		const img = screen.getByAltText(/GitHub/i);
		expect(img).toBeInTheDocument();
	});
});
