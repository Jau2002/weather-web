import Card from './components/Card';
import Loader from './components/Loader';
import Nav from './components/Nav';
import useStore from './hooks/useStore';
import './styles.css';

function App() {
	const { cities, onSearch, onRemove } = useStore();

	return (
		<main>
			<Nav onSearch={onSearch} />
			{cities.length ? (
				<article className='article'>
					{cities.map((c) => (
						<Card
							key={c.id}
							countryAbbreviation={c.countryAbbreviation}
							stateRecognized={c.stateRecognized}
							imageMeteorology={c.imageMeteorology}
							description={c.description}
							temperatureMinimum={c.temperatureMinimum}
							temperatureMaximum={c.temperatureMaximum}
							pressureAtmosphere={c.pressureAtmosphere}
							humidity={c.humidity}
							windSpeed={c.windSpeed}
							onRemove={() => onRemove(c.id)}
						/>
					))}
				</article>
			) : (
				<Loader />
			)}
		</main>
	);
}

export default App;
