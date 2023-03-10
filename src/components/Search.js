import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Search({ setSearch, getMovies }) {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleSearch = (event) => {
		setSearch(event.target.value);
		console.log(event.target.value);
	};

	let location = useLocation();
	
	if (location.pathname === "/details") {
		return (
			<nav>
				<Link to="/">
					<button className="back-btn">Back to results</button>
				</Link>
			</nav>
		)
	} else {
		return (
		<nav>
			<form onSubmit={handleSubmit} id="search-bar">
				<input
					type="search"
					placeholder="Type to search"
					onChange={handleSearch}
				/>
				<button type="submit" onClick={getMovies}>
					<i class="fa-solid fa-magnifying-glass"></i>
				</button>
			</form>
		</nav>
	)}
}
