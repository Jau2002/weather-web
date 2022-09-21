import Card from './components/Card';
import SearchBar from './components/SearchBar';
import Xer from './components/Xer';
import useStore from './hooks/useStore';

function App() {
	const { cities, onSearch } = useStore();

	return (
		<main>
			<SearchBar onSearch={onSearch} />
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
						/>
					))
				) : (
					<Xer />
				)}
			</section>
		</main>
	);
}

export default App;
