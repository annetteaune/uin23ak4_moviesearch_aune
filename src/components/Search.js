export default function Search({setSearch, getMovies}) {
	 const handleSubmit = (event) => {
			event.preventDefault();
		};

		const handleSearch = (event) => {
			setSearch(event.target.value);
			console.log(event.target.value);
		};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="search"
				placeholder="Type to search"
				onChange={handleSearch}
			/>
			<button type="submit" onClick={getMovies}>
				Search
			</button>
		</form>
	);
}
