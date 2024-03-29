import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Search({ setSearch, getMovies, search }) {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleSearch = (event) => {
		const inputValue = event.target.value;
		/* Må her replace mellomrom med -, siden søkefunksjonen kræsjet ved mellomrom i søket. */
		const crashProofValue = inputValue.replaceAll(" ", "-");
		if (crashProofValue.length >= 3) {
			setSearch(crashProofValue);

			document.getElementById("alert").innerHTML = "";

			console.log("search:", search);
			console.log("target value:", crashProofValue);
		} else {
			document.getElementById("alert").innerHTML =
				"Enter at least 3 characters.";

			console.log("else-search:", search);
			console.log("else-target value:", crashProofValue);
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
					<button className="back-btn">Back to results</button>
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
							placeholder="Type to search"
							onChange={handleSearch}
						/>
						<button type="submit" onClick={handleClick}>
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</form>
				</nav>
				<span id="alert"></span>{" "}
			</>
		);
	}
}
