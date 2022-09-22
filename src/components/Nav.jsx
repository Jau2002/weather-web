import github from '../assets/icons8-github.svg';
import linkedIn from '../assets/icons8-linkedIn.svg';
import twitter from '../assets/icons8-twitter.svg';
import SearchBar from './SearchBar';

function Nav({ onSearch }) {
	return (
		<nav>
			<h1>Weather Web</h1>
			<div>
				<a href='https://github.com/Jau2002/weather-web'>
					<img
						src={github}
						alt='GitHub'
					/>
				</a>
				<a href='https://www.linkedin.com/in/jaumesuarez/'>
					<img
						src={linkedIn}
						alt='linkedIn'
					/>
				</a>
				<a href='https://twitter.com/JaumeSurezMoli1'>
					<img
						src={twitter}
						alt='Twitter'
					/>
				</a>
			</div>
			<SearchBar onSearch={onSearch} />
		</nav>
	);
}

export default Nav;
