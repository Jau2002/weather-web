import preloader from '../assets/public/preloader.gif';
import '../styles.css';

function Loader() {
	return (
		<footer className='footer'>
			<li className='footer__li--title'>Suggestions</li>
			<li className='footer__li'>no location matches your search</li>
			<li className='footer__li'>
				Make sure that all words are spelled correctly
			</li>
			<img
				src={preloader}
				alt='preloader'
				className='footer__img'
			/>
		</footer>
	);
}

export default Loader;
