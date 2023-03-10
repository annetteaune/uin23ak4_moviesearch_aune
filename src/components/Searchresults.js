import Moviecard from "./Moviecard";
import Search from "./Search";

export default function Searchresults({ movieList, setSelectedID, setSearch, getMovies }) {
	return (
		<>


				{movieList.map((mov, index) => (
					<Moviecard
						key={index}
						image={mov.Poster}
						title={mov.Title}
						year={mov.Year}
						id={mov.imdbID}
						setSelectedID={setSelectedID}
					/>
				))}
			
		</>
	);
}
