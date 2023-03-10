import { Outlet } from "react-router-dom";
import Search from "./Search";


export default function Layout({ movieList, setSearch, getMovies, search }) {
	
	return (
		<>
			<header>
				<h1>
					<i className="fa-solid fa-film"></i>Movie Database
				</h1>

				<Search setSearch={setSearch} getMovies={getMovies} search={search} />
			</header>
			<main>
				<Outlet />
			</main>
			<footer>
				<span>Icons by FontAwesome - API by omdbapi.com</span>
			</footer>
		</>
	);
}
