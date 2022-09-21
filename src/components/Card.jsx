import dump from '../assets/dump.png';
import pressure from '../assets/pressure.png';
import windSpeed from '../assets/wind.png';

function Card({ ...props }) {
	return (
		<article>
			<div>
				<span>{props.countryAbbreviation}</span>
				<input
					type='button'
					value='✘'
				/>
			</div>
			<div>
				<h2>{props.stateRecognized}</h2>
				<img
					src={`https://openweathermap.org/img/wn/${props.imageMeteorology}@2x.png`}
					alt={props.description}
				/>
				<div>
					<p>{props.temperatureMinimum}°</p>
					<span> / </span>
					<p>{props.temperatureMaximum}°</p>
				</div>
			</div>
			<div>
				<div>
					<img
						src={pressure}
						alt='Pressure Atmosphere'
					/>
					<h3>{props.pressureAtmosphere} hPa</h3>
				</div>
				<div>
					<img
						src={dump}
						alt='Humidity'
					/>
					<h3>{props.humidity} %</h3>
				</div>
				<div>
					<img
						src={windSpeed}
						alt='Wind Speed'
					/>
					<h3>{props.windSpeed} kts</h3>
				</div>
			</div>
		</article>
	);
}

export default Card;
