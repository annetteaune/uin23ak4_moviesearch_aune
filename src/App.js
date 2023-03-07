
import "./css/main.css";
import Layout from './components/Layout';
import { useEffect, useState } from "react";


function App() {
	//kilde oppsett: https://lms.webtricks.blog/kurs/uin/asynkron-databehandling-i-react/recipe-api-oppsett
	const [movieList, setMovieList] = useState([]);
	const [search, setSearch] = useState("clockwork");

	const getMovies = async () => {
		const response = await fetch(
			`http://www.omdbapi.com/?s=${search}&apikey=8397fb15&Type=movie`
		);
		const data = await response.json();
		console.log(data.Search);
		setMovieList(data.Search);
	};
	useEffect(() => {
		getMovies();
	}, []);

	return <Layout movieList={movieList}/>;
}

export default App;
