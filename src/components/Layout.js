import { Outlet } from "react-router-dom";
import Search from "./Search";
import Searchresults from "./Searchresults";
import { withRouter } from "react-router-dom";  

export default function Layout({ movieList, setSearch, getMovies }) {
	
	return (
		<>
			<header>
				<h1>
					<i className="fa-solid fa-film"></i>Movie Database
				</h1>

				<Search setSearch={setSearch} getMovies={getMovies} />
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
