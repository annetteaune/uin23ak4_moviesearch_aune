import Search from "./Search";
import Searchresults from "./Searchresults";

export default function Layout({ movieList, setSearch, getMovies }) {
	return (
		<>
			<header>
				<h1>Movie Database</h1>
				<Search setSearch={setSearch} getMovies={getMovies}/>
			</header>
			<main>
				<Searchresults movieList={movieList} />
			</main>
			<footer>
				<span>Footer</span>
			</footer>
		</>
	);
}
