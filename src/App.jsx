import Card from './components/Card';
import Loader from './components/Loader';
import Nav from './components/Nav';
import useStore from './hooks/useStore';

function App() {
	const { cities, onSearch, onRemove } = useStore();

	return (
		<main>
			<Nav onSearch={onSearch} />
			<section>
				{cities.length ? (
					cities.map((c) => (
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
					))
				) : (
					<Loader />
				)}
			</section>
		</main>
	);
}

export default App;
