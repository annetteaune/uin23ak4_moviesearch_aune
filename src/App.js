import "./css/main.css";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MoviePage from "./components/MoviePage";
import Searchresults from "./components/Searchresults";

function App() {
	//kilde oppsett: https://lms.webtricks.blog/kurs/uin/asynkron-databehandling-i-react/recipe-api-oppsett

	//State for å lagre hentede titler
	const [movieList, setMovieList] = useState([]);
	//State for søkefrase
	const [search, setSearch] = useState("james bond");

	const getMovies = async () => {
		const apiresponse = await fetch(
			/* Fikk tips om * for å returnere alt i søket fra foreleser Akerbæk */
			`http://www.omdbapi.com/?s=${search}*&apikey=8397fb15&Type=movie`
		);

		const data = await apiresponse.json();
		setMovieList(data.Search);
	};

	useEffect(() => {
		getMovies();
		/*Fikk en warning om missing dependency, fant workaround;
			https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
			*/
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);

	/*state for å lagre id, denne blir sendt nedover til moviecard, hvor den trigges ved klikk på knapp, og
		henter unik id fra knappeelementet */
	const [selectedID, setSelectedID] = useState("");

	//State for å lagre detaljer om valgt film
	const [movie, setMovie] = useState([]);

	//setter opp nytt api-kall for å hente ut detaljer om film valgt via id
	const getDetails = async () => {
		const apiresponse = await fetch(
			`http://www.omdbapi.com/?i=${selectedID}&apikey=8397fb15`
		);
		const data = await apiresponse.json();
		setMovie(data);
	};

	return (
		<Routes>
			<Route
				path="/"
				element={
					<Layout
						movieList={movieList}
						setSearch={setSearch}
						getMovies={getMovies}
						search={search}
					/>
				}
			>
				<Route
					index
					element={
						<Searchresults
							movieList={movieList}
							setSearch={setSearch}
							getMovies={getMovies}
							setSelectedID={setSelectedID}
						/>
					}
				/>

				<Route
					path="/details"
					element={
						<MoviePage
							selectedID={selectedID}
							getDetails={getDetails}
							movie={movie}
						/>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
