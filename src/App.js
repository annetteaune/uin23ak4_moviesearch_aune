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
	/* Fikk tips om * for å returnere alt i søket, fra foreleser Akerbæk, står ikke noe om det i API-dokumentasjonen.*/
			`http://www.omdbapi.com/?s=${search}*&apikey=8397fb15&Type=movie`
		);
		
		const data = await apiresponse.json();
		//console.log("data.search;",data.Search);
		setMovieList(data.Search);
		console.log("movielist:", movieList);
	};

	useEffect(() => {
		getMovies();
	}, [search]);
	
	

	/*state for å lagre id, denne blir sendt nedover til moviecard, hvor den trigges ved klikk på knapp, og
		henter unik id fra knappeelementet */
	const [selectedID, setSelectedID] = useState("");

	//State for å lagre detaljer om valgt film
	const [movie, setMovie]=useState([])

	//sette opp nytt api-kall for å hente ut detaljer om film valgt via id 
		const getDetails = async () => {
			const apiresponse = await fetch(
				`http://www.omdbapi.com/?i=${selectedID}&apikey=8397fb15`
			);
			const data = await apiresponse.json();
			
			setMovie(data);
			//console.log(data)
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
						<MoviePage selectedID={selectedID} getDetails={getDetails} movie={movie}/>
					}
				/>
			</Route>
		</Routes>
	);
}

export default App;
