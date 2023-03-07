import Search from "./Search";
import Searchresults from "./Searchresults";

export default function Layout({ movieList }) {
	return (
		<>
			<header>
				<h1>Movie Database</h1>
				<Search />
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
