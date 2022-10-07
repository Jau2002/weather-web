import preloader from '../assets/public/preloader.gif';

function Loader() {
	return (
		<footer>
			<ul>
				{' '}
				Suggestions
				<li>no location matches your search</li>
				<li>Make sure that all words are spelled correctly</li>
				<img
					src={preloader}
					alt='preloader'
				/>
			</ul>
		</footer>
	);
}

export default Loader;
