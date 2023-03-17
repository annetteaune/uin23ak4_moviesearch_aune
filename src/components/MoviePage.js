import { useEffect } from "react";

export default function MoviePage({ movie, getDetails }) {
	useEffect(() => {
		getDetails();
		/*Fikk en warning om missing dependency, fant workaround;
			https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
			*/
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//placeholderbilde hvis poster ikke eksisterer
	if (movie.Poster === "N/A") {
		movie.Poster = "https://placehold.jp/200x300.png";
	}

	return (
		<>
			<article className="details-article">
				<h2>
					{movie.Title}
					<span className="year">{` (${movie.Year})`}</span>
				</h2>
				<div className="details-container">
					<img src={movie.Poster} alt={movie.Title} />
					<ul>
						<li>
							<i className="fa-brands fa-imdb"></i> {movie.imdbRating}{" "}
						</li>
						<li className="card-value">
							<span className="card-info">Genre:</span>
							{movie.Genre}
						</li>
						<li className="card-value">
							<span className="card-info">Runtime:</span>
							{movie.Runtime}
						</li>

						<li className="card-value">
							<span className="card-info">Director:</span>
							{movie.Director}
						</li>

						<li className="card-value">
							<span className="card-info">Actors: </span>
							{movie.Actors}
						</li>

						<li className="card-value">
							<span className="card-info">Awards:</span>
							{movie.Awards}
						</li>
					</ul>
				</div>
				<p className="plot">{movie.Plot}</p>
			</article>
		</>
	);
}
