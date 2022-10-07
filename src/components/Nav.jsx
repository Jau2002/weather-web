import github from '../assets/images/icons8-github.svg';
import linkedIn from '../assets/images/icons8-linkedIn.svg';
import twitter from '../assets/images/icons8-twitter.svg';
import '../styles.css';
import SearchBar from './SearchBar';

function Nav({ onSearch }) {
	return (
		<nav className='nav'>
			<div className='nav__div'>
				<a
					href='https://github.com/Jau2002/weather-web'
					target='_blank'
					rel='noreferrer'
				>
					<img
						src={github}
						alt='GitHub'
						className='nav__img'
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/jaumesuarez'
					target='_blank'
					rel='noreferrer'
				>
					<img
						src={linkedIn}
						alt='linkedIn'
						className='nav__img'
					/>
				</a>
				<a
					href='https://twitter.com/JaumeSurezMoli1'
					target='_blank'
					rel='noreferrer'
				>
					<img
						src={twitter}
						alt='Twitter'
						className='nav__img'
					/>
				</a>
			</div>
			<h1 className='nav__h1'>Weather Web</h1>
			<SearchBar onSearch={onSearch} />
		</nav>
	);
}

export default Nav;
