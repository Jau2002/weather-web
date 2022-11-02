import dump from '../assets/images/dump.png';
import pressure from '../assets/images/pressure.png';
import windSpeed from '../assets/images/wind.png';
import '../styles.css';

function Card({ onRemove, ...props }) {
	return (
		<section className='section'>
			<div className='div-top'>
				<span className='div-top__span'>{props.countryAbbreviation}</span>
				<input
					type='button'
					value='✘'
					onClick={onRemove}
					className='div-top__input'
				/>
			</div>
			<div className='div-mid'>
				<h2 className='div-mid__h2'>{props.stateRecognized}</h2>
				<img
					src={`https://openweathermap.org/img/wn/${props.imageMeteorology}@2x.png`}
					alt={props.description}
					className='div-mid__img'
				/>
				<div className='div-jgl'>
					<p className='div-jgl__p'>{props.temperatureMinimum}°</p>
					<span className='div-jgl__span'> / </span>
					<p className='div-jgl__p'>{props.temperatureMaximum}°</p>
				</div>
			</div>
			<div className='div-adc'>
				<div className='div-bot'>
					<img
						src={pressure}
						alt='Pressure Atmosphere'
						className='div-bot__img'
					/>
					<h3 className='div-bot__h3'>{props.pressureAtmosphere} hPa</h3>
				</div>
				<div className='div-bot'>
					<img
						src={dump}
						alt='Humidity'
						className='div-bot__img'
					/>
					<h3 className='div-bot__h3'>{props.humidity} %</h3>
				</div>
				<div className='div-bot'>
					<img
						src={windSpeed}
						alt='Wind Speed'
						className='div-bot__img'
					/>
					<h3 className='div-bot__h3'>{props.windSpeed} kts</h3>
				</div>
			</div>
		</section>
	);
}

export default Card;
