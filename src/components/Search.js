import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Search({ setSearch, getMovies, search }) {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleSearch = (event) => {
		const inputValue = event.target.value;
		/* Må her replace mellomrom med -, siden søkefunksjonen kræsjer ved mellomrom i søket. */
		const replacedValue = inputValue.replaceAll(" ", "-");
		if (replacedValue.length >= 3) {
			setSearch(replacedValue);
			document.getElementById("alert").innerHTML = "";
		} else {
			document.getElementById("alert").innerHTML =
				"Enter at least 3 characters.";
		}
	};

	const handleClick = () => {
		if (search.length >= 3) {
			getMovies();
			document.getElementById("alert").innerHTML = "";
		} else {
			document.getElementById("alert").innerHTML =
				"Enter at least 3 characters.";
		}
	};

	/* Bytte ut søkebar med tilbake-knapp på MoviePage,
		kilde: https://reactrouter.com/en/main/hooks/use-location */
	let location = useLocation();

	if (location.pathname === "/details") {
		return (
			<nav>
				<Link to="/">
					<button className="back-btn">
						<i class="fa-solid fa-chevron-left"></i> Back to results
					</button>
				</Link>
			</nav>
		);
	} else {
		return (
			<>
				<nav>
					<form onSubmit={handleSubmit} id="search-bar">
						<input
							type="search"
							aria-label="search"
							placeholder="Type to search"
							onChange={handleSearch}
						/>
						<button
							type="submit"
							aria-label="search button"
							onClick={handleClick}
						>
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</form>
				</nav>
				<span id="alert"></span>{" "}
			</>
		);
	}
}
